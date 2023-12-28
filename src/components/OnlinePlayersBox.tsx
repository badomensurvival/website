'use client';

import Tooltip from '@/components/Tooltip';
import Cravatar from '@/components/Cravatar';
import { ServerStatus } from '@/interfaces/status';
import { copyToClipboard } from '@/utils';
import { useContext } from 'react';
import { BadOmenContext } from '@/contexts/BadOmenContext';


export default function OnlinePlayersBox() {
  const { status, onlinePlayers } = useContext(BadOmenContext);


  return (
    <div>
      <div className="p-3 sm:px-5 bg-white dark:bg-neutral-800 rounded shadow">
        <h3 className="font-extrabold text-neutral-800 dark:text-neutral-200">
          Jogadores Online
          <span className="float-right text-green-500 font-semibold">
            {status?.onlinePlayers} / {status?.maxPlayers}
          </span>
        </h3>

        <div className="mt-3 text-neutral-500 flex flex-wrap justify-center">
          {onlinePlayers.length ? (
            onlinePlayers.map((player) => (
              <div key={player.uuid} className="flex-shrink-0 mr-1 mb-1">
                <Tooltip message={player.displayName}>
                  <Cravatar playerName={player?.displayName} className="w-10" />
                </Tooltip>
              </div>
            ))
          ) : (
            <div className="italic p-1 rounded text-center text-neutral-400">
              Sem jogadores online
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={() => copyToClipboard('play.badomen.com.br')}
          className="text-center w-full font-extrabold mt-3 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 rounded p-2 hover:text-light-blue-500 dark:hover:text-light-blue-400 hover:bg-light-blue-50 dark:hover:bg-neutral-900 hover:border-light-blue-500 dark:hover:border-neutral-800 focus:ring focus:ring-light-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out focus:outline-none"
        >
          <span>play.badomen.com.br</span>
        </button>
      </div>
    </div>
  );
}
