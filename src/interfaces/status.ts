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
  status: "success";
  online: boolean;
  motd: string;
  motd_json: {
    extra: {
      bold?: boolean;
      color?: string;
      text: string;
    }[];
    text: string;
  };
  favicon: null | string;
  error: null | string;
  players: {
    max: number;
    now: number;
    sample: string[];
  };
  server: {
    name: string;
    protocol: number;
  };
  last_updated: string;
  duration: string;
};

