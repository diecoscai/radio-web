import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import CarouselItem from '../RadioGenreList/CarouselItem';


const RadioByCountryCarousel = ({ radios }) => {


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div
      data-animation="animated fadeInUp"
      className="slider_treanding_stop ms_cover"
    >
      <Carousel
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="all 0.5s ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-card"
      >
        {radios.map((item, index) => (
          <CarouselItem key={index} radio={item} />
        ))}
      </Carousel>
    </div>
  );
};

RadioByCountryCarousel.propTypes = {
    radios: PropTypes.array.isRequired,
};

export default RadioByCountryCarousel;
