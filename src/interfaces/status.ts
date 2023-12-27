export interface Version {
  name_raw: string;
  name_clean: string;
  name_html: string;
  protocol: number;
}

export interface Player {
  uuid: string;
  name_raw: string;
  name_clean: string;
  name_html: string;
}

export interface Motd {
  raw: string;
  clean: string;
  html: string;
}

export interface ServerStatus {
  online: boolean;
  host: string;
  port: number;
  eula_blocked: boolean;
  retrieved_at: number;
  expires_at: number;
  version: Version;
  players: {
    online: number;
    max: number;
    list: Player[];
  };
  motd: Motd;
  icon?: string;
}
