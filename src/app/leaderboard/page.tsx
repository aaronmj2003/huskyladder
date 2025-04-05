import { columns } from "./columns";
import { LeaderboardEntry } from "@/lib/types";
import { DataTable } from "@/components/ui/data-table";

const data: LeaderboardEntry[] = [
  { gamertag: "TopDawgUW", game: "Valorant", rank: "Immortal", hours: 320 },
  { gamertag: "SnipeQueen", game: "CS:GO", rank: "Global Elite", hours: 410 },
  { gamertag: "ZeldaMain", game: "Smash Ultimate", rank: "Elite", hours: 180 },
  { gamertag: "UWCarry", game: "League of Legends", rank: "Diamond", hours: 290 },
];

export default function LeaderboardPage() {
  return (
    <main className="p-8 min-h-screen bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100">
        <h1 className="text-3xl font-bold text-purple-800 dark:text-purple-300 mb-6 text-center">
            🏆 HuskyLadder Leaderboard
        </h1>
      <DataTable columns={columns} data={data} />
    </main>
  );
}
