"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Leaderboards", href: "/leaderboard" },
  { name: "Profile", href: "/profile" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="w-full px-6 py-4 border-b bg-white dark:bg-zinc-900 dark:border-zinc-800 shadow-sm flex justify-between items-center">
      <div className="flex items-center gap-2 text-xl font-bold text-purple-700 dark:text-purple-300">
        🎮 HuskyLadder
      </div>
      <div className="flex items-center gap-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium px-3 py-2 rounded-md transition ${
              pathname === item.href
                ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-zinc-800"
            }`}
          >
            {item.name}
          </Link>
        ))}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-2 text-sm text-gray-700 dark:text-gray-300 border px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-zinc-800"
          >
            {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        )}
      </div>
    </nav>
  );
}
