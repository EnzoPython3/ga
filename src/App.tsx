
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Bios from './pages/Bios';
import PracticeAreas from './pages/PracticeAreas';
import Testimonials from './pages/Testimonials';
import Ebook from './pages/Ebook';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bios" element={<Bios />} />
        <Route path="/practice-areas" element={<PracticeAreas />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/ebook" element={<Ebook />} />
        <Route path="/contact" element={<Contact />} />
        {/* Fallback for other routes */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
