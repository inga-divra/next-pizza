'use client';

import { Container, ProductImage, Title } from '@/components/shared';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        if (!params?.id) return; // Wait for params to load

        const res = await fetch(`/api/product/${params.id}`);
        if (!res.ok) throw new Error('Failed to fetch product');
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError('Error loading product');
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [params?.id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <Container className='flex flex-col my-10'>
      <div className='flex flex-1'>
        <ProductImage imageUrl={product.imageUrl} size={40} />
        <div className='w-[490px] bg-[#f7f6f5] p-7'>
          <Title
            text={product.name}
            size='md'
            className='font-extrabold mb-1'
          />
          <p className='text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            et!
          </p>
        </div>
      </div>
    </Container>
  );
}
