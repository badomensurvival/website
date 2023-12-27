import { Player } from '@/interfaces/status';
import { classNames } from '@/utils';

type Props = {
  playerName: string;
  className?: string;
};
export default function Cravatar({ playerName, className }: Props) {
  return (
    <img
      className={classNames('aspect-square', className)}
      src={`https://cravatar.eu/avatar/${playerName}.png`}
      alt=""
    />
  );
}
