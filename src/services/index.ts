import { ServerStatus } from '@/interfaces/status';

export async function fetchStatus(): Promise<ServerStatus> {
  return fetch('https://api.mcstatus.io/v2/status/java/badomen.fun')
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
}
