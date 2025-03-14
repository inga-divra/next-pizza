'use client';

import React, { useEffect, useCallback, useRef } from 'react';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';
import { useIntersection } from 'react-use';
import { useCategoryStore } from '@/store/category';

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  items: {
    price: number;
  }[];
}

interface Props {
  title: string;
  items: Product[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  const handleIntersection = useCallback(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, setActiveCategoryId]);

  useEffect(handleIntersection, [handleIntersection]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size='lg' className='font-extrabold mb-5' />
      {items.length > 0 ? (
        <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
          {items.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.items?.[0]?.price ?? 0}
            />
          ))}
        </div>
      ) : (
        <p className='text-gray-500'>No products available</p>
      )}
    </div>
  );
};
