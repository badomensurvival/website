import { ServerStatus } from '@/interfaces/status';

export interface PlanPlayerData {
  sessions: string;
  jobs: {
    d: string;
    v: string;
  };
  index: {
    d: string;
    v: string;
  };
  registered: {
    d: string;
    v: string;
  };
  permissionGroups: {
    d: string;
    v: string;
  };
  seen: {
    d: string;
    v: string;
  };
  balance: {
    d: string;
    v: string;
  };
  name: string;
  activePlaytime: {
    d: string;
    v: string;
  };
  primaryGroup: {
    d: string;
    v: string;
  };
  geolocation: string;
  group: {
    d: string;
    v: string;
  };
  username: {
    d: string;
    v: string;
  };
}

export async function getPlayerList(): Promise<PlanPlayerData[]> {
  return fetch(`http://plan.badomen.fun/v1/players?server=Server%201`, {
    cache: 'no-store',
  })
    .then((res) => res.json())
    .then(({ data }: { data: PlanPlayerData[] }) => {
      const regex = /(<([^>]+)>)/gi;

      return data.map((player: any) => ({
        ...player,
        name: player.name.replace(regex, ''),
      }));
    })
    .catch((err) => {
      console.log(err);
      return [] as PlanPlayerData[];
    });
}

export async function fetchStatus(): Promise<ServerStatus> {
  return fetch('https://api.mcstatus.io/v2/status/java/badomen.fun', {
    cache: 'no-store',
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
}
