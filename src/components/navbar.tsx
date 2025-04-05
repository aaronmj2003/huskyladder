"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Submit Stats", href: "/submit" },
  { name: "Leaderboard", href: "/leaderboard" },
  { name: "Profile", href: "/profile" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full px-6 py-4 border-b bg-white shadow-sm flex justify-between items-center">
      <div className="flex items-center gap-2 text-xl font-bold text-purple-700">🎮<span>HuskyLadder</span></div>
      <div className="flex space-x-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium px-3 py-2 rounded-md transition",
              pathname === item.href
                ? "bg-purple-100 text-purple-800"
                : "text-gray-700 hover:bg-purple-50 transition-colors"
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
