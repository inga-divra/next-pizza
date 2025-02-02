import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

const cats = ['Pizzas', 'Combo', 'Cocktails', 'Coffee', 'Drinks', 'Desserts'];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-200 p-1 rounded-2xl', className)}
    >
      {cats.map((cat, index) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            activeIndex === index &&
              'bg-white shadow-md shadow-gray-50 text-primary'
          )}
          key={index}
        >
          <button>{cat}</button>
        </a>
      ))}
    </div>
  );
};
