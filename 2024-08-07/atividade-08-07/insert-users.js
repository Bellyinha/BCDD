const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const data = [
    {
      name: 'Alice Johnson',
      user: 'alicej123',
      type: 'User',
      email: 'alice.johnson@example.com',
      password: 'alicepassword',
      birth_date: new Date('1990-05-15').toISOString(),
    },
    {
      name: 'Robert Smith',
      user: 'robertsmith',
      type: 'Admin',
      email: 'robert.smith@example.com',
      password: 'robsmithpassword',
      birth_date: new Date('1985-11-22').toISOString(),
    },
    {
      name: 'Emily Davis',
      user: 'emilyd',
      type: 'User',
      email: 'emily.davis@example.com',
      password: 'emilypassword',
      birth_date: new Date('1992-07-30').toISOString(),
    },
    {
      name: 'Michael Brown',
      user: 'michaelb',
      type: 'Admin',
      email: 'michael.brown@example.com',
      password: 'michaelpassword',
      birth_date: new Date('1988-02-25').toISOString(),
    },
    {
      name: 'Sophia Wilson',
      user: 'sophiaw',
      type: 'User',
      email: 'sophia.wilson@example.com',
      password: 'sophiapassword',
      birth_date: new Date('1995-09-10').toISOString(),
    },
  ];

  await prisma.user.createMany({ data });

  const users = await prisma.user.findMany();
  console.log(users);
}

main();
