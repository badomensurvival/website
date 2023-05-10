'use client';

import { useContext, useEffect } from 'react';
import { BadOmenContext } from '@/contexts/BadOmenContext';
// @ts-ignore
import { plan_users } from '@prisma/client';
import { copyToClipboard } from '@/utils';
import OnlinePlayersBox from '@/components/OnlinePlayersBox';
import { ServerStatus } from '@/interfaces/status';
import Hero from '@/components/layout/Hero';
import AllPlayersRegistered from '@/components/AllPlayersRegisteredBox';
import { PlanPlayerData } from '@/services';

type Props = {
  status: ServerStatus;
  allPlayers: PlanPlayerData[];
};

export default function HomePage({ allPlayers, status }: Props) {
  const { updateStatus } = useContext(BadOmenContext);

  useEffect(() => {
    updateStatus(status);
  }, []);

  return (
    <>
      <Hero status={status} />

      <div className="grid grid-cols-none gap-4 px-2 py-4 mx-auto md:grid-cols-4 md:gap-6 md:py-12 md:px-10 md:px-6 lg:px-16 max-w-screen-2xl">
        <div className="order-1 col-span-1 space-y-4 md:order-none">
          <div>
            <OnlinePlayersBox status={status} />
          </div>

          <iframe
            src="https://discord.com/widget?id=951998050358951966&amp;theme=dark"
            width="100%"
            height="500"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
        <div className="order-3 col-span-1 space-y-4 md:col-span-2 md:order-none">
          <div>
            <AllPlayersRegistered status={status} players={allPlayers} />
          </div>
          <div>
            <div className="bg-white dark:bg-cool-gray-800 rounded px-4 py-3 shadow">
              <h3 className="font-extrabold text-gray-800 dark:text-gray-200">
                Mapa Dinâmico
              </h3>
              <iframe src="https://map.badomen.fun/" className="w-full h-96" />
            </div>
          </div>
        </div>
        <div className="order-2 col-span-1 space-y-4 md:order-none">
          <div>
            <div className="p-3 sm:px-5 bg-white dark:bg-cool-gray-800 rounded shadow break-words">
              <h3 className="font-extrabold text-gray-800 dark:text-gray-200">
                Status do Servidor
              </h3>

              <div className="flex flex-col">
                <div className="mt-3 text-gray-700 dark:text-gray-300 text-center font-semibold">
                  Join{' '}
                  <span className="font-bold text-light-blue-500 dark:text-light-blue-400">
                    {status?.players?.online}
                  </span>{' '}
                  Online Players!
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('badomen.fun')}
                  className="text-center font-extrabold mt-3 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded p-2 hover:text-light-blue-500 dark:hover:text-light-blue-400 hover:bg-light-blue-50 dark:hover:bg-cool-gray-900 hover:border-light-blue-500 dark:hover:border-cool-gray-800 focus:ring focus:ring-light-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out focus:outline-none"
                >
                  <span>badomen.fun</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
