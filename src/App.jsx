// React Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useRef } from "react";
import { Navigate } from 'react-router-dom';
import Preloader from "./components/preLoader/Preloader";

import LenguageModal from "./components/lenguageModal/LenguageModal";
import LoginModal from "./components/loginModal/LoginModal";
import RegisterModal from "./components/registerModal/RegisterModal";
// Assets
import NotFound from './components/notFound/NotFound';

import Home from "./components/home/Home";

function App() {
  const radioListRef = useRef(null);
  const radioGenreListRef = useRef(null);
  const aboutRef = useRef(null);

  const sectionRefs = {
    radioList: radioListRef,
    radioGenreList: radioGenreListRef,
    about: aboutRef,
  };

  const scrollToSection = (section) => {
    sectionRefs[section]?.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <Preloader />
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
  );
}

export default App;
