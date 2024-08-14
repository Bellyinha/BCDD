const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const data = [
    {
      title: 'Amazing Grace',
      artists: 'John Newton',
      album: 'Hymns of Praise',
      gender: 'Gospel',
      single: true,
      release_year: 1979,
      duration: new Date('2024-08-14T00:03:21').toISOString(),
    },
    {
      title: 'How Great Thou Art',
      artists: 'Carl Boberg',
      album: 'Great Hymns of Faith',
      gender: 'Gospel',
      single: true,
      release_year: 1985,
      duration: new Date('2024-08-14T00:04:56').toISOString(),
    },
    {
      title: 'Amazing Grace (My Chains Are Gone)',
      artists: 'Chris Tomlin',
      album: 'Hello Love',
      gender: 'Gospel',
      single: false,
      release_year: 2008,
      duration: new Date('2024-08-14T00:05:00').toISOString(),
    },
    {
      title: 'Oceans (Where Feet May Fail)',
      artists: 'Hillsong United',
      album: 'Zion',
      gender: 'Gospel',
      single: false,
      release_year: 2013,
      duration: new Date('2024-08-14T00:01:20').toISOString(),
    },
    {
      title: 'Reckless Love',
      artists: 'Cory Asbury',
      album: 'Reckless Love',
      gender: 'Gospel',
      single: true,
      release_year: 2018,
      duration: new Date('2024-08-14T00:03:21').toISOString(),
    },
  ];

  await prisma.music.createMany({ data });

  const musics = await prisma.music.findMany();
  console.log(musics);
}

main();
