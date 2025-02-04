'use client';
import React from 'react';

interface Props {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}
export const ProductsGroupList: React.FC<Props> = ({ className }) => {
  return <div className={className}></div>;
};
