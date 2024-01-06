'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ServerStatus } from '@/interfaces/status';
import { fetchOnlinePlayers, fetchStatus } from '@/services';
import { OnlinePlayers } from '@/interfaces/players';

type Context = {
  status: ServerStatus;
  onlinePlayers: OnlinePlayers;
};

export const BadOmenContext = createContext<Context>({} as Context);

type Props = {
  children: ReactNode;
};
export const BadOmenProvider = ({ children }: Props) => {
  const [status, setStatus] = useState<ServerStatus>({} as ServerStatus);
  const [onlinePlayers, setOnlinePlayers] = useState<OnlinePlayers>([]);
  const timeout = useRef<NodeJS.Timeout>();

  async function handleStatusUpdate() {
    const newStatus = await fetchStatus();
    setStatus(newStatus);
    setOnlinePlayers(newStatus?.onlinePlayers ?? []);
  }

  useEffect(() => {
    handleStatusUpdate();
    timeout.current = setInterval(() => handleStatusUpdate(), 5000);
    return () => clearInterval(timeout.current);
  }, []);

  return (
    <BadOmenContext.Provider value={{ status, onlinePlayers }}>
      {children}
    </BadOmenContext.Provider>
  );
};
