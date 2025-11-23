import { Home } from './components/Home';
import { About } from './components/About';
import { Header } from './components/Header';
import { Speakers } from './components/Speakers';
import { Abstract } from './components/Abstract';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/abstract" element={<Abstract />} />
            <Route path="/speakers" element={<Speakers />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
