import PropTypes from 'prop-types';
import Slider from "../../components/slider/Slider";
import AddBanner from "../../components/adBanner/AdBanner";
import RadioByCountryList from "../../components/radioByCountry/RadioByCountryList";
import RadioByGenreList from "../../components/radioGenreList/RadioByGenreList";
import Footer from "../../components/footer/Footer";
import Header from '../../components/header/Header';
import Player from '../../components/player/Player';

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
