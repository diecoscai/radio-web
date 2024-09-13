import PropTypes from 'prop-types';
import Slider from "../../sections/slider/Slider";
import AddBanner from "../../adBanner/AdBanner";
import RadioList from "../../sections/RadioByCountry/RadioList";
import RadioGenreList from "../../sections/radioGenreList/RadioGenreList";
import Footer from "../../sections/footer/Footer";
import Header from '../../sections/header/Header';
import Player from '../../sections/player/Player';

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
      <Player />

    </>
  );
}
Home.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
  sectionRefs: PropTypes.object.isRequired,
};

export default Home;
