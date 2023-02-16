import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './MovieSearcher.css';

export default function MovieSearcher() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const url = `https://www.omdbapi.com/?apikey=bd214a46&s=${searchTerm}`;
    const response = await axios.get(url);
    setResults(response.data.Search);
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-b from-blue-700 to-indigo-900 min-h-screen">
      <div className="container mx-auto h-full flex flex-col justify-center items-center">
        <div className="w-full max-w-3xl px-8 mt-8">
          <h1 className="text-5xl font-bold text-white mb-8 leading-tight text-center">
            Movie Searcher
          </h1>
          <div className="flex items-center mb-8">
            <input
              type="text"
              className="w-full bg-white rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Search for a movie..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button
              className="ml-4 bg-white text-blue-700 font-bold py-2 px-4 rounded-full hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          {loading ? (
            <div className="text-center py-4 text-white">Loading...</div>
          ) : results && results.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
              {results.map((result) => (
                <div key={result.imdbID} className="bg-white shadow rounded-md overflow-hidden">
                  <img src={result.Poster} alt={result.Title} className="h-64 w-full object-cover" />
                  <div className="p-4">
                    <h2 className="font-bold text-gray-700 mb-2">{result.Title}</h2>
                    <p className="text-sm text-gray-500">{result.Year}</p>
                    <a href={`https://www.imdb.com/title/${result.imdbID}`} target="_blank" rel="noreferrer" className="block mt-4 text-blue-700 hover:text-blue-800">
                      View on IMDb
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            searchTerm.length > 0 && <div className="text-center py-4 text-white">No results found</div>
          )}
          <div className="text-center py-4">
            <Link to="/" className="text-white hover:text-blue-400">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
