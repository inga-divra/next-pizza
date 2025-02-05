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
              <ProductsGroupList
                title='Snacks'
                items={[
                  {
                    id: 1,
                    name: 'Truffle Chicken Dodster ',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ef87d1152560abb7b28c274276213f.avif',
                    items: [{ price: 4.5 }],
                  },
                  {
                    id: 2,
                    name: 'Dodster ',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ee7d5f578e4dd9b8f840a88ae1f1a9.avif',
                    items: [{ price: 3.9 }],
                  },
                  {
                    id: 3,
                    name: 'Chilli Dodster ',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ee7d5f585df060b6a542935fcb9ec1.avif',
                    items: [{ price: 4.1 }],
                  },
                  {
                    id: 4,
                    name: 'Cheese starter',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11eed23fdb5774a6b40a8e591d512dc6.avif',
                    items: [{ price: 4.1 }],
                  },
                  {
                    id: 5,
                    name: 'Mushrooms starter',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ef2045d1b1bb758c5f92e794fada2a.avif',
                    items: [{ price: 4.1 }],
                  },
                  {
                    id: 6,
                    name: 'Spicy starter',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ef2045e9e56fa8baf92147210aa947.avif',
                    items: [{ price: 4.1 }],
                  },
                  {
                    id: 7,
                    name: 'Chicken wings',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ee7d5f5a190745b53cb3f5db064715.avif',
                    items: [{ price: 5.6 }],
                  },
                  {
                    id: 8,
                    name: 'Salad Caesar ',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ee7d5f5aa23d78ba1904d240066583.avif',
                    items: [{ price: 5.2 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title='Desserts'
                items={[
                  {
                    id: 1,
                    name: 'Fondant',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11eeedc83c85e47c98b1ce69cbfaadcf.avif',
                    items: [{ price: 4.2 }],
                  },
                  {
                    id: 2,
                    name: 'Sweet cinnamon rolls',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ee96c5b9b5593a953dd3b99d1021b9.avif',
                    items: [{ price: 3.65 }],
                  },
                  {
                    id: 3,
                    name: 'Cottage cheese fritters',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ef20469e20c57eae649428265d3e35.avif',
                    items: [{ price: 4.8 }],
                  },
                  {
                    id: 4,
                    name: 'Chocolate muffin ',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ef2047d166be70b21af4e4b01de920.avif',
                    items: [{ price: 2.95 }],
                  },
                  {
                    id: 5,
                    name: 'Caramel muffin ',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ef2047bda49075aea54ad8e556486a.avif',
                    items: [{ price: 2.95 }],
                  },
                  {
                    id: 6,
                    name: 'Chocolate Donut ',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ef2046bf2f3150abf3e681bbfd7513.avif',
                    items: [{ price: 2.95 }],
                  },
                  {
                    id: 7,
                    name: 'Caramel Donut ',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ef2046cc9529dda57f63536c76de10.avif',
                    items: [{ price: 2.95 }],
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
