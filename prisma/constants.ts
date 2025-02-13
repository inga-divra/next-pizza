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
