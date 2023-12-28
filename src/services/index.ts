import { PlanPlayerData } from '@/interfaces/plan';
import { ServerStatus } from '@/interfaces/status';
import { OnlinePlayers } from '@/interfaces/players';

export const apiFetcher = (url: string, config?: RequestInit) =>
  fetch(url, {
    ...config,
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
      'Key': String(process.env.API_KEY),
      ...config?.headers,
    }
  }).then((res) => res.json());


export async function getPlayerList(): Promise<PlanPlayerData[]> {
  return fetch(`https://plan.badomen.com.br/v1/players?server=Server%201`, {
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
  return fetch(`/api/status`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
}


export async function fetchOnlinePlayers(): Promise<OnlinePlayers> {
  return fetch(`/api/online-players`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
}