import PropTypes from 'prop-types';
import Slider from "../../sections/slider/Slider";
import AddBanner from "../../adBanner/AdBanner";
import RadioByCountryList from "../../sections/RadioByCountry/RadioByCountryList";
import RadioByGenreList from "../../sections/radioGenreList/RadioByGenreList";
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
        <RadioByCountryList />
      </div>
      <AddBanner />
      <div ref={sectionRefs.radioGenreList} style={{ minHeight: '50vh', paddingTop: '50px' }}>
        <RadioByGenreList />
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
