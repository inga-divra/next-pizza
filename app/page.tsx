import { Container, Title, TopBar, Filters } from '@/components/shared';
import { ProductsGroupList } from '@/components/shared/products-group-list';
import { ingredients, products } from '@/prisma/constants';
import { Suspense } from 'react';
import { prisma } from '@/prisma/prisma-client';
export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          variations: true,
        },
      },
    },
  });

  return (
    <>
      <Container className='mt-10'>
        <Title text='All pizzas' size='lg' className='font-extrabold' />
      </Container>

      <TopBar />

      <Container className='mt-10 pb-14'>
        <div className='flex gap-20'>
          {/* Filtering */}
          <div className='w-64'>
            <Suspense fallback={<div>Loading filters...</div>}>
              <Filters />
            </Suspense>
          </div>
          {/* Product List*/}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
