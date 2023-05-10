'use client';

import Tooltip from '@/components/Tooltip';
import Cravatar from '@/components/Cravatar';
import { ServerStatus } from '@/interfaces/status';
import { copyToClipboard } from '@/utils';

type Props = { status: ServerStatus };

export default function OnlinePlayersBox({ status }: Props) {
  return (
    <div>
      <div className="p-3 sm:px-5 bg-white dark:bg-gray-800 rounded shadow">
        <h3 className="font-extrabold text-gray-800 dark:text-gray-200">
          Jogadores Online
          <span className="float-right text-green-500 font-semibold">
            {status?.players?.online} / {status?.players?.max}
          </span>
        </h3>

        <div className="mt-3 text-gray-500 flex flex-wrap justify-center">
          {status?.players.online > 0 ? (
            status?.players?.list.map((player) => (
              <div key={player.uuid} className="flex-shrink-0 mr-1 mb-1">
                <Tooltip message={player.name_clean}>
                  <Cravatar playerName={player?.name_clean} className="w-10" />
                </Tooltip>
              </div>
            ))
          ) : (
            <div className="italic p-1 rounded text-center text-gray-400">
              Sem jogadores online
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={() => copyToClipboard('badomen.fun')}
          className="text-center w-full font-extrabold mt-3 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded p-2 hover:text-light-blue-500 dark:hover:text-light-blue-400 hover:bg-light-blue-50 dark:hover:bg-cool-gray-900 hover:border-light-blue-500 dark:hover:border-cool-gray-800 focus:ring focus:ring-light-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out focus:outline-none"
        >
          <span>badomen.fun</span>
        </button>
      </div>
    </div>
  );
}
