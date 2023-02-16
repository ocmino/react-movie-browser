import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Tailwind from './Tailwind';
import MovieSearcher from './MovieSearcher';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tailwind />} />
        <Route path="/movies" element={<MovieSearcher />} />
      </Routes>
    </Router>
  );
}

export default App;