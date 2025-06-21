import { useEffect, useState } from "react";
import { BACKEND_URL } from "../App";
import { useUser } from "@civic/auth/react";
import { useNavigate } from "react-router-dom";

export const GameSelector = () => {
  const [gamesList, setGamesList] = useState([]);
  const [selectedGames, setSelectedGames] = useState([]);
  const [selectedGamesId, setSelectedGamesId] = useState({});
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/all-games`, {
          credentials: "include",
        });
        const data = await res.json();
        setGamesList(data.games.map(game => game.name)); // assuming each game has a `name` field
      } catch (err) {
        console.error("Error fetching games", err);
      }
    };

    fetchGames();
  }, []);

  const handleCheckboxChange = (game) => {
    setSelectedGames((prev) =>
      prev.includes(game) ? prev.filter((g) => g !== game) : [...prev, game]
    );
  };

  const handleIdChange = (game, value) => {
    setSelectedGamesId((prev) => ({
      ...prev,
      [game]: value,
    }));
  };

  const handleGameSelectionSubmit = async (e) => {
    e.preventDefault();
    const email = user.email;

    try {
      const response = await fetch(`${BACKEND_URL}/my-games`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        credentials: "include",
        body: JSON.stringify({
          selectedGames,
          selectedGamesId,
          email
        })
      });

      navigate("/");

      console.log(await response.json());

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-6 space-y-6 max-w-xl mx-auto">
      <div className="dropdown">
        <label tabIndex={0} className="btn m-1">Select Games</label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
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
            <div key={game} className="flex items-center space-x-4 border p-4 rounded-lg shadow bg-base-200">
              <label className="font-semibold min-w-[150px]">{game} ID:</label>
              <input
                type="text"
                placeholder={`Enter ${game} ID`}
                className="input input-bordered w-full"
                value={selectedGamesId[game] || ""}
                onChange={(e) => handleIdChange(game, e.target.value)}
              />
            </div>
          ))}
        </div>
      )}

      <button className="btn btn-lg btn-accent w-full" onClick={handleGameSelectionSubmit}>
        Submit
      </button>
    </div>
  );
};
