'use client';
import { useParams } from 'next/navigation';

export default function ProductPage() {
  const params = useParams();
  const id = params?.id as string;

  return <p>Product {id}</p>;
}
