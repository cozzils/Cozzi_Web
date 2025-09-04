import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DaLuigiSection from './components/DaLuigiSection';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Contact />
          </>
        } />
        <Route path="/daluigi" element={<DaLuigiSection />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;