import { useState, useEffect } from "react";

export default function Header({ darkMode, toggleDarkMode, searchQuery, setSearchQuery }) {
  const [searchInput, setSearchInput] = useState(searchQuery);


  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(searchInput); // Update query setelah user berhenti mengetik
    }, 300); // Delay 300ms

    return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <nav>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/contact" className="mr-4">Kontak</Link>
      </nav>
      <input
        type="text"
        placeholder="Cari anime..."
        className="w-60 p-2 border rounded text-black"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </header>
  );
}

}
