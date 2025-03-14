// React Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useRef, useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import Preloader from "./components/preLoader/Preloader";

import LenguageModal from "./components/modals/lenguageModal/LenguageModal";
import LoginModal from "./components/modals/loginModal/LoginModal";
import RegisterModal from "./components/modals/registerModal/RegisterModal";
// Assets
import NotFound from './pages/NotFound/NotFound';

import Home from "./pages/Home/Home";
import { RadioProvider } from './context/RadioProvider';

function App() {
  const homeRef = useRef(null);
  const radioListRef = useRef(null);
  const radioGenreListRef = useRef(null);
  const aboutRef = useRef(null);
  const [preloader, setPreloader] = useState(true);

  const sectionRefs = {
    home: homeRef,
    radioList: radioListRef,
    radioGenreList: radioGenreListRef,
    about: aboutRef,
  };

  const scrollToSection = (section) => {
    sectionRefs[section]?.current.scrollIntoView({ behavior: 'smooth' });
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <RadioProvider>
      <Router>
        { preloader ? <Preloader /> : null }
        <div className="m24_main_wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Routes>
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
            <Route path="/" element={<Home scrollToSection={scrollToSection} sectionRefs={sectionRefs} />} />
          </Routes>
        </div>
        <LenguageModal />
        <LoginModal />
        <RegisterModal />
      </Router>
    </RadioProvider>
  );
}

export default App;
