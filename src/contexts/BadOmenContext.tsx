'use client';

import { createContext, ReactNode, useEffect, useRef, useState } from 'react';
import { ServerStatus } from '@/interfaces/status';

type Context = {
  status: ServerStatus | undefined;
};

export const BadOmenContext = createContext<Context>({} as Context);

type Props = {
  children: ReactNode;
};
export const BadOmenProvider = ({ children }: Props) => {
  const [status, setStatus] = useState<ServerStatus>();
  const timeout = useRef<NodeJS.Timeout>();

  function fetchStatus() {
    fetch('https://api.mcstatus.io/v2/status/java/badomen.fun')
      .then((res) => res.json())
      .then((data) => setStatus(data));
  }

  useEffect(() => {
    fetchStatus();
    timeout.current = setInterval(() => fetchStatus(), 30000);
    return () => clearInterval(timeout.current);
  });

  return (
    <BadOmenContext.Provider value={{ status }}>
      {children}
    </BadOmenContext.Provider>
  );
};
