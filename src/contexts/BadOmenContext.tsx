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
import { fetchStatus } from '@/services';

type Context = {
  status: ServerStatus;
  updateStatus: Dispatch<SetStateAction<ServerStatus>>;
};

export const BadOmenContext = createContext<Context>({} as Context);

type Props = {
  children: ReactNode;
};
export const BadOmenProvider = ({ children }: Props) => {
  const [status, setStatus] = useState<ServerStatus>({} as ServerStatus);
  const timeout = useRef<NodeJS.Timeout>();

  async function handleStatusUpdate() {
    const newStatus = await fetchStatus();
    setStatus(newStatus);
  }

  useEffect(() => {
    handleStatusUpdate();
    timeout.current = setInterval(() => handleStatusUpdate(), 30000);
    return () => clearInterval(timeout.current);
  }, []);

  return (
    <BadOmenContext.Provider value={{ status, updateStatus: setStatus }}>
      {children}
    </BadOmenContext.Provider>
  );
};
