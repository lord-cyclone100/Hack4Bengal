import { useState } from "react";
import { BACKEND_URL } from "../App";

const CreateAllGames = () => {

  const [addGame, setAddGame] = useState();

  const handleAllGameSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BACKEND_URL}/create-all-games`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        credentials: "include",
        body: JSON.stringify({ addGame })
      });

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleAllGameSubmit}>
        <input type="text" value={addGame} onChange={e => setAddGame(e.target.value)} />
        <button className="btn btn-success">Go</button>
      </form>
    </>
  );
};

export default CreateAllGames;