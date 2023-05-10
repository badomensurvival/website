import HomePage from '@/components/pages/HomePage';
import { fetchStatus, getPlayerList } from '@/services';

export default async function Page() {
  const allPlayers = await getPlayerList();
  const status = await fetchStatus();

  return (
    <>
      <HomePage allPlayers={allPlayers} status={status} />
    </>
  );
}
