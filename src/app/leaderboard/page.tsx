import Image from "next/image";
import { columns } from "./columns";
import { LeaderboardEntry } from "@/lib/types";
import { DataTable } from "@/components/ui/data-table";
import { cn } from "@/lib/utils";

const gameAssets: Record<string, { icon: string }> = {
  "Valorant": { icon: "/media/valoranticon.png" },
  "League of Legends": { icon: "/media/leagueicon.png" },
  "CS2": { icon: "/media/csicon.png" },
  "TFT": { icon: "/media/tfticon.png" },
  "Overwatch": { icon: "/media/ow2icon.png" },
  "Dota 2": { icon: "/media/dota2icon.png" },
  "Chess.com": { icon: "/media/chesscomicon.png" },
};

const games = Object.keys(gameAssets);

const data: LeaderboardEntry[] = [
  { gamertag: "TenZ", game: "Valorant", rank: "Immortal", hours: 320 },
  { gamertag: "RazeMain", game: "Valorant", rank: "Diamond", hours: 280 },
  { gamertag: "superaaron35", game: "League of Legends", rank: "Challenger", hours: 290 },
  { gamertag: "Ves", game: "League of Legends", rank: "Diamond 1", hours: 350 },
  { gamertag: "Magnus", game: "Chess.com", rank: "2400 ELO", hours: 140 },
  { gamertag: "david", game: "CS:GO", rank: "Global Elite", hours: 410 },
  { gamertag: "clutch", game: "CS:GO", rank: "LEM", hours: 300 },
  { gamertag: "Games2Games", game: "TFT", rank: "Challenger", hours: 280 },
  { gamertag: "tracermain", game: "Overwatch", rank: "Grandmaster", hours: 330 },
  { gamertag: "VES", game: "Dota 2", rank: "Divine", hours: 270 },
];

export default function LeaderboardPage() {
  return (
    <main className="p-8 min-h-screen bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-purple-800 dark:text-purple-300 mb-10 text-center">
        🏆 UW Student Leaderboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game) => {
          const filtered = data.filter((entry) => entry.game === game);
          if (filtered.length === 0) return null;

          const topPlayer = filtered[0];
          return (
            <section key={game} className="bg-gray-100 dark:bg-zinc-800 p-4 rounded-lg shadow">
              <div className="flex items-center justify-center mb-4 gap-2">
                <Image
                  src={gameAssets[game].icon}
                  alt={game}
                  width={24}
                  height={24}
                />
                <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-300">
                  {game}
                </h2>
              </div>

              <table className="w-full text-sm text-left border border-zinc-700 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-zinc-200 dark:bg-zinc-700">
                    <th className="px-3 py-2">Gamer Tag</th>
                    <th className="px-3 py-2">Rank</th>
                    <th className="px-3 py-2">Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((entry, idx) => (
                    <tr
                      key={entry.gamertag}
                      className={cn(
                        "hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all",
                        idx === 0 && "font-bold text-yellow-500"
                      )}
                    >
                      <td className="px-3 py-2">
                        {idx === 0 && "👑 "}
                        {entry.gamertag}
                      </td>
                      <td className="px-3 py-2">{entry.rank}</td>
                      <td className="px-3 py-2">{entry.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          );
        })}
      </div>
    </main>
  );
}
