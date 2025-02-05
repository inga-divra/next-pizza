import { Container, Title, TopBar, Filters } from '@/components/shared';
import { ProductsGroupList } from '@/components/shared/products-group-list';

export default function Home() {
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
            <Filters />
          </div>
          {/* Product List*/}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList
                title='Pizza'
                items={[
                  {
                    id: 1,
                    name: 'Cheeseburger',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ee7d5f4698bcd1bccacdd735d41e05.avif',
                    items: [{ price: 11.25 }],
                  },
                  {
                    id: 2,
                    name: 'Chicken Blue Cheese ',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ee7d5f4ce9ae02bea03aa653b59e39.avif',
                    items: [{ price: 11.25 }],
                  },
                  {
                    id: 3,
                    name: 'Mushrooms&Rucola',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ee7d5f513dcf2297035c77c12e4141.avif',
                    items: [{ price: 11.25 }],
                  },
                  {
                    id: 4,
                    name: 'Royal',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ee96106734c44282ea7d91f7b21f3d.avif',
                    items: [{ price: 11.25 }],
                  },
                  {
                    id: 5,
                    name: 'Pepperoni',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11eed4b2ea8592a9a1f2878b7b53419f.avif',
                    items: [{ price: 11.25 }],
                  },
                  {
                    id: 6,
                    name: 'Cheesy Chicken ',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ee7d5f4fd6292cb0210039b51ee363.avif',
                    items: [{ price: 11.25 }],
                  },
                  {
                    id: 7,
                    name: 'Chicken BBQ ',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ee7d5f424698bf9d7e4ad706a3ffcb.avif',
                    items: [{ price: 11.25 }],
                  },
                  {
                    id: 8,
                    name: 'Meaty ',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ee7d5f3b58554bb4a33a8231e17f99.avif',
                    items: [{ price: 10.25 }],
                  },
                ]}
                categoryId={1}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
