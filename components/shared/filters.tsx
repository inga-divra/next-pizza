'use client';

import React, { useEffect, useState } from 'react';
import { Title } from './title';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';
import { useSet } from 'react-use';
import qs from 'qs';
import { useRouter, useSearchParams } from 'next/navigation';

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  pizzaSizes: string;
  doughTypes: string;
  ingredients: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;
  const router = useRouter();
  const { ingredients, loading, onAddId, selectedIngredients } =
    useFilterIngredients();

  const [pizzaSizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(
      searchParams.get('pizzaSizes')
        ? searchParams.get('pizzaSizes')?.split(',')
        : []
    )
  );
  const [doughTypes, { toggle: toggleDoughTypes }] = useSet(
    new Set<string>(
      searchParams.get('doughTypes')
        ? searchParams.get('doughTypes')?.split(',')
        : []
    )
  );

  const [prices, setPrice] = useState<PriceProps>({
    priceFrom: searchParams.get('priceFrom')
      ? Number(searchParams.get('priceFrom'))
      : undefined,
    priceTo: searchParams.get('priceTo')
      ? Number(searchParams.get('priceTo'))
      : undefined,
  });

  const items = ingredients.map((ingredient) => ({
    value: String(ingredient.id),
    text: ingredient.name,
  }));

  const updatePrice = (name: keyof PriceProps, value: number) =>
    setPrice({
      ...prices,
      [name]: value,
    });

  console.log(searchParams, 999);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const filters = {
      ...prices,
      pizzaSizes: Array.from(pizzaSizes),
      doughTypes: Array.from(doughTypes),
      selectedIngredients: Array.from(selectedIngredients),
    };

    const queryString = qs.stringify(filters, { arrayFormat: 'comma' });

    router.push(`?${queryString}`, { scroll: false });
  }, [prices, pizzaSizes, doughTypes, selectedIngredients]);

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
