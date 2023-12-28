export interface ServerStatus {
  status: 'success';
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
    sample: {
      id: string;
      name: string;
    }[];
  };
  server: {
    name: string;
    protocol: number;
  };
  last_updated: string;
  duration: string;
}
