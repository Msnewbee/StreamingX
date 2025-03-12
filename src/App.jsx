import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter> {//}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}


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
