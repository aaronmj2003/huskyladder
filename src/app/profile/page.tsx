"use client";

import { useState } from "react";

export default function ProfilePage() {
  // Mocked initial data (eventually pulled from backend)
  const [profile, setProfile] = useState({
    gamertag: "TopDawgUW",
    game: "Valorant",
    rank: "Immortal",
    hours: "320",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Saved profile:", profile);
    alert("Profile saved (locally)");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">👤 Your Profile</h1>

      <div className="w-full max-w-md bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Gamer Tag</label>
          {isEditing ? (
            <input
              name="gamertag"
              value={profile.gamertag}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded"
            />
          ) : (
            <p className="mt-1 text-gray-800 font-semibold">{profile.gamertag}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Game</label>
          {isEditing ? (
            <input
              name="game"
              value={profile.game}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded"
            />
          ) : (
            <p className="mt-1 text-gray-800">{profile.game}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Rank</label>
          {isEditing ? (
            <input
              name="rank"
              value={profile.rank}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded"
            />
          ) : (
            <p className="mt-1 text-gray-800">{profile.rank}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Hours Played</label>
          {isEditing ? (
            <input
              name="hours"
              type="number"
              value={profile.hours}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded"
            />
          ) : (
            <p className="mt-1 text-gray-800">{profile.hours}</p>
          )}
        </div>

        <div className="flex justify-end pt-4">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 border border-purple-700 text-purple-700 rounded hover:bg-purple-100"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
