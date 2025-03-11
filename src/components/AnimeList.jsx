import React from "react";

export default function AnimeList({ animeList, setSelectedAnime }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      {animeList.map((anime) => (
        <div
          key={anime.id}
          className="border rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition"
          onClick={() => setSelectedAnime(anime)}
        >
          <img
            src={anime.image}
            alt={anime.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-3">
            <h2 className="text-lg font-semibold">{anime.title}</h2>
            <p className="text-sm text-gray-500">{anime.genre}</p>
            <p className="text-sm text-yellow-500">Rating: {anime.rating}</p>
            <p className="text-sm mt-2">{anime.synopsis}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
