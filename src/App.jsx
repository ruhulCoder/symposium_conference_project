import { Home } from './components/Home';
import { Header } from './components/Header';
import { Speakers } from './components/Speakers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/speakers" element={<Speakers />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
