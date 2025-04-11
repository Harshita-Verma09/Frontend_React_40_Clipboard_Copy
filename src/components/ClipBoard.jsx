import React, { useState } from "react";
import { ClipboardIcon } from "@heroicons/react/24/solid"; // ✅ Correct import

const ClipboardCopy = () => {
    const [text, setText] = useState("npm create vite@latest");

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(text);
            alert("✅ Text Copied!");
        } catch (err) {
            alert("❌ Copy Failed!");
        }
    };
    //Tumne kisi site pe "Copy" button dekha hoga. Jab tum uspe click karte ho, 
    // text clipboard me chala jata hai, aur tum Ctrl + V se paste kar sakte ho.
    //Yahi kaam navigator.clipboard.writeText(text) karta hai! 
    return (
        <div className="flex flex-col items-center p-6 bg-gray-900 min-h-screen text-white">
            <h2 className="text-xl font-bold mb-2">Clipboard Copy</h2>

            <div className="flex items-center space-x-2 bg-gray-700 p-3 rounded-lg">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="bg-gray-800 text-white px-3 py-2 rounded-md w-60 outline-none"
                />
                <button onClick={copyToClipboard} className="p-2 bg-blue-500 hover:bg-blue-600 rounded-md">
                    <ClipboardIcon className="h-6 w-6 text-white" />  {/* ✅ Use ClipboardIcon */}
                </button>
            </div>
        </div>
    );
};

export default ClipboardCopy;
