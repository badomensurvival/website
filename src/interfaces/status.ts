export interface ServerStatus {
  online: boolean;
  host: string;
  port: number;
  ip_address: string;
  eula_blocked: boolean;
  retrieved_at: number;
  expires_at: number;
  version: {
    name_raw: string;
    name_clean: string;
    name_html: string;
    protocol: number;
  };
  players: {
    online: number;
    max: number;
    list: {
      uuid: string;
      name_raw: string;
      name_clean: string;
      name_html: string;
    }[];
  };
  motd: {
    raw: string;
    clean: string;
    html: string;
  };
  icon: null;
  mods: any[]; // Assuming mods can be of any type, adjust as needed
  software: null;
  plugins: any[]; // Assuming plugins can be of any type, adjust as needed
  srv_record: null;
}
