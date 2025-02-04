import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

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
        className='mt-5'
        limit={6}
        defaultItems={[
          { text: 'Cheese sauce', value: '1' },
          { text: 'Mozzarella', value: '2' },
          { text: 'Garlic', value: '3' },
          { text: 'Pickles', value: '4' },
          { text: 'Red onion', value: '5' },
          { text: 'Tomatoes', value: '6' },
        ]}
        items={[
          { text: 'Cheese sauce', value: '1' },
          { text: 'Mozzarella', value: '2' },
          { text: 'Garlic', value: '3' },
          { text: 'Pickles', value: '4' },
          { text: 'Red onion', value: '5' },
          { text: 'Tomatoes', value: '6' },
          { text: 'Pepperoni', value: '7' },
          { text: 'Mushrooms', value: '8' },
          { text: 'Bacon', value: '9' },
          { text: 'Olives', value: '10' },
          { text: 'Pineapple', value: '11' },
          { text: 'Ham', value: '12' },
          { text: 'Bell peppers', value: '13' },
          { text: 'Anchovies', value: '14' },
          { text: 'Chicken', value: '15' },
          { text: 'Spinach', value: '16' },
          { text: 'Feta cheese', value: '17' },
          { text: 'Arugula', value: '18' },
          { text: 'Eggplant', value: '19' },
          { text: 'Sun-dried tomatoes', value: '20' },
        ]}
      />
      {/* Dough type filtering */}
    </div>
  );
};
