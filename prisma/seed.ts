import { categories, ingredients, products } from "./constants";
import { prisma } from "./prisma-client";
import { hashSync } from "bcryptjs";

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
}

async function down() {
    await prisma.ingredient.deleteMany();
    await prisma.category.deleteMany();
    await prisma.user.deleteMany();

    // Reset sequences for all tables with auto-increment
    await prisma.$executeRawUnsafe(`ALTER SEQUENCE "User_id_seq" RESTART WITH 1`);
    await prisma.$executeRawUnsafe(`ALTER SEQUENCE "Category_id_seq" RESTART WITH 1`);
    await prisma.$executeRawUnsafe(`ALTER SEQUENCE "Ingredient_id_seq" RESTART WITH 1`);

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
