'use client';
import { cn } from '@/lib/utils';
import { Api } from '@/services/api-client';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useClickAway, useDebounce } from 'react-use';
import { Product } from '@prisma/client';

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [focused, setFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const ref = React.useRef<HTMLDivElement>(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    () => {
      const fetchProducts = async () => {
        if (!searchQuery.trim()) {
          setProducts([]); // Clear the list when the search query is empty
          return;
        }
        try {
          const products = await Api.products.search(searchQuery);
          setProducts(products);
        } catch (error) {
          console.error('Error while searching for products:', error);
        }
      };

      fetchProducts();
    },
    250,
    [searchQuery]
  );

  return (
    <>
      {focused && (
        <div className='fixed inset-0 bg-black/50 z-30' aria-hidden='true' />
      )}

      <div
        ref={ref}
        className={cn(
          'flex rounded-2xl flex-1 justify-between relative h-11',
          className
        )}
      >
        {/* Search icon */}
        <Search
          className='absolute left-3 top-1/2 h-5 -translate-y-1/2 text-gray-400'
          aria-hidden='true'
        />
        <input
          className='w-full outline-none rounded-2xl bg-gray-50 pl-11 z-30'
          type='text'
          placeholder='Search...'
          aria-label='Search products'
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {focused && products.length > 0 && (
          <div
            className='absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 z-30'
            role='listbox'
          >
            {products.map((product) => (
              <Link
                className='flex items-center w-full px-3 py-2 hover:bg-primary/10'
                role='option'
                key={product.id}
                href={`/product/${product.id}`}
              >
                <div className='relative w-8 h-8'>
                  <Image
                    className='rounded-sm object-cover'
                    src={
                      product.imageUrl ||
                      'https://media.dodostatic.com/image/r:292x292/11ee7d5f5231c89db0db6fea7369a1d7.avif'
                    }
                    alt={product.name || 'Product'}
                    fill={true}
                    sizes='32px'
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <span className='px-3 py-2'>
                  {product.name || 'Unnamed Product'}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
