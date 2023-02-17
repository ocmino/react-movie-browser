import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page bg-gradient-to-b from-blue-700 to-indigo-900 h-screen">
      <h1 className="landing-page__heading text-5xl font-bold text-white mb-8 leading-tight text-center">
      Welcome to Movie Browser
      </h1>
      <p className="landing-page__text text-2xl text-white mb-8 text-center">
      Search for thousands of movies using the OMDb API
      </p>
      <div className="flex justify-center mb-8">
            <Link
              to="/movies"
              className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out"
            >
              Go to Movie Searcher
            </Link>
          </div>
    </div>
  );
}

export default LandingPage;
