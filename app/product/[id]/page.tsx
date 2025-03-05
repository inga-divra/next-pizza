import { Container, ProductImage, Title } from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params;

  const productId = Number(id);

  if (isNaN(productId)) {
    return notFound();
  }

  const product = await prisma.product.findFirst({
    where: {
      id: productId,
    },
  });

  if (!product) {
    return notFound();
  }

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
