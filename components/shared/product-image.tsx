import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface Props {
  className?: string;
  imageUrl: string;
  size: 20 | 30 | 40;
}
export const ProductImage: React.FC<Props> = ({
  imageUrl,
  size,
  className,
}) => {
  const imageSize = size === 20 ? 300 : size === 30 ? 400 : 500;

  return (
    <div className={className}>
      <Image
        src={imageUrl}
        priority
        alt='Product image'
        className={cn(
          'flex items-center justify-center flex-1 relative w-full',
          {
            'w-[300px] h-[300px]': size === 20,
            'w-[400px] h-[400px]': size === 30,
            'w-[500px] h-[500px]': size === 40,
          }
        )}
        width={imageSize}
        height={imageSize}
      />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed rounded-full border-red w-[450px] h-[450px]'></div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted rounded-full border-blue w-[370px] h-[370px]'></div>
    </div>
  );
};
