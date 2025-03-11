import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AnimeList from "./components/AnimeList";
import AnimeDetail from "./components/AnimeDetail";
import animeData from "./data/animeData";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Muat preferensi dark mode dari localStorage saat komponen pertama kali dimuat
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("darkMode", !prev);
      return !prev;
    });
  };

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
