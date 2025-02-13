import { categories } from "./constants";
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
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
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
