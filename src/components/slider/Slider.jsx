import React from "react";

const Slider = () => {
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
                        <h1 data-animation="animated fadeInUp">sound,</h1>

                        <h2 data-animation="animated fadeInUp">
                          The greatest music show
                        </h2>
                        <p data-animation="animated fadeInUp">
                          Even while listening to music, simply say “Olivia”
                          <br /> to interact with Olivia.{" "}
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
                            <h1>treanding songs</h1>
                          </div>
                          <div className="treanding_song_slider">
                            <div className="owl-carousel owl-theme">
                              <div className="item">
                                <div className="treanding_slider_main_box ms_cover">
                                  <img src="images/td1.png" alt="img" />
                                  <div className="ms_treanding_box_overlay">
                                    <div className="ms_tranding_box_overlay"></div>
                                    <div className="ms_tranding_more_icon">
                                      <i className="flaticon-menu"></i>
                                    </div>
                                    <ul className="tranding_more_option">
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-playlist"></i>
                                          </span>
                                          Add To playlist
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-star"></i>
                                          </span>
                                          favourite
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-share"></i>
                                          </span>
                                          share
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-files-and-folders"></i>
                                          </span>
                                          view lyrics
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-trash"></i>
                                          </span>
                                          delete
                                        </a>
                                      </li>
                                    </ul>
                                    <div className="tranding_play_icon">
                                      <a href="#">
                                        <i className="flaticon-play-button"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="item">
                                <div className="treanding_slider_main_box ms_cover">
                                  <img src="images/td2.png" alt="img" />
                                  <div className="ms_treanding_box_overlay">
                                    <div className="ms_tranding_box_overlay"></div>
                                    <div className="ms_tranding_more_icon">
                                      <i className="flaticon-menu"></i>
                                    </div>
                                    <ul className="tranding_more_option">
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-playlist"></i>
                                          </span>
                                          Add To playlist
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-star"></i>
                                          </span>
                                          favourite
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-share"></i>
                                          </span>
                                          share
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-files-and-folders"></i>
                                          </span>
                                          view lyrics
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-trash"></i>
                                          </span>
                                          delete
                                        </a>
                                      </li>
                                    </ul>
                                    <div className="tranding_play_icon">
                                      <a href="#">
                                        <i className="flaticon-play-button"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="item">
                                <div className="treanding_slider_main_box ms_cover">
                                  <img src="images/td3.png" alt="img" />
                                  <div className="ms_treanding_box_overlay">
                                    <div className="ms_tranding_box_overlay"></div>
                                    <div className="ms_tranding_more_icon">
                                      <i className="flaticon-menu"></i>
                                    </div>
                                    <ul className="tranding_more_option">
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-playlist"></i>
                                          </span>
                                          Add To playlist
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-star"></i>
                                          </span>
                                          favourite
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-share"></i>
                                          </span>
                                          share
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-files-and-folders"></i>
                                          </span>
                                          view lyrics
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-trash"></i>
                                          </span>
                                          delete
                                        </a>
                                      </li>
                                    </ul>
                                    <div className="tranding_play_icon">
                                      <a href="#">
                                        <i className="flaticon-play-button"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="item">
                                <div className="treanding_slider_main_box ms_cover">
                                  <img src="images/td4.png" alt="img" />
                                  <div className="ms_treanding_box_overlay">
                                    <div className="ms_tranding_box_overlay"></div>
                                    <div className="ms_tranding_more_icon">
                                      <i className="flaticon-menu"></i>
                                    </div>
                                    <ul className="tranding_more_option">
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-playlist"></i>
                                          </span>
                                          Add To playlist
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-star"></i>
                                          </span>
                                          favourite
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-share"></i>
                                          </span>
                                          share
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-files-and-folders"></i>
                                          </span>
                                          view lyrics
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-trash"></i>
                                          </span>
                                          delete
                                        </a>
                                      </li>
                                    </ul>
                                    <div className="tranding_play_icon">
                                      <a href="#">
                                        <i className="flaticon-play-button"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="item">
                                <div className="treanding_slider_main_box ms_cover">
                                  <img src="images/td5.png" alt="img" />
                                  <div className="ms_treanding_box_overlay">
                                    <div className="ms_tranding_box_overlay"></div>
                                    <div className="ms_tranding_more_icon">
                                      <i className="flaticon-menu"></i>
                                    </div>
                                    <ul className="tranding_more_option">
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-playlist"></i>
                                          </span>
                                          Add To playlist
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-star"></i>
                                          </span>
                                          favourite
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-share"></i>
                                          </span>
                                          share
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-files-and-folders"></i>
                                          </span>
                                          view lyrics
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-trash"></i>
                                          </span>
                                          delete
                                        </a>
                                      </li>
                                    </ul>
                                    <div className="tranding_play_icon">
                                      <a href="#">
                                        <i className="flaticon-play-button"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="item">
                                <div className="treanding_slider_main_box ms_cover">
                                  <img src="images/td6.png" alt="img" />
                                  <div className="ms_treanding_box_overlay">
                                    <div className="ms_tranding_box_overlay"></div>
                                    <div className="ms_tranding_more_icon">
                                      <i className="flaticon-menu"></i>
                                    </div>
                                    <ul className="tranding_more_option">
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-playlist"></i>
                                          </span>
                                          Add To playlist
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-star"></i>
                                          </span>
                                          favourite
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-share"></i>
                                          </span>
                                          share
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-files-and-folders"></i>
                                          </span>
                                          view lyrics
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="opt_icon">
                                            <i className="flaticon-trash"></i>
                                          </span>
                                          delete
                                        </a>
                                      </li>
                                    </ul>
                                    <div className="tranding_play_icon">
                                      <a href="#">
                                        <i className="flaticon-play-button"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
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