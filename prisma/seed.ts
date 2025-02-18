import { Prisma } from "@prisma/client";
import { categories, ingredients, products } from "./constants";
import { prisma } from "./prisma-client";
import { hashSync } from "bcryptjs";

const randomDecimalNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductVariation = ({
    productId,
    pizzaType,
    size,
}: {
    productId: number;
    pizzaType?: 1 | 2;
    size?: 20 | 30 | 40;
}) => {
    return {
        productId,
        price: randomDecimalNumber(18, 20),
        pizzaType,
        size,
    } as Prisma.ProductVariationUncheckedCreateInput;
};

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: 'John Doe',
                email: 'p5d5o@example.com',
                password: hashSync('11111111', 10),
                verified: new Date(),
                role: 'USER',
                provider: 'local',
                providerId: '12345'
            },
            {
                fullName: 'Admin Admin',
                email: 'admin@example.com',
                password: hashSync('11111111', 10),
                verified: new Date(),
                role: 'ADMIN',
                provider: 'local',
                providerId: '67890'
            },
        ]
    });

    await prisma.category.createMany({
        data: categories
    });

    await prisma.ingredient.createMany({
        data: ingredients
    })

    await prisma.product.createMany({
        data: products
    })

    const pizza1 = await prisma.product.create({
        data: {
            name: 'Double Pepperoni',
            imageUrl:
                'https://media.dodostatic.com/image/r:292x292/11ee7d5f33a248b5bb9d9c4f410466fb.avif',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(0, 5),
            },
        },
    });

    const pizza2 = await prisma.product.create({
        data: {
            name: 'Cheeseburger',
            imageUrl:
                'https://media.dodostatic.com/image/r:292x292/11ee7d5f4698bcd1bccacdd735d41e05.avif',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(5, 10),
            },
        },
    });

    const pizza3 = await prisma.product.create({
        data: {
            name: '4 Seasons',
            imageUrl:
                'https://media.dodostatic.com/image/r:292x292/11ee7d5f30691feb850d840e4f58c274.avif',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(10, 40),
            },
        },
    });

    await prisma.productVariation.createMany({
        data: [
            // Pizza 'Double Pepperoni'
            generateProductVariation({ productId: pizza1.id, pizzaType: 1, size: 20 }),
            generateProductVariation({ productId: pizza1.id, pizzaType: 2, size: 30 }),
            generateProductVariation({ productId: pizza1.id, pizzaType: 2, size: 40 }),

            // Pizza 'Cheeseburger'
            generateProductVariation({ productId: pizza2.id, pizzaType: 1, size: 20 }),
            generateProductVariation({ productId: pizza2.id, pizzaType: 1, size: 30 }),
            generateProductVariation({ productId: pizza2.id, pizzaType: 1, size: 40 }),
            generateProductVariation({ productId: pizza2.id, pizzaType: 2, size: 20 }),
            generateProductVariation({ productId: pizza2.id, pizzaType: 2, size: 30 }),
            generateProductVariation({ productId: pizza2.id, pizzaType: 2, size: 40 }),

            // Pizza '4 Seasons'
            generateProductVariation({ productId: pizza3.id, pizzaType: 1, size: 20 }),
            generateProductVariation({ productId: pizza3.id, pizzaType: 2, size: 30 }),
            generateProductVariation({ productId: pizza3.id, pizzaType: 2, size: 40 }),

            // Others products
            generateProductVariation({ productId: 1 }),
            generateProductVariation({ productId: 2 }),
            generateProductVariation({ productId: 3 }),
            generateProductVariation({ productId: 4 }),
            generateProductVariation({ productId: 5 }),
            generateProductVariation({ productId: 6 }),
            generateProductVariation({ productId: 7 }),
            generateProductVariation({ productId: 8 }),
            generateProductVariation({ productId: 9 }),
            generateProductVariation({ productId: 10 }),
            generateProductVariation({ productId: 11 }),
            generateProductVariation({ productId: 12 }),
            generateProductVariation({ productId: 13 }),
            generateProductVariation({ productId: 14 }),
            generateProductVariation({ productId: 15 }),
            generateProductVariation({ productId: 16 }),
            generateProductVariation({ productId: 17 }),
        ]
    });

}

async function down() {
    await prisma.productVariation.deleteMany();
    await prisma.product.deleteMany();
    await prisma.ingredient.deleteMany();
    await prisma.category.deleteMany();
    await prisma.user.deleteMany();

    // Reset sequences for all tables with auto-increment
    await prisma.$executeRawUnsafe(`ALTER SEQUENCE "User_id_seq" RESTART WITH 1`);
    await prisma.$executeRawUnsafe(`ALTER SEQUENCE "Category_id_seq" RESTART WITH 1`);
    await prisma.$executeRawUnsafe(`ALTER SEQUENCE "Ingredient_id_seq" RESTART WITH 1`);
    await prisma.$executeRawUnsafe(`ALTER SEQUENCE "Product_id_seq" RESTART WITH 1`);
    await prisma.$executeRawUnsafe(`ALTER SEQUENCE "ProductVariation_id_seq" RESTART WITH 1`); // <-- ВАЖНО
}


async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.error(e);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
