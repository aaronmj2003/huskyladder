"use client";

import { ColumnDef } from "@tanstack/react-table";
import { LeaderboardEntry } from "@/lib/types";

export const columns: ColumnDef<LeaderboardEntry>[] = [
    {
        accessorKey: "gamertag",
        header: "Gamer Tag",
        cell: ({ row }) => {
          const rank = row.index;
          const name = row.getValue("gamertag") as string;
          const medal = ["🥇", "🥈", "🥉"][rank] || null;
      
          return (
            <span className="font-medium text-purple-800">
              {medal && <span className="mr-2">{medal}</span>}
              {name}
            </span>
          );
        },
      },
  {
    accessorKey: "game",
    header: "Game",
  },
  {
    accessorKey: "rank",
    header: "Rank",
  },
  {
    accessorKey: "hours",
    header: "Hours Played",
    cell: ({ row }) => <div className="text-left">{row.getValue("hours")}</div>,
  },
];
