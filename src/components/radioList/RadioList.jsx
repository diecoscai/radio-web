import React from "react";

const RadioList = () => {
    return(
        <div className="treanding_songs_wrapper release_wrapper ms_cover">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="ms_heading_wrapper">
                <h1>New Releases Albums</h1>
              </div>
              <div className="relaese_viewall_wrapper">
                <a href="#">
                  {" "}
                  view all <i className="flaticon-right-arrow"></i>
                </a>
              </div>
              <div className="release_tabs_wrapper">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#home"
                    >
                      {" "}
                      hindi
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" data-toggle="tab" href="#menu1">
                      english
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" data-toggle="tab" href="#menu2">
                      {" "}
                      telugu
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" data-toggle="tab" href="#menu3">
                      {" "}
                      punjabi
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" data-toggle="tab" href="#menu4">
                      {" "}
                      marathi{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" data-toggle="tab" href="#menu5">
                      {" "}
                      bhojpuri
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="tab-content">
                <div id="home" className="tab-pane active">
                  <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Jabariya Jodi</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel1.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Dilla Ther Jaa</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel2.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Ik Vaari Aa jaa</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel3.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Sadda Move song</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel4.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">me hoon don</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel5.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">wafa ne bewafai</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel6.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">tera chehra</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Jabariya Jodi</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                <div id="menu1" className="tab-pane fade">
                  <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel3.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Sadda Move song</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Jabariya Jodi</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel1.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Dilla Ther Jaa</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel2.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Ik Vaari Aa jaa</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel4.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">me hoon don</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel6.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">tera chehra</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel5.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">wafa ne bewafai</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Jabariya Jodi</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                <div id="menu2" className="tab-pane fade">
                  <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel2.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Ik Vaari Aa jaa</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel3.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Sadda Move song</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Jabariya Jodi</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel1.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Dilla Ther Jaa</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel4.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">me hoon don</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel5.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">wafa ne bewafai</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel6.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">tera chehra</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Jabariya Jodi</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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

                <div id="menu3" className="tab-pane fade">
                  <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel3.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Sadda Move song</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel2.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Ik Vaari Aa jaa</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Jabariya Jodi</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel1.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Dilla Ther Jaa</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel5.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">wafa ne bewafai</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel4.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">me hoon don</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel6.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">tera chehra</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Jabariya Jodi</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                <div id="menu4" className="tab-pane fade">
                  <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel3.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Sadda Move song</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Jabariya Jodi</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel2.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Ik Vaari Aa jaa</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel1.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Dilla Ther Jaa</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel5.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">wafa ne bewafai</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel6.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">tera chehra</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel4.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">me hoon don</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Jabariya Jodi</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                <div id="menu5" className="tab-pane fade">
                  <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel3.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Sadda Move song</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel2.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Ik Vaari Aa jaa</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Jabariya Jodi</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel1.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Dilla Ther Jaa</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel5.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">wafa ne bewafai</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel4.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">me hoon don</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel6.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">tera chehra</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                      <div className="treanding_slider_main_box release_box_main_content ms_cover">
                        <img src="images/rel.png" alt="img" />
                        <div className="release_content_artist">
                          <p>
                            <a href="#">Jabariya Jodi</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Various Artists</a>
                          </p>
                        </div>
                        <div className="ms_treanding_box_overlay release_box_overlay">
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
            </div>
          </div>
        </div>
      </div>
    );
}

export default RadioList;