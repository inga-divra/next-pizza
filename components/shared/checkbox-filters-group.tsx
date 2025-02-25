'use client';

import React, { useState } from 'react';
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox';
import { Input, Skeleton } from '../ui';

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  // defaultValue?: string[];
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Search...',
  className,
  loading,
  onClickCheckbox,
  // defaultValue,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  if (loading) {
    return (
      <div className={className}>
        <p className='font-bold mb-3'>{title}</p>

        {...Array(limit)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} className='h-6 mb-4 rounded-[8px]' />
          ))}
      </div>
    );
  }

  const ingredients = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
      )
    : defaultItems?.slice(0, limit);

  return (
    <div className={className}>
      <p className='font-bold mb-3'>{title}</p>

      {showAll && (
        <div className='mb-5'>
          <Input
            className='bg-gray-50 border-none'
            placeholder={searchInputPlaceholder}
            onChange={onChangeSearchInput}
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
            onCheckedChange={() => onClickCheckbox?.(item.value)}
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
