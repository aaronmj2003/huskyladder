import { columns } from "./columns";
import { LeaderboardEntry } from "@/lib/types";
import { DataTable } from "@/components/ui/data-table";

const games = ["Valorant", "League of Legends", "CS:GO", "TFT", "Overwatch", "Dota 2", "Chess"];

const data: LeaderboardEntry[] = [
  { gamertag: "TopDawgUW", game: "Valorant", rank: "Immortal", hours: 320 },
  { gamertag: "SpikeSmurf", game: "Valorant", rank: "Diamond", hours: 280 },
  { gamertag: "UWCarry", game: "League of Legends", rank: "Diamond", hours: 290 },
  { gamertag: "JungDiff", game: "League of Legends", rank: "Master", hours: 350 },
  { gamertag: "ChessBeast", game: "Chess", rank: "2400 ELO", hours: 140 },
  { gamertag: "SnipeQueen", game: "CS:GO", rank: "Global Elite", hours: 410 },
  { gamertag: "ClutchKing", game: "CS:GO", rank: "LEM", hours: 300 },
  { gamertag: "MindGames", game: "TFT", rank: "Challenger", hours: 280 },
  { gamertag: "OverAce", game: "Overwatch", rank: "Grandmaster", hours: 330 },
  { gamertag: "AncientOne", game: "Dota 2", rank: "Divine", hours: 270 },
];


export default function LeaderboardPage() {
  return (
    <main className="p-8 min-h-screen bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-purple-800 dark:text-purple-300 mb-10 text-center">
        🏆 HuskyLadder Leaderboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game) => {
          const filtered = data.filter((entry) => entry.game === game);
          if (filtered.length === 0) return null;

          return (
            <section key={game} className="bg-gray-100 dark:bg-zinc-800 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-4 text-center">
                {game}
              </h2>
              <DataTable columns={columns} data={filtered} />
            </section>
          );
        })}
      </div>
    </main>
  );
}
