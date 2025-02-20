'use client';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useClickAway } from 'react-use';

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [focused, setFocused] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

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
        />

        <div
          className={cn(
            'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
            focused && 'visible opacity-100 top-12'
          )}
          role='listbox'
        >
          <Link
            className='flex items-center w-full px-3 py-2 hover:bg-primary/10'
            href={`/product/1`}
            role='option'
          >
            <div className='relative w-8 h-8'>
              <Image
                className='rounded-sm object-cover'
                src='https://media.dodostatic.com/image/r:292x292/11ef2c97c3c349639cff50017b8bca8f.avif'
                alt='Pizza 1'
                fill={true}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <span className='px-3 py-2'>Pizza 1</span>
          </Link>
        </div>
      </div>
    </>
  );
};
