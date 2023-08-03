import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

async function main() {
//   ... you will write your Prisma Client queries here
//   =====> new user with unique email <==========//
  const user = await prisma.user.create({
    data: {
      name: 'Jono',
      email: 'jonopadoa@gmail.com',
    },
  })
  console.log(user)
  //================================================//
//   const users = await prisma.user.findMany()
//   console.log(users)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })