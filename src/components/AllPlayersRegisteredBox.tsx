import { ServerStatus } from '@/interfaces/status';
//@ts-ignore
import { plan_users } from '@prisma/client';
import Cravatar from '@/components/Cravatar';
import { PlanPlayerData } from '@/services';

type Props = {
  status: ServerStatus;
  players: PlanPlayerData[];
};

export default function AllPlayersRegistered({ status, players }: Props) {
  return (
    <div className="p-3 bg-white dark:bg-neutral-800 rounded shadow space-y-2 relative overflow-x-auto">
      <h3 className="font-extrabold text-neutral-800 dark:text-neutral-200">
        Jogadores Registrados
      </h3>

      <table className="table-auto w-full text-sm text-left text-neutral-500 dark:text-neutral-400 break-keep">
        <thead className="text-xs text-neutral-700 uppercase bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nome
            </th>
            <th scope="col" className="px-6 py-3">
              Jobs
            </th>
            <th scope="col" className="px-6 py-3">
              Economia
            </th>
            <th scope="col" className="px-6 py-3">
              Tempo Jogado
            </th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr
              key={player.name}
              className="bg-white border-b dark:bg-neutral-900 dark:border-neutral-700"
            >
              <th
                scope="row"
                className="px-6 py-2 font-medium text-neutral-900  dark:text-white"
              >
                <div className="flex items-center gap-2 break-keep">
                  <Cravatar playerName={player.name} className="h-6" />{' '}
                  {player.name}
                </div>
              </th>
              <td className="px-6 py-2 truncate">{player.jobs.d}</td>
              <td className="px-6 py-2 truncate">
                C$ {parseFloat(player.balance.v).toFixed(2)}
              </td>
              <td className="px-6 py-2 truncate">{player.activePlaytime.d}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
