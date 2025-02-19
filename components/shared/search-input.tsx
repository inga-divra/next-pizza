'use client';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import React from 'react';
import { useClickAway } from 'react-use';

interface Props {
  className?: string;
}
export const SearchInput: React.FC<Props> = ({ className }) => {
  const [focused, setFocused] = React.useState(false);

  const ref = React.useRef(null);
  useClickAway(ref, () => {
    setFocused(false);
  });

  return (
    <>
      {focused && (
        <div className='fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30' />
      )}

      <div
        ref={ref}
        className={cn(
          'flex rounded-2xl flex-1 justify-between relative h-11',
          className
        )}
      >
        <Search className='absolute left-3 top-1/2 h-5 translate-y-[-50%] text-gray-400' />
        <input
          className='w-full outline-none rounded-2xl bg-gray-50 pl-11 z-30'
          type='text'
          placeholder='Search...'
          onFocus={() => setFocused(true)}
        />
      </div>
    </>
  );
};
