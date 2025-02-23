export const categories = [
    { name: 'Pizzas' },
    { name: 'Snacks' },
    { name: 'Desserts' },
    { name: 'Coffee' },
    { name: 'Cocktails' },
    { name: 'Drinks' },
];

export const ingredients = [
    {
        name: 'Soft Cheese',
        price: 1.50,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/c0b05086706a44ad97f5b927d7848b9c.png',
    },
    {
        name: 'Chicken',
        price: 1.70,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/dc9acf4932a24a54890abed1bcdf2da8.png',
    },
    {
        name: 'Champignons',
        price: 1.20,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/7365d2de335f4ede89cdce6a4654022f.png',
    },
    {
        name: 'Paprika',
        price: 1.20,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/023cbaeb61f140139bdc1f5f54dc0633.png',
    },
    {
        name: 'Mozzarella Cheese',
        price: 1.50,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/c56e697199554cb18d1f8552c75310fd.png',
    },
    {
        name: 'Blue Cheese',
        price: 1.50,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/98359b102a4f42e0aea815bcab52e822.png',
    },
    {
        name: 'Black Olives',
        price: 1.20,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/300468676adf430990656c0b9e2311fe.png',
    },
    {
        name: 'Rucola',
        price: 1.15,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/3ec7536525a64bb68dded588f616b2f6.png',
    },
    {
        name: 'Cherry Tomatoes',
        price: 1.20,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/f71aeb915133495c988fa57069a53497.png',
    },
    {
        name: 'Cheddar Cheese',
        price: 1.50,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/d08f04377914445eaf93ccf71f442f31.png',
    },
    {
        name: 'Hunter\'s Sausages',
        price: 1.70,
        imageUrl: 'https://cdn.dodostatic.com/static/Img/Ingredients/0193a71cacce72d78f5cc35c65e1ab59.png',
    },
    {
        name: 'Ham',
        price: 1.70,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/303e37da474746dcb32f8cb30af6fdeb.png',
    },
    {
        name: 'Bacon',
        price: 1.70,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/419ba07585834b3abd0833c64f0106de.png',
    },
    {
        name: 'Red Onion',
        price: 1.50,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/e5c17ba0a8114e11a50b82e57a448063.png',
    },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
    {
        name: 'Truffle Chicken Dodster',
        imageUrl: 'https://media.dodostatic.com/image/r:292x292/11ef87d1152560abb7b28c274276213f.avif',
        categoryId: 2,
    },
    {
        name: 'Pepperoni rolls',
        imageUrl: 'https://media.dodostatic.com/image/r:292x292/11ee96c94a1ad044b0a88a81e24f3a11.avif',
        categoryId: 2,
    },
    {
        name: 'Coffee Latte',
        imageUrl: 'https://media.dodostatic.com/image/r:292x292/11ef2a58598d4480acd43a684b0b06bf.avif',
        categoryId: 2,
    },
    {
        name: 'Chocolate muffin',
        imageUrl: 'https://media.dodostatic.com/image/r:292x292/11ef2047d166be70b21af4e4b01de920.avif',
        categoryId: 3,
    },
    {
        name: 'Cottage cheese fritters',
        imageUrl: 'https://media.dodostatic.com/image/r:292x292/11ef20469e20c57eae649428265d3e35.avif',
        categoryId: 3,
    },
    {
        name: 'Baked Potatoes with Sauce 🌱',
        imageUrl: 'https://media.dodostatic.com/image/r:292x292/01934f4b53b7777d9465289e8b55854b.avif',
        categoryId: 3,
    },
    {
        name: 'Dodster',
        imageUrl: 'https://media.dodostatic.com/image/r:292x292/01934f4b53b7777d9465289e8b55854b.avif',
        categoryId: 3,
    },
    {
        name: 'Spicy Dodster 🌶️🌶️',
        imageUrl: 'https://media.dodostatic.com/image/r:292x292/01934f4b53b7777d9465289e8b55854b.avif',
        categoryId: 3,
    },
    {
        name: 'Banana Milkshake',
        imageUrl: 'https://media.dodostatic.com/image/r:292x292/01934f4b53b7777d9465289e8b55854b.avif',
        categoryId: 4,
    },
    {
        name: 'Caramel Apple Milkshake',
        imageUrl: 'https://media.dodostatic.com/image/r:292x292/01934f4b53b7777d9465289e8b55854b.avif',
        categoryId: 4,
    },
    {
        name: 'Milkshake with Oreo Cookies',
        imageUrl: 'https://media.dodostatic.com/image/r:292x292/01934f4b53b7777d9465289e8b55854b.avif',
        categoryId: 4,
    },
    {
        name: 'Classic Milkshake 👶',
        imageUrl: 'https://media.dodostatic.com/image/r:292x292/01934f4b53b7777d9465289e8b55854b.avif',
        categoryId: 4,
    },
    {
        name: 'Irish Cappuccino',
        imageUrl: 'https://media.dodostatic.com/image/r:292x292/01934f4b53b7777d9465289e8b55854b.avif',
        categoryId: 5,
    },
    {
        name: 'Caramel Cappuccino',
        imageUrl: 'https://media.dodostatic.com/image/r:292x292/01934f4b53b7777d9465289e8b55854b.avif',
        categoryId: 5,
    },
    {
        name: 'Coconut Latte',
        imageUrl: 'https://media.dodostatic.com/image/r:292x292/01934f4b53b7777d9465289e8b55854b.avif',
        categoryId: 5,
    },
    {
        name: 'Americano Coffee',
        imageUrl: 'https://media.dodostatic.com/image/r:292x292/01934f4b53b7777d9465289e8b55854b.avif',
        categoryId: 5,
    },
    {
        name: 'Coffee Latte',
        imageUrl: 'https://media.dodostatic.com/image/r:292x292/01934f4b53b7777d9465289e8b55854b.avif',
        categoryId: 5,
    },
];
