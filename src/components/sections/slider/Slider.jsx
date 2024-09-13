import React, { useState, useEffect } from 'react';
import TrendingItem from "./TrendingItem";
import { getTrendingRadios } from "../../../services/RadioServices";

const Slider = () => {
  const [radios, setRadios] = useState([]);


  useEffect(() => {
    getTrendingRadios()
      .then(data => {
        setRadios(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* <!-- slider wrapper start --> */}
      <div className="main_slider_wrapper index2_slider_wrapper slider-area">
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
                                <a
                                  href="https://www.youtube.com/embed/ryzOXAO0Ss0"
                                  className="gc_main_navigation test-popup-link button"
                                >
                                  {" "}
                                  <i className="flaticon-play-button"></i>play
                                  vast
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
                              {radios.map((item, index) => (
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