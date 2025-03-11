import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AnimeList from "./components/AnimeList";
import AnimeDetail from "./components/AnimeDetail";
import animeData from "./data/animeData";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || false; // Ambil dari localStorage
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode)); // Simpan ke localStorage
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {/* Komponen lain */}
    </div>
  );
}

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
