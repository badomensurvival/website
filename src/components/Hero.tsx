'use client';
import Image from 'next/image';
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
      <div className="flex flex-col items-center justify-around w-4/5 md:flex-row text-neutral-100 text-xl font-bold">
        <button
          onClick={() => copyToClipboard(ip)}
          className="flex justify-center items-center cursor-pointer hover:rainbow mb-4 md:mb-0"
        >
          <Image
            src="/img/header-creeper.png"
            alt="Discord"
            style={{
              filter: 'invert(1)',
            }}
            width={64}
            height={64}
            className="w-16 h-16"
          />
          <div className="flex flex-col">
            <p className="font-bold text-left">
              <span className="uppercase">
                {status?.players?.online} Players Online
              </span>
            </p>
            <p className="font-semibold text-sm mt-1.5 uppercase text-orange-400">
              {ip}
            </p>
          </div>
        </button>
      </div>
      {/*<button*/}
      {/*  type="button"*/}
      {/*  className="bg-neutral-800 bg-opacity-75 items-center px-5 py-3 rounded mx-3"*/}
      {/*>*/}
      {/*  <div>*/}
      {/*    <span*/}
      {/*      className="text-neutral-100 text-xl font-bold"*/}
      {/*      onClick={() => copyToClipboard(ip)}*/}
      {/*    >*/}
      {/*      Junte-se aos{' '}*/}
      {/*      <span className="font-extrabold">{status?.players?.now}</span>{' '}*/}
      {/*      jogadores no <span className="text-orange-400">{ip}</span>*/}
      {/*    </span>*/}
      {/*  </div>*/}
      {/*</button>*/}
    </div>
  );
}
