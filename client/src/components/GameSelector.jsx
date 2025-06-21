import { useState } from "react";

const gamesList = [
  "Valorant",
  "Fortnite",
  "Apex Legends",
  "CS:GO",
  "League of Legends",
];

export const GameSelector = () => {
  const [selectedGames, setSelectedGames] = useState([]);

  const handleCheckboxChange = (game) => {
    setSelectedGames((prev) =>
      prev.includes(game)
        ? prev.filter((g) => g !== game)
        : [...prev, game]
    );
  };

  return (
    <div className="p-6 space-y-6 max-w-xl mx-auto">
      <div className="dropdown">
        <label tabIndex={0} className="btn m-1">
          Select Games
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {gamesList.map((game) => (
            <li key={game}>
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  checked={selectedGames.includes(game)}
                  onChange={() => handleCheckboxChange(game)}
                />
                <span className="label-text ml-2">{game}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {selectedGames.length > 0 && (
        <div className="space-y-4">
          {selectedGames.map((game) => (
            <div
              key={game}
              className="flex items-center space-x-4 border p-4 rounded-lg shadow bg-base-200"
            >
              <label className="font-semibold min-w-[150px]">
                {game} ID:
              </label>
              <input
                type="text"
                placeholder={`Enter ${game} ID`}
                className="input input-bordered w-full"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};