"use client";

import { ColumnDef } from "@tanstack/react-table";
import { LeaderboardEntry } from "@/lib/types";

export const columns: ColumnDef<LeaderboardEntry>[] = [
  {
    accessorKey: "gamertag",
    header: "Gamer Tag",
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
    cell: ({ row }) => <div className="text-right">{row.getValue("hours")}</div>,
  },
];
