'use client';

import React, { useState } from 'react';
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox';
import { Input } from '../ui';

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}
export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Search...',
  className,
  onChange,
  defaultValue,
}) => {
  const [showAll, setShowAll] = useState(false);
  const ingredients = showAll ? items : defaultItems?.slice(0, limit);

  return (
    <div className={className}>
      <p className='font-bold mb-3'>{title}</p>

      {showAll && (
        <div className='mb-5'>
          <Input
            className='bg-gray-50 border-none'
            placeholder={searchInputPlaceholder}
          />
        </div>
      )}

      <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
        {ingredients.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(ids) => console.log(ids)}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button
            onClick={() => setShowAll(!showAll)}
            className='text-primary mt-6'
            aria-expanded={showAll}
            aria-controls='ingredients-list'
          >
            {showAll ? 'Hide' : 'Show all'}
          </button>
        </div>
      )}
    </div>
  );
};
