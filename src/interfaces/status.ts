import { OnlinePlayers } from '@/interfaces/players';

export type ServerStatus = {
  name: string;
  health: {
    cpus: number;
    uptime: number;
    totalMemory: number;
    maxMemory: number;
    freeMemory: number;
  };
  motd: string;
  version: string;
  tps: string;
  bukkitVersion: string;
  bannedIps: {
    target: string;
    source: string;
    reason: string;
    expiration: string; // You might consider using Date type instead of string for expiration date
  }[];
  bannedPlayers: {
    target: string;
    source: string;
    reason: string;
    expiration: string; // Same consideration applies here for expiration date
  }[];
  whitelistedPlayers: {
    uuid: string;
    name: string;
  }[];
  maxPlayers: number;
  onlinePlayers: OnlinePlayers;
};
