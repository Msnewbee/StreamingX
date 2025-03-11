import { useState, useEffect } from "react";

export default function Header({ darkMode, toggleDarkMode, searchQuery, setSearchQuery }) {
  const [searchInput, setSearchInput] = useState(searchQuery); // State lokal untuk input

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(searchInput); // Update query setelah user berhenti mengetik
    }, 300); // Delay 300ms

    return () => clearTimeout(timer); // Hapus timer jika user masih mengetik
  }, [searchInput]);

  return (
    <input
      type="text"
      placeholder="Cari anime..."
      className="w-60 p-2 border rounded"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
    />
  );
}
