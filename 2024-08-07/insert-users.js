// insert-user.js

// INSERT ITON `users` (`name`) VALUES
// (`Fulano`),
// (`Beltrano`),
// (`Ciclano`);
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const data = [
    { name: 'Fulano' },
    { name: 'Beltrano' },
    { name: 'Ciclano' }
  ];
  await prisma.user.createMany({ data });
  console.log('Cadastro realizado com sucesso!');
}

main();
