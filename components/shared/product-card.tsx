import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({ id, name, price, imageUrl }) => {
  return (
    <Link href={`/product/${id}`}>
      <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
        <Image
          src={imageUrl}
          alt={name}
          width={215}
          height={215}
          className='w-[215px] h-[215px] object-cover rounded-lg'
        />
      </div>
      <Title text={name} size='sm' className='mt-3 font-bold' />
      <p className='text-sm text-gray-400'>
        Chicken, mozzarella, cheddar & parmesan cheese, cheese sauce, tomatoes,
        Alfredo sauce, garlic
      </p>
      <div className='flex justify-between items-center mt-4'>
        <span className='text-[20px]'>
          from <b>{price} €</b>
        </span>
        <Button variant='secondary' className='text-base font-bold'>
          <Plus size={20} className='mr-1' />
          Add to cart
        </Button>
      </div>
    </Link>
  );
};
