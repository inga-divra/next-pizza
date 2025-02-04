import {
  Container,
  Title,
  TopBar,
  Filters,
  ProductCard,
} from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='All pizzas' size='lg' className='font-extrabold' />
      </Container>

      <TopBar />

      <Container className='mt-10 pb-14'>
        <div className='flex gap-14'>
          {/* Filtering */}
          <div className='w-64'>
            <Filters />
          </div>
          {/* Product List*/}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductCard
                id={1}
                name='Cheeseburger pizza'
                price={12.9}
                imageUrl='https://media.dodostatic.com/image/r:292x292/11ee7d5f4698bcd1bccacdd735d41e05.avif'
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
