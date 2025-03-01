'use client';

import React from 'react';
import { Title } from './title';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilters, useIngredients, useQueryFilters } from '@/hooks';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  const items = ingredients.map((ingredient) => ({
    value: String(ingredient.id),
    text: ingredient.name,
  }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices('priceFrom', prices[0]);
    filters.setPrices('priceTo', prices[1]);
  };

  return (
    <div className={className}>
      <Title
        text='Filter'
        size='sm'
        className='mb-5 font-bold'
        aria-label='Filters section'
      />

      {/* Dough Type checkboxes */}
      <CheckboxFiltersGroup
        title='Dough Type'
        name='doughTypes'
        className='mb-5'
        onClickCheckbox={filters.setDoughTypes}
        selected={filters.doughTypes}
        items={[
          { text: 'Thin', value: '1' },
          { text: 'Traditional', value: '2' },
        ]}
      />

      {/*Pizza sizes checkboxes */}
      <CheckboxFiltersGroup
        title='Pizza Size'
        name='pizzaSizes'
        className='mb-5'
        onClickCheckbox={filters.setPizzaSizes}
        selected={filters.pizzaSizes}
        items={[
          { text: '20cm', value: '20' },
          { text: '30 cm', value: '30' },
          { text: '40 cm', value: '40' },
        ]}
      />

      {/* price filtering */}
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
            aria-label='Minimum price'
            value={String(filters.prices.priceFrom ?? '')}
            onChange={(e) =>
              filters.setPrices('priceFrom', Number(e.target.value) || 0)
            }
          />
          <span className='self-center font-semibold'>to</span>
          <Input
            type='number'
            placeholder='Max'
            min={0}
            max={1000}
            aria-label='Maximum price'
            value={String(filters.prices.priceTo ?? '')}
            onChange={(e) =>
              filters.setPrices('priceTo', Number(e.target.value) || 0)
            }
          />
        </div>

        {/* range slider*/}
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[
            filters.prices.priceFrom || 0,
            filters.prices.priceTo || 1000,
          ]}
          onValueChange={updatePrices}
        />
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
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  );
};
