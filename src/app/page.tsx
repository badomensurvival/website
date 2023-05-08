import prisma from '@/lib/prisma';
import HomePage from '@/components/HomePage';

export default async function Page() {
  const allPlayers = await prisma.plan_users.findMany();

  return (
    <>
      <HomePage allPlayers={allPlayers} />
    </>
  );
}
