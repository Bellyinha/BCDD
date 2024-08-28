const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getOnlineUsers() {
    const onlineUsers =  await prisma.user.findMany({
        where: { status: "Online" },
    });
    console.log(onlineUsers);
}

getOnlineUsers();