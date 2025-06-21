import { useEffect } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Login } from './pages/Login';
import { Contact } from './pages/Contact';
import Lenis from 'lenis';
import { CreateTournament } from './pages/CreateTournament';
import { GameSelector } from './components/GameSelector';

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const App = () => {
  const location = useLocation();
  const hideLayout = location.pathname === '/create-tournament';

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-tournament' element={<CreateTournament />} />
        <Route path='/login/metamask' element={<Login />} />
        <Route path='/dashboard/:id' element={<Contact />} />
      </Routes> */}
      <GameSelector />
      <Footer />
    </>
  );
};
