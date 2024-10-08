const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// 1) Selecionar todos os usuários que estão Online.

async function getOnlineUsers() {
    const onlineUsers =  await prisma.user.findMany({
        where: { status: "Online" },
    });
    console.log(onlineUsers);
}

// getOnlineUsers();

// 2) Selecionar um usuário pelo seu "userName" único.

async function getUserName() {
    const userName =  await prisma.user.findMany({
        where: { userName: "Mariana29" },
    });
    console.log(userName);
}

// getUserName();

// 3) Selecionar todos os usuários que foram cadastrados no último mês.

const lastMonth = new Date();
lastMonth.setMonth(lastMonth.getMonth() - 1)

async function getLastCreateAt() {
  const lastCreateAt = await prisma.user.findMany({
    where: { createAt: {
        gte: lastMonth
    } },
  });
  console.log(lastCreateAt);
}

// getLastCreateAt();

// 4) Selecionar todos os usuários que fazem aniversário no mês atual.

async function getBirthDate() {
    const users = await prisma.user.findMany();
    const birthString = users.map((user) => ({
      ...user,
      birthDate: user.birthDate.toISOString(),
    }));
    const userBornInSeptember = birthString.filter((user) =>
      user.birthDate.includes('-09-')
    );
    console.log(userBornInSeptember);
}

// getBirthDate();

// 5) Selecionar todos os usuários de "São Paulo".

async function getCity() {
    const userCity =  await prisma.user.findMany({
        where: { city: "Nogueira do Sul" },
    });
    console.log(userCity);
}

// getCity();

// 6) Selecionar todos os usuários da região Sudeste (Rio de Janeiro, São Paulo, Minas Gerais e Espírito Santo).

async function getRegion() {
    const userRegion =  await prisma.user.findMany({
        where: { region: "Sul" },
    });
    console.log(userRegion);
}

// getRegion();

// 7) Selecionar todos os usuários que possuem telefone.

async function getPhone() {
    const userPhone =  await prisma.user.findMany({
        where: { phone: {
            not: null
        }, },
    });
    console.log(userPhone);
}

// getPhone();

// 8) Selecionar todos os usuários que não possuem imagem de avatar.

async function getUserAvatar() {
    const userAvatar =  await prisma.user.findMany({
        where: {
            avatar: null
        }
    });
    console.log(userAvatar);
}

// getUserAvatar();

// 8) Selecionar todos os usuários que não possuem imagem de avatar.

async function getUserBio() {
    const userBio =  await prisma.user.findMany({
        where: { bio: {
            contains: "Soluta"
        } }
    });
    console.log(userBio);
}

getUserBio();