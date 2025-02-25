'use client';

import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';

interface Props {
  className?: string;
}
export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, onAddId } = useFilterIngredients();

  const items = ingredients.map((ingredient) => ({
    value: String(ingredient.id),
    text: ingredient.name,
  }));

  return (
    <div className={className}>
      <Title
        text='Filter'
        size='sm'
        className='mb-5 font-bold'
        aria-label='Filters section'
      />

      {/* PRODUCT TYPE FILTERING */}
      <fieldset className='flex flex-col gap-4'>
        <legend className='sr-only'>Product Type Filter</legend>{' '}
        {/* Hidden heading for accessibility */}
        <FilterCheckbox text='Customizable' value='1' name='productType' />
        <FilterCheckbox text='New Arrivals' value='2' name='productType' />
      </fieldset>

      {/* PRICE FILTERING */}
      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <label className='font-bold mb-3 block' htmlFor='price-range'>
          Price range
        </label>
        <div className='flex gap-3 mb-5' id='price-range'>
          <Input
            type='number'
            placeholder='Min'
            min={0}
            max={1000}
            defaultValue={0}
            aria-label='Minimum price'
          />
          <span className='self-center font-semibold'>to</span>
          <Input
            type='number'
            placeholder='Max'
            min={0}
            max={1000}
            defaultValue={1000}
            aria-label='Maximum price'
          />
        </div>
        {/* range slider*/}
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      {/* Ingredients filtering */}
      <CheckboxFiltersGroup
        title='Ingredients'
        name='ingredients'
        className='mt-5'
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
      />
    </div>
  );
};
