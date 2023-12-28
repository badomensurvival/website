type PlayerInfo = {
    balance: number;
    uuid: string;
    displayName: string;
    address: string;
    port: number;
    exhaustion: number;
    exp: number;
    whitelisted: boolean;
    banned: boolean;
    op: boolean;
    location: number[];
    dimension: 'NORMAL' | 'NETHER' | 'END'; // Assuming dimension is limited to these values
    health: number;
    hunger: number;
    saturation: number;
    gamemode: 'SURVIVAL' | 'CREATIVE' | 'ADVENTURE' | 'SPECTATOR'; // Assuming Minecraft game modes
    lastPlayed: number;
};


export type OnlinePlayers = PlayerInfo[];