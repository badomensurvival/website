import { classNames } from '@/utils';
import Image from 'next/image';

type Props = {
  playerName: string;
  className?: string;
};
export default function Cravatar({ playerName, className }: Props) {
  return (
    <img
      width={64}
      height={64}
      className={classNames('aspect-square', className)}
      src={`https://minotar.net/avatar/${playerName}`}
      alt={playerName}
    />
  );
}
