import { ReactNode } from 'react';

type Props = {
  message: string;
  children: ReactNode;
};
export default function Tooltip({ message, children }: Props) {
  return (
    <div className="group relative flex">
      {children}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 scale-0 transition-all rounded bg-neutral-900 p-2 text-xs text-white group-hover:scale-100">
        {message}
      </span>
    </div>
  );
}
