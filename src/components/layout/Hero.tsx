'use client';
import { useContext } from 'react';
import { BadOmenContext } from '@/contexts/BadOmenContext';

type Props = {};

export default function Hero({}: Props) {
  const { status } = useContext(BadOmenContext);

  function copyToClipboard() {
    navigator.clipboard.writeText('badomen.fun');
  }

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
            className="text-gray-100 text-xl font-bold space-x-4"
            onClick={copyToClipboard}
          >
            Join{' '}
            <span className="text-light-blue-500 dark:text-light-blue-400 font-extrabold">
              {status?.players.online}
            </span>{' '}
            players on badomen.fun
          </span>
        </div>
      </button>
    </div>
  );
}
