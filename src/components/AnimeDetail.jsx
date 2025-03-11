import React from "react";

export default function AnimeDetail({ anime, setSelectedAnime }) {
  return (
    <div>
      <button
        onClick={() => setSelectedAnime(null)}
        className="mb-4 text-blue-500"
      >
        Kembali ke daftar
      </button>
      <h2 className="text-xl font-semibold mb-2">{anime.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {anime.episodes.map((episode) => (
          <div
            key={episode.number}
            className="border rounded-lg overflow-hidden"
          >
            <iframe
              width="100%"
              height="200"
              frameBorder="0"
              src={episode.url}
              allowFullScreen
              title={`Episode ${episode.number}`}
            ></iframe>
            <div className="p-3">
              <h3 className="text-lg font-semibold">
                Episode {episode.number}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
