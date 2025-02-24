import PropTypes from 'prop-types';
import Slider from "../../components/Slider/Slider";
import AdBanner from "../../components/AdBanner/AdBanner";
import RadioByCountryList from "../../components/RadioByCountry/RadioByCountryList";
import RadioByGenreList from "../../components/RadioGenreList/RadioByGenreList";
import Footer from "../../components/Footer/Footer";
import Header from '../../components/Header/Header';
import Player from '../../components/Player/Player';

function Home({ sectionRefs, scrollToSection }) {
  return (
    <>
      <Header scrollToSection={scrollToSection} />

      <div ref={sectionRefs.home} style={{ minHeight: '100vh', paddingTop: '50px' }}>
        <Slider />
      </div>
      <AdBanner />
      <div ref={sectionRefs.radioList} style={{ minHeight: '50vh', paddingTop: '50px' }}>
        <RadioByCountryList />
      </div>
      <AdBanner />
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
