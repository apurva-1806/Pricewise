import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Jeans from './components/Jeans';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/jeans" element={<Jeans />} />
      </Routes>
    </Router>
  );
}

export default App;