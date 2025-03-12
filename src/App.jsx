import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AnimeList from "./components/AnimeList";
import AnimeDetail from "./components/AnimeDetail";
import animeData from "./data/animeData";
import Home from "./components/Home"; // Tambahkan import Home

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || false;
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAnime, setSelectedAnime] = useState(null);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);

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
      <Home /> {/* Tambahkan komponen Home */}
    </div>
  );
}
