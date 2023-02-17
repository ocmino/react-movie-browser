import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MovieSearcher from './MovieSearcher';
import LandingPage from './LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movies" element={<MovieSearcher />} />
      </Routes>
    </Router>
  );
}

export default App;