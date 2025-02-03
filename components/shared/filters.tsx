import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';

interface Props {
  className?: string;
}
export const Filters: React.FC<Props> = ({ className }) => {
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
        <FilterCheckbox text='Customizable' value='1' />
        <FilterCheckbox text='New Arrivals' value='2' />
      </fieldset>

      {/* PRICE FILTERING */}
      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <label className='font-bold mb-3 block' htmlFor='price-range'>
          Price range:
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
            defaultValue={300000}
            aria-label='Maximum price'
          />
        </div>
      </div>

      {/* Ingredients filtering */}
      {/* Dough type filtering */}
    </div>
  );
};
