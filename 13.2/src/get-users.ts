import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ['info', 'query'] });

async function main() {
  const userId = 1; // Specify the user ID you want to fetch
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  console.log(user);
}

main()
  .then(() => {
    console.log("done with the query");
    return prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
