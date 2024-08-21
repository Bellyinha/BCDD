const { PrismaClient } = require('@prisma/client');
const { fakerPT_BR: faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

async function main() {
    
    const data = Array.from({ length: 10 }).map(function () {
        const name = faker.person.firstName();
        const username = faker
        const type = faker
        const email = faker
        const password =  faker
        const birthday = faker
        const createAt = faker

        return { name, username, type, email, password, birthday, createAt };
    });

    await prisma.user.createMany({ data });
}

main();