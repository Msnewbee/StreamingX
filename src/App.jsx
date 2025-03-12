import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AnimeList from "./components/AnimeList";
import AnimeDetail from "./components/AnimeDetail";
import animeData from "./data/animeData";

export default function Home() {
  return (
    <div className="p-4">
      <header className="text-2xl font-bold text-center mb-4">StreamingX</header>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {animeList.map((anime) => (
          <Link key={anime.id} to={`/anime/${anime.id}`} className="block border rounded-lg overflow-hidden shadow-lg">
            <img src={anime.image} alt={anime.title} className="w-full h-40 object-cover" />
            <div className="p-2 text-center font-semibold">{anime.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || false; // Ambil dari localStorage
  });

  const [searchQuery, setSearchQuery] = useState(""); // State untuk pencarian
  const [selectedAnime, setSelectedAnime] = useState(null); // State untuk anime yang dipilih

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode)); // Simpan ke localStorage
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);

  // Filter daftar anime berdasarkan input pencarian (by title)
  const filteredAnimeList = animeData.filter((anime) =>
    anime.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen p-6`}>
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {selectedAnime ? (
        <AnimeDetail anime={selectedAnime} setSelectedAnime={setSelectedAnime} />
      ) : (
        <AnimeList animeList={filteredAnimeList} setSelectedAnime={setSelectedAnime} />
      )}
    </div>
  );
}
