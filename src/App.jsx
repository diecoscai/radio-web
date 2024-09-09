// React Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useRef } from "react";

// Components
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";
import AddBanner from "./components/addBanner/AddBanner";
import Player from "./components/player/Player";
import Preloader from "./components/preLoader/Preloader";
import RadioList from "./components/radioList/RadioList";
import RadioGenreList from "./components/radioGenreList/RadioGenreList";
import Footer from "./components/footer/Footer";
import LenguageModal from "./components/lenguageModal/LenguageModal";
import LoginModal from "./components/loginModal/LoginModal";
import RegisterModal from "./components/registerModal/RegisterModal";

// Assets
import audio from "./assets/audio.mp3";

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

      {/* Main wrapper */}
      <div className="m24_main_wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header scrollToSection={scrollToSection} />

        <Routes>
          <Route path="/trending" element={<RadioList />} />
          <Route path="/genres" element={<RadioGenreList />} />
          <Route path="/about" element={<h1>About Page</h1>} />
        </Routes>

        {/* Slider Component */}
        <div style={{ minHeight: '100vh', paddingTop: '50px' }}>
          <Slider />
        </div>

        {/* Advertisement Banner */}
        <AddBanner />

        {/* RadioList Section */}
        <div ref={radioListRef} style={{ minHeight: '100vh', paddingTop: '50px' }}>
          <RadioList />
        </div>

        {/* Another Advertisement Banner */}
        <AddBanner />

        {/* RadioGenreList Section */}
        <div ref={radioGenreListRef} style={{ minHeight: '100vh', paddingTop: '50px' }}>
          <RadioGenreList />
        </div>

        {/* Footer */}
        <div ref={aboutRef} style={{ minHeight: '50vh', background: '#f0f0f0' }}>
          <Footer />
        </div>
      </div>

      {/* Modals */}
      <LenguageModal />
      <LoginModal />
      <RegisterModal />

      {/* Audio Player */}
      <Player mediaSource={audio} />
    </Router>
  );
}

export default App;
