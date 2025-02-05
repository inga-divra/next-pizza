'use client';

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import React from 'react';

interface Props {
  className?: string;
}

const cats = [
  { id: 0, name: 'Pizzas' },
  { id: 1, name: 'Snacks' },
  { id: 2, name: 'Desserts' },
  { id: 3, name: 'Coffee' },
  { id: 4, name: 'Cocktails' },
  { id: 5, name: 'Drinks' },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {cats.map(({ id, name }, index) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === id &&
              'bg-white shadow-md shadow-gray-50 text-primary'
          )}
          key={index}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
