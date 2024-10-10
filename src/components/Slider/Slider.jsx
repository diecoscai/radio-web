import React, { useState, useEffect } from 'react';
import TrendingItem from "./TrendingItem";
import { getTrendingRadios } from "../../services/RadioServices";

const Slider = () => {
  const [radios, setRadios] = useState([]);
  
  useEffect(() => {
    const fetchTrendingRadios = async () => {
      try {
        const trendingRadios = await getTrendingRadios();
        setRadios(trendingRadios);
      } catch (error) {
        console.error("Error fetching trending radios:", error);
      }
    };

    fetchTrendingRadios();
  }, []);

  useEffect(() => {
    if (radios.length > 0) {
        $(".treanding_song_slider .owl-carousel").owlCarousel({
          loop: true,
          margin: 15,
          autoplay: false,
          smartSpeed: 1200,
          responsiveClass: true,
          navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
          responsive: {
            0: {
              items: 1,
              nav: true
            },
            600: {
              items: 3,
              nav: true
            },
            1000: {
              items: 5,
              nav: true,
              loop: true,
              margin: 20
            }
          }
        });
    }
  }, [radios]);

  return (
    <>
      {/* <!-- slider wrapper start --> */}
      <div className="main_slider_wrapper index2_slider_wrapper slider-area bg-dark">
        <div
          id="carousel-example-generic"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="carousel-captions caption-1">
                <div className="container jn_container">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="content">
                        <h1 data-animation="animated fadeInUp">On Air,</h1>

                        <h2 data-animation="animated fadeInUp">
                          Your Gateway to Unlimited Online Radio
                        </h2>
                        <p data-animation="animated fadeInUp">
                          Tune into the hottest hits, live shows, and non-stop music,
                          <br /> streaming around the clock just for you.{" "}
                        </p>
                        <div className="slider_btn ms_cover">
                          <div className="lang_apply_btn">
                            <ul>
                              <li data-animation="animated fadeInUp">
                                <a style={{color: '#ffffff'}} className="gc_main_navigation test-popup-link button">
                                  <i className="flaticon-play-button"></i>start now
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* <!-- trending songs --> */}
                        <div
                          data-animation="animated fadeInUp"
                          className="slider_treanding_stop ms_cover"
                        >
                          <div className="slider_trending_heading">
                            <h1>Trending radios</h1>
                          </div>
                          <div className="treanding_song_slider">
                            <div className="owl-carousel owl-theme">
                              {radios && radios.map((item,index) => (
                                <TrendingItem key={index} radio={item} />
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="clear"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;