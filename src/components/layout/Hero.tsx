'use client';
import { copyToClipboard } from '@/utils';
import { ServerStatus } from '@/interfaces/status';

type Props = {
  status: ServerStatus;
};

export default function Hero({ status }: Props) {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        backgroundImage: `url('hero.webp')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '45vh',
      }}
    >
      <button
        type="button"
        className="bg-gray-800 bg-opacity-75 items-center px-5 py-3 rounded mx-3"
      >
        <div>
          <span
            className="text-gray-100 text-xl font-bold"
            onClick={() => copyToClipboard('badomen.fun')}
          >
            Junte-se aos{' '}
            <span className="text-light-blue-500 dark:text-light-blue-400 font-extrabold">
              {status?.players?.online}
            </span>{' '}
            jogadores no <span className="text-orange-400">badomen.fun</span>
          </span>
        </div>
      </button>
    </div>
  );
}
