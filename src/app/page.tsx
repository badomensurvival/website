import prisma from '@/lib/prisma';
import HomePage from '@/components/pages/HomePage';
import { fetchStatus } from '@/services';

export default async function Page() {
  const allPlayers = await prisma.plan_users.findMany();
  const status = await fetchStatus();

  return (
    <>
      <HomePage allPlayers={allPlayers} status={status} />
    </>
  );
}
