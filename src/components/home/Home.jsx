import PropTypes from 'prop-types';
import Slider from "../slider/Slider";
import AddBanner from "../addBanner/AddBanner";
import RadioList from "../radioList/RadioList";
import RadioGenreList from "../radioGenreList/RadioGenreList";
import Footer from "../footer/Footer";
import Header from '../header/Header';
import Player from '../player/Player';
import audio from "../../assets/audio.mp3";

function Home({ sectionRefs, scrollToSection }) {
  return (
    <>
      <Header scrollToSection={scrollToSection} />

      <div style={{ minHeight: '100vh', paddingTop: '50px' }}>
        <Slider />
      </div>
      <AddBanner />
      <div ref={sectionRefs.radioList} style={{ minHeight: '100vh', paddingTop: '50px' }}>
        <RadioList />
      </div>
      <AddBanner />
      <div ref={sectionRefs.radioGenreList} style={{ minHeight: '50vh', paddingTop: '50px' }}>
        <RadioGenreList />
      </div>
      <div ref={sectionRefs.about} style={{ minHeight: '50vh', background: '#f0f0f0' }}>
        <Footer />
      </div>
      <Player mediaSource={audio} />

    </>
  );
}
Home.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
  sectionRefs: PropTypes.object.isRequired,
};

export default Home;
