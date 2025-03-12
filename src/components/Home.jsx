import React from "react";
import { Link } from "react-router-dom"; // Tambahkan import Link
import animeData from "../data/animeData"; // Pastikan path benar

export default function Home() {
  return (
    <div className="p-4">
      <header className="text-2xl font-bold text-center mb-4">StreamingX</header>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {animeData.map((anime) => ( // Gunakan animeData, bukan animeList
          <Link key={anime.id} to={`/anime/${anime.id}`} className="block border rounded-lg overflow-hidden shadow-lg">
            <img src={anime.image} alt={anime.title} className="w-full h-40 object-cover" />
            <div className="p-2 text-center font-semibold">{anime.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
