import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from './container';
import Image from 'next/image';
import { Button } from '../ui';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import { SearchInput } from './search-input';

interface Props {
  className?: string;
}
export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className='flex items-center justify-between py-8'>
        {/* Left side */}
        <Link href='/'>
          <div className='flex items-center gap-4'>
            <Image
              src='/logo.png'
              alt='Next Pizza official logo'
              width={35}
              height={35}
            />
            <div>
              <p className='text-2xl uppercase font-black'>Next Pizza</p>
              <p className='text-sm  text-gray-400 leading-3'>
                pure pizza perfection
              </p>
            </div>
          </div>
        </Link>
        {/* Search */}
        <div className='mx-10 flex-1'>
          <SearchInput />
        </div>
        {/* Right side */}
        <div className='flex items-center gap-3'>
          <Button className='flex items-center gap-1' variant='outline'>
            <User size={16} />
            Sign in
          </Button>

          <div>
            <Button className='group relative'>
              <strong>25 €</strong>
              <span className='h-full w-[1px] bg-white/30 mx-3'></span>
              <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                <ShoppingCart
                  size={16}
                  className='h-4 w-4 relative'
                  strokeWidth={2}
                />
                <strong>3</strong>
              </div>
              <ArrowRight
                size={20}
                className=' absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
