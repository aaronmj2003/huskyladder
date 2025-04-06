"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { LeaderboardEntry } from "@/lib/types";
import { motion } from "framer-motion";

/* Decided to axe cs2 and dota2 until we get the chance to learn how to implement Steam API*/
const gameAssets: Record<string, { icon: string; route: string }> = {
  "Valorant": { icon: "/media/valoranticon.png", route: "valorant" },
  "League of Legends": { icon: "/media/leagueicon.png", route: "league" },
  "Marvel Rivals": {icon: "/media/marvelrivalsicon.png", route: "rivals"},
  /*"CS2": { icon: "/media/csicon.png", route: "cs2" },*/
  "TFT": { icon: "/media/tfticon.png", route: "tft" },
  "Overwatch": { icon: "/media/ow2icon.png", route: "overwatch" },
  /*"Dota 2": { icon: "/media/dota2icon.png", route: "dota2" },*/
  "Chess.com": { icon: "/media/chesscomicon.png", route: "chess.com" },
};

const eloLabels: Record<string, string> = {
  "Valorant": "RR",
  "League of Legends": "LP",
  "TFT": "LP",
  "Marvel Rivals": "Score",
  "Chess.com": "ELO",
  "Overwatch": "Skill Rating",
  "CS2": "Rank",
  "Dota 2": "Rank",
};

const data: LeaderboardEntry[] = [
  { gamertag: "TenZ", game: "Valorant", rank: "Immortal", hours: 320, winrate: 64, elo: 1900, avatar: "/media/avatars/xddddd.jpg" },
  { gamertag: "RazeMain", game: "Valorant", rank: "Diamond", hours: 280, winrate: 57, elo: 1700, avatar: "/media/avatars/xddddd.jpg" },
  { gamertag: "superaaron35", game: "League of Legends", rank: "Challenger", hours: 290, winrate: 61, elo: 1990, avatar: "/media/avatars/xddddd.jpg" },
  { gamertag: "Ves", game: "League of Legends", rank: "Diamond 1", hours: 350, winrate: 59, elo: 1800, avatar: "/media/avatars/xddddd.jpg" },
  { gamertag: "Magnus", game: "Chess.com", rank: "2400 ELO", hours: 140, winrate: 72, elo: 2400, avatar: "/media/avatars/xddddd.jpg" },
  { gamertag: "david", game: "CS2", rank: "Global Elite", hours: 410, winrate: 55, elo: 2300, avatar: "/media/avatars/xddddd.jpg" },
  { gamertag: "clutch", game: "CS2", rank: "LEM", hours: 300, winrate: 52, elo: 2100, avatar: "/media/avatars/xddddd.jpg" },
  { gamertag: "Games2Games", game: "TFT", rank: "Challenger", hours: 280, winrate: 65, elo: 2000, avatar: "/media/avatars/xddddd.jpg" },
  { gamertag: "tracermain", game: "Overwatch", rank: "Grandmaster", hours: 330, winrate: 60, elo: 2900, avatar: "/media/avatars/xddddd.jpg" },
  { gamertag: "VES", game: "Dota 2", rank: "Divine", hours: 270, winrate: 58, elo: 2200, avatar: "/media/avatars/xddddd.jpg" },
  { gamertag: "blah22223", game: "Marvel Rivals", rank: "One Above All", hours: 200, winrate: 58, elo: 5800, avatar: "/media/avatars/xddddd.jpg" },
  { gamertag: "Tony", game: "League of Legends", rank: "Platinum 2", avatar: "/media/avatars/xddddd.jpg", elo: 1600, winrate: 54 },
  { gamertag: "Christensen", game: "League of Legends", rank: "Gold 1", avatar: "/media/avatars/xddddd.jpg", elo: 1500, winrate: 50 },
  { gamertag: "masteryi", game: "League of Legends", rank: "Master", avatar: "/media/avatars/xddddd.jpg", elo: 1850, winrate: 57 },
];

const games = Object.keys(gameAssets);

export default function LeaderboardPage() {
  return (
    <main className="p-8 min-h-screen bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100">
      <motion.h1
        className="text-3xl font-bold text-purple-800 dark:text-purple-300 mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🏆 HuskyLadder Leaderboards
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game, gameIdx) => {
          const filtered = data.filter((entry) => entry.game === game).slice(0, 10);
          if (filtered.length === 0) return null;

          const eloLabel = eloLabels[game] || "ELO";

          return (
            <motion.section
              key={game}
              className="bg-gray-100 dark:bg-zinc-800 p-4 rounded-lg shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: gameIdx * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-center mb-4 gap-2">
                <Image src={gameAssets[game].icon} alt={game} width={24} height={24} />
                <Link
                  href={`/leaderboard/${gameAssets[game].route}`}
                  className="text-xl font-semibold text-purple-700 dark:text-purple-300 hover:underline"
                >
                  {game}
                </Link>
              </div>

              <table className="w-full text-sm text-left border border-zinc-700 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-zinc-200 dark:bg-zinc-700">
                    <th className="px-3 py-2">Gamer</th>
                    <th className="px-3 py-2">Rank</th>
                    <th className="px-3 py-2">{eloLabel}</th>
                    <th className="px-3 py-2">Winrate</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((entry, idx) => (
                    <motion.tr
                      key={entry.gamertag}
                      className={cn(
                        "hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors",
                        idx === 0 && "font-bold text-yellow-500"
                      )}
                      whileHover={{ scale: 1.01 }}
                    >
                      <td className="px-3 py-2 flex items-center gap-2">
                        <Image
                          src={entry.avatar || "/media/default-avatar.png"}
                          alt={entry.gamertag}
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        {idx === 0 ? (
                          <motion.span
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                          >
                            👑
                          </motion.span>
                        ) : null}
                        {entry.gamertag}
                      </td>
                      <td className="px-3 py-2">{entry.rank}</td>
                      <td className="px-3 py-2">{entry.elo}</td>
                      <td className="px-3 py-2">{entry.winrate}%</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.section>
          );
        })}
      </div>
    </main>
  );
}
