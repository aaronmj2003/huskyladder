export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-gradient-to-b from-purple-50 to-white">
      <h1 className="text-5xl font-bold text-purple-800 mb-4">
        🎮 Welcome to <span className="text-purple-700">HuskyLadder</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
        Track your gaming dominance at UW. Submit your stats, climb the leaderboard, and flex your rank.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/submit"
          className="px-6 py-3 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition"
        >
          Submit Your Stats
        </a>
        <a
          href="/leaderboard"
          className="px-6 py-3 border border-purple-700 text-purple-700 rounded-md hover:bg-purple-100 transition"
        >
          View Leaderboard
        </a>
      </div>
    </main>
  );
}
