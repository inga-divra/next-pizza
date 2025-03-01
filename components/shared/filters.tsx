'use client';

import React, { useEffect, useState } from 'react';
import { Title } from './title';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import qs from 'qs';
import { useRouter, useSearchParams } from 'next/navigation';
import { useIngredients } from '@/hooks/use-ingredients';
import { useFilters } from '@/hooks/use-filters';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  const items = ingredients.map((ingredient) => ({
    value: String(ingredient.id),
    text: ingredient.name,
  }));

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = {
      ...filters.prices,
      pizzaSizes: Array.from(filters.pizzaSizes),
      doughTypes: Array.from(filters.doughTypes),
      selectedIngredients: Array.from(filters.selectedIngredients),
    };

    const queryString = qs.stringify(params, { arrayFormat: 'comma' });

    router.push(`?${queryString}`, { scroll: false });
  }, []);

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
        onClickCheckbox={toggleDoughTypes}
        selected={doughTypes}
        items={[
          { text: 'Thin', value: '1' },
          { text: 'Traditional', value: '2' },
        ]}
      />

      {/* Size Type checkboxes */}
      <CheckboxFiltersGroup
        title='Pizza Size'
        name='pizzaSizes'
        className='mb-5'
        onClickCheckbox={toggleSizes}
        selected={pizzaSizes}
        items={[
          { text: '20cm', value: '20' },
          { text: '30 cm', value: '30' },
          { text: '40 cm', value: '40' },
        ]}
      />

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
            aria-label='Minimum price'
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
          />
          <span className='self-center font-semibold'>to</span>
          <Input
            type='number'
            placeholder='Max'
            min={0}
            max={1000}
            aria-label='Maximum price'
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
          />
        </div>
        {/* range slider*/}
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[prices.priceFrom || 0, prices.priceTo || 1000]}
          onValueChange={([priceFrom, priceTo]) =>
            setPrice({ priceFrom, priceTo })
          }
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
        onClickCheckbox={onAddId}
        selected={selectedIngredients}
      />
    </div>
  );
};
