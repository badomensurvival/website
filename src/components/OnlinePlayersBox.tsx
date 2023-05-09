'use client';

import Tooltip from '@/components/Tooltip';
import Cravatar from '@/components/Cravatar';
import { ServerStatus } from '@/interfaces/status';

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
          {status?.players?.list ? (
            status?.players?.list.map((player) => (
              <div key={player.uuid} className="flex-shrink-0 mr-1 mb-1">
                <Tooltip message={player.name_clean}>
                  <Cravatar playerName={player?.name_clean} className="w-10" />
                </Tooltip>
              </div>
            ))
          ) : (
            <div className="italic p-1 rounded text-center text-gray-400">
              No players online.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
