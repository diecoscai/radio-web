// React Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useRef, useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import Preloader from "./components/preLoader/Preloader";

import LenguageModal from "./components/modals/lenguageModal/LenguageModal";
import LoginModal from "./components/modals/loginModal/LoginModal";
import RegisterModal from "./components/modals/registerModal/RegisterModal";
// Assets
import NotFound from './components/pages/notFound/NotFound';

import Home from "./components/pages/home/Home";
import { RadioProvider } from './context/RadioProvider';

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

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Crear un temporizador para ocultar el componente después de 3 segundos
    const timer = setTimeout(() => {
      setVisible(false); // Cambiar el estado a false después de 3 segundos
    }, 2000);

    // Limpiar el temporizador cuando el componente se desmonte
    return () => clearTimeout(timer);
  }, []); // El segundo argumento [] asegura que se ejecute solo una vez al montar

  return (
    <RadioProvider>
      <Router>
        { visible ? <Preloader /> : null }
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
