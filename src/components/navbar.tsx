"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Submit Stats", href: "/submit" },
  { name: "Leaderboard", href: "/leaderboard" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full px-6 py-4 border-b bg-white shadow-sm flex justify-between items-center">
      <h1 className="text-xl font-bold text-purple-800">🎮 HuskyLadder</h1>
      <div className="flex space-x-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium px-3 py-2 rounded-md transition",
              pathname === item.href
                ? "bg-purple-100 text-purple-800"
                : "text-gray-700 hover:bg-purple-50"
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
