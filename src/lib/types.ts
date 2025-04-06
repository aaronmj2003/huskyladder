export interface LeaderboardEntry {
  gamertag: string;
  game: string;
  rank: string;
  hours?: number;
  avatar?: string;
  winrate?: number;
  elo?: number | string;
}
