'use client';
import { copyToClipboard } from '@/utils';
import { ServerStatus } from '@/interfaces/status';

type Props = {
  status: ServerStatus;
};

export default function Hero({ status }: Props) {
  const ip = 'play.badomen.com.br';
  const backgroundImageBrightness = 0.7;

  return (
    <div
      className="flex justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,${backgroundImageBrightness}), rgba(0,0,0,${backgroundImageBrightness})), url('hero.webp')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '45vh',
      }}
    >
      <button
        type="button"
        className="bg-neutral-800 bg-opacity-75 items-center px-5 py-3 rounded mx-3"
      >
        <div>
          <span
            className="text-neutral-100 text-xl font-bold"
            onClick={() => copyToClipboard(ip)}
          >
            Junte-se aos{' '}
            <span className="text-light-blue-500 dark:text-light-blue-400 font-extrabold">
              {status?.players?.now}
            </span>{' '}
            jogadores no <span className="text-orange-400">{ip}</span>
          </span>
        </div>
      </button>
    </div>
  );
}
