import React from "react";
import { Moon, Sun } from "lucide-react";

export default function Header({ darkMode, toggleDarkMode, searchQuery, setSearchQuery }) {
  return (
    <header className="flex justify-between items-center py-4">
      <h1 className="text-2xl font-bold">StreamingX</h1>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Cari anime..."
          className="w-60 p-2 border rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={toggleDarkMode} className="p-2 border rounded">
          {darkMode ? <Sun /> : <Moon />}
        </button>
      </div>
    </header>
  );
}
import { useState, useEffect } from "react";

const [searchInput, setSearchInput] = useState("");

useEffect(() => {
  const timer = setTimeout(() => {
    setSearchQuery(searchInput);
  }, 300); // Delay 300ms sebelum pencarian dimulai

  return () => clearTimeout(timer); // Hapus timer saat user masih mengetik
}, [searchInput]);

<input
  type="text"
  placeholder="Cari anime..."
  value={searchInput}
  onChange={(e) => setSearchInput(e.target.value)}
/>

