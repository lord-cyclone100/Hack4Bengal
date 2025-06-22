import React, { useState } from "react";
export const Leaderform = () => {
  const [code, setCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [codeGenerated, setCodeGenerated] = useState(false);
  const generateCode = () => {
    const newCode = Math.floor(100000 + Math.random() * 900000).toString();
    setCode(newCode);
    setCodeGenerated(true); 
    setCopied(false);
    console.log(newCode); // For debugging purposes
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
  };

  return (
    // <div className="flex flex-col items-center gap-4 p-6 rounded-xl shadow-md bg-gray-100 w-80">
    //   <h2 className="text-xl font-semibold">Generate 6-Digit Code</h2>
    //   <p className="text-center text-lg border text-black rounded p-2 w-full">{code}</p>
    //   <div className="flex gap-2">
    //     <button
    //       onClick={generateCode}
    //       className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
    //     >
    //       Generate Code
    //     </button>
    //      <div className="flex gap-2">
    //     {!codeGenerated && (
    //       <button
    //         onClick={generateCode}
    //         className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
    //       >
    //         Generate Code
    //       </button>
    //     )}

    //     {codeGenerated && (
    //       <button
    //         onClick={copyToClipboard}
    //         className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
    //       >
    //         {copied ? "Copied!" : "Copy Code"}
    //       </button>
    //     )}
    // </div>
    <div className="flex items-center justify-center">
    <div className="flex flex-col justify-center items-center gap-4 p-6 rounded-xl shadow-md bg-base-100 w-80">
      <h2 className="text-xl text-center width-auto font-semibold">Generate a 6-digit code for your team and share with your teammates!</h2>
      
      <p className="  text-white text-center rounded p-2 w-full">{code}</p>

      <div className="flex gap-2">
        {!codeGenerated && (
          <button
            onClick={generateCode}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Generate Code
          </button>
        )}

        {codeGenerated && (
          <button
            onClick={copyToClipboard}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            {copied ? "Copied!" : "Copy Code"}
          </button>
        )}
      </div>
    </div>
    </div>
  );
}

 