import React from "react";
import { Link } from "react-router-dom";

export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-gray-800 text-white">
      <h1 className="text-xl font-bold">StreamingX</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/contact" className="hover:underline">Kontak</Link></li>
        </ul>
      </nav>
      <button onClick={toggleDarkMode} className="px-2 py-1 bg-gray-600 rounded-md">{darkMode ? "🌙" : "☀️"}</button>
    </header>
  );
}
