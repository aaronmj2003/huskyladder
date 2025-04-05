"use client";

import { useState } from "react";

export default function SubmitPage() {
  const [form, setForm] = useState({
    gamertag: "",
    game: "",
    rank: "",
    hours: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted stats:", form);
    alert("Stats submitted! (Not saved yet)");
    setForm({ gamertag: "", game: "", rank: "", hours: "" });
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Submit Your Stats</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
        <input
          type="text"
          name="gamertag"
          value={form.gamertag}
          onChange={handleChange}
          placeholder="Gamer Tag"
          className="w-full px-4 py-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="game"
          value={form.game}
          onChange={handleChange}
          placeholder="Game Title (e.g. Valorant)"
          className="w-full px-4 py-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="rank"
          value={form.rank}
          onChange={handleChange}
          placeholder="Rank (e.g. Immortal)"
          className="w-full px-4 py-2 border border-gray-300 rounded"
          required
        />
        <input
          type="number"
          name="hours"
          value={form.hours}
          onChange={handleChange}
          placeholder="Hours Played"
          className="w-full px-4 py-2 border border-gray-300 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
