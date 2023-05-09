import { ServerStatus } from '@/interfaces/status';
//@ts-ignore
import { plan_users } from '@prisma/client';
import Cravatar from '@/components/Cravatar';
import fromUnixTime from 'date-fns/fromUnixTime';
import { format } from 'date-fns';

type Props = {
  status: ServerStatus;
  players: plan_users[];
};

export default function AllPlayersRegistered({ status, players }: Props) {
  const columns = ['Nome', 'Registrado'];

  return (
    <div className="p-3 bg-white dark:bg-cool-gray-800 rounded shadow space-y-2">
      <h3 className="font-extrabold text-gray-800 dark:text-gray-200">
        Jogadores Registrados
      </h3>

      <div className="flex flex-col space-y-2">
        <table className="">
          <thead className="bg-gray-100 dark:bg-cool-gray-900 dark:bg-opacity-50 text-gray-700 dark:text-gray-300">
            <tr>
              <th
                scope="col"
                className="p-1 text-left text-xs font-bold text-center uppercase tracking-wider"
              >
                #
              </th>
              {columns.map((column, index) => (
                <th
                  key={column}
                  scope="col"
                  className="p-1 text-left text-xs font-bold uppercase tracking-wider"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-cool-gray-800">
            {players.map((player, index) => (
              <tr key={player.uuid}>
                <td className="p-1 text-sm text-light-blue-400 font-extrabold text-center">
                  <span className="border-2 rounded text-sm px-1 border-light-blue-300 bg-light-blue-50 dark:bg-cool-gray-800">
                    {index + 1}
                  </span>
                </td>

                <td className="p-1">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-6 w-6">
                      <Cravatar
                        className="h-6 w-6"
                        playerName={player?.name ?? ''}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm text-gray-900 focus:outline-none cursor-pointer hover:underline">
                        <span className="text-gray-700 dark:text-gray-300 font-bold text-sm truncate">
                          {player.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-1">
                  <div className="text-sm text-gray-900 focus:outline-none cursor-pointer hover:underline">
                    <span className="text-gray-700 dark:text-gray-300 font-bold text-sm truncate">
                      {format(
                        fromUnixTime(
                          parseInt(player.registered.toString().slice(0, -3))
                        ),
                        'dd/MM/yyyy'
                      )}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
