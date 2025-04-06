"use client";
import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { LeaderboardEntry } from "@/lib/types";
import { motion } from "framer-motion";

const data: LeaderboardEntry[] = [
  { gamertag: "superaaron35", game: "League of Legends", rank: "Challenger", avatar: "/media/avatars/xddddd.jpg", elo: 1990, winrate: 61 },
  { gamertag: "Ves", game: "League of Legends", rank: "Diamond 1", avatar: "/media/avatars/xddddd.jpg", elo: 1800, winrate: 59 },
  { gamertag: "Tony", game: "League of Legends", rank: "Platinum 2", avatar: "/media/avatars/xddddd.jpg", elo: 1600, winrate: 54 },
  { gamertag: "Christensen", game: "League of Legends", rank: "Gold 1", avatar: "/media/avatars/xddddd.jpg", elo: 1500, winrate: 50 },
  { gamertag: "masteryi", game: "League of Legends", rank: "Master", avatar: "/media/avatars/xddddd.jpg", elo: 1850, winrate: 57 },
];

export default function LeaguePage() {
  const [search, setSearch] = useState("");

  const filtered = data
    .filter((player) => player.gamertag.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => Number(b.elo) - Number(a.elo));

  return (
    <main className="p-6 min-h-screen bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
        <h1 className="text-3xl font-bold text-purple-700 dark:text-purple-300">
        League of Legends Leaderboard
        </h1>
        <Input
          placeholder="Search gamertag..."
          className="max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6">
        <Link href="/leaderboard"
            className="inline-block px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
            ← Back to Leaderboards
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((player, idx) => (
          <motion.div
            key={player.gamertag}
            className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-xl shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.07 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex items-center gap-4 mb-3">
              <Image
                src={player.avatar || "/media/default-avatar.png"}
                alt={player.gamertag}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <div className="text-lg font-bold flex items-center gap-1">
                  {idx === 0 ? (
                    <motion.span
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      👑
                    </motion.span>
                  ) : null}
                  {player.gamertag}
                </div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">{player.rank}</div>
              </div>
            </div>

            <div className="text-sm mt-2 space-y-1">
              <div>
                <span className="font-semibold">LP:</span> {player.elo}
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Winrate:</span>
                <div className="flex-1 bg-zinc-300 dark:bg-zinc-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="bg-purple-600 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${player.winrate}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <span className="min-w-[30px] text-right">{player.winrate}%</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
