const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const data = [
    {
      name: 'Wireless Mouse',
      descripition: 'A high-precision wireless mouse with ergonomic design.',
      price: 29.99,
      stock: 150,
      assessment: 4.5,
    },
    {
      name: 'Bluetooth Headphones',
      descripition: 'Over-ear Bluetooth headphones with noise cancellation.',
      price: 89.99,
      stock: 80,
      assessment: 4.7,
    },
    {
      name: '4K Monitor',
      descripition: '27-inch 4K monitor with ultra-thin bezel and high color accuracy.',
      price: 299.99,
      stock: 60,
      assessment: 4.8,
    },
    {
      name: 'Mechanical Keyboard',
      descripition: 'Compact mechanical keyboard with RGB backlighting.',
      price: 79.99,
      stock: 120,
      assessment: 4.6,
    },
    {
      name: 'USB-C Hub',
      descripition: 'Multi-port USB-C hub with 4 USB ports and HDMI output.',
      price: 39.99,
      stock: 200,
      assessment: 4.4,
    },
  ];

  await prisma.product.createMany({ data });

  const products = await prisma.product.findMany();
  console.log(products);
}

main();
