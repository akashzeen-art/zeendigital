import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import CoverageArea from './pages/CoverageArea';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coverage-area" element={<CoverageArea />} />
      </Routes>
      <Footer />
      <FloatingActions />
    </BrowserRouter>
  );
}
