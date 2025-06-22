import React, { useState } from "react";

export const Memberform=()=> {
  const [enteredCode, setEnteredCode] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (/^\d{6}$/.test(enteredCode)) {
      // Simulate join success (replace this with real API call)
      setMessage(`Successfully joined team with code: ${enteredCode}`);
      setEnteredCode("");
    } else {
      setMessage("Please enter a valid 6-digit code.");
    }
  };

  return (
    <div className="flex items-center justify-center">
    <div className="flex flex-col items-center gap-4 p-6 rounded-xl shadow-md bg-base-100 w-80">
      <h2 className="text-xl font-semibold">Enter 6-digit code to join a Team</h2>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
        <input
          type="text"
          value={enteredCode}
          onChange={(e) => setEnteredCode(e.target.value)}
          placeholder="Enter 6-digit code"
          className="text-center text-lg border border-gray-300 rounded p-2"
          maxLength={6}
        />
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
        >
          Join Team
        </button>
      </form>
      {message && (
        <div className="text-sm text-center text-gray-700">{message}</div>
      )}
    </div>
    </div>
  );
}
