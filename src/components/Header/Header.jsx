import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
const Header = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e, section) => {
    e.preventDefault();
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const closeMenu = (e) => {
      if (!e.target.closest('.search_bar')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, []);

  return (
    <>
      {/* <!-- top navi wrapper end --> */}
      <div className="m24_navi_main_wrapper ms_cover">
        <div className="container-fluid">
          {/* <!-- logo --> */}
          <div className="m24_logo_wrapper">
            <div className="ms_logo_div">
              <a
                onClick={() => scrollToSection("home")}
                style={{ cursor: 'pointer' }}
              >
                <img src="images/logo.png" alt="logo" />
              </a>
            </div>
          </div>

          {/* <!-- login register btn --> */}
          <div className="m24_header_right_Wrapper d-none d-sm-none d-md-none d-lg-none d-xl-block">
            <div className="m24_signin_wrapper">
              <a href="#" data-toggle="modal" data-target="#login_modal">
                <img src="images/pf.png" alt="img" />
                <div className="login_top_wrapper">
                  <p>login/register</p>
                </div>
              </a>
            </div>
          </div>

          {/* <!-- main menu --> */}
          <div className="m24_navigation_wrapper">
            {/* <!-- main buttons --> */}
            <div className="mainmenu d-xl-block d-lg-block d-md-none d-sm-none d-none">
              <ul className="main_nav_ul">
                <li>
                  <a
                    className="gc_main_navigation improved-class"
                    onClick={() => scrollToSection("radioList")}
                  >
                    Country
                  </a>
                </li>

                <li>
                  <a
                    className="gc_main_navigation improved-class"
                    onClick={() => scrollToSection("radioGenreList")}
                  >
                    Genre
                  </a>
                </li>

                <li>
                  <a
                    className="gc_main_navigation improved-class"
                    onClick={() => scrollToSection("about")}
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- search bar --> */}
            <div className="navi_searchbar_wrapper">
              <i className="flaticon-magnifying-glass"></i>
              <input
                type="text"
                id="justAnotherInputBox"
                placeholder="Search for Radios.."
                style={{ width: "100%" }}
              />
            </div>

            {/* <!-- mobile version menu --> */}
            <div className="d-block d-sm-block d-md-block d-lg-block d-xl-none">
              <div className="search_bar">
                <div 
                  className="res_search_bar" 
                  onClick={handleMenuClick}
                >
                  <i className="fa fa-ellipsis-v"></i>
                </div>

                <div className={`res_search_box ${isMenuOpen ? 'active' : ''}`}>
                  <div className="lang_list_wrapper responsive_search_toggle">
                    <a
                      href="#"
                      className="gc_main_navigation improved-class"
                      onClick={(e) => handleLinkClick(e, "radioList")}
                    >
                      Country
                    </a>
                  </div>

                  <div className="lang_list_wrapper responsive_search_toggle">
                    <a
                      href="#"
                      className="gc_main_navigation improved-class"
                      onClick={(e) => handleLinkClick(e, "radioGenreList")}
                    >
                      Genre
                    </a>
                  </div>

                  <div className="lang_list_wrapper responsive_search_toggle">
                    <a
                      href="#"
                      className="gc_main_navigation improved-class"
                      onClick={(e) => handleLinkClick(e, "about")}
                    >
                      About
                    </a>
                  </div>

                  {/* <div className="lang_list_wrapper responsive_search_toggle">
                    <a href="#" data-toggle="modal" data-target="#myModal">
                      languages <i className="fas fa-language"></i>
                    </a>
                  </div>

                  <div className="m24_signin_wrapper responsive_search_toggle">
                    <a href="#" data-toggle="modal" data-target="#login_modal">
                      <img src="images/pf.png" alt="img" />
                      <div className="login_top_wrapper">
                        <p>login/register</p>
                      </div>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="m24_navi_langauage_box">
              {/* <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                  <input type="checkbox" id="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div> */}
              <ThemeSwitch />
              <div className="lang_list_wrapper d-none d-sm-none d-md-none d-lg-none d-xl-block">
                <a href="#" data-toggle="modal" data-target="#myModal">
                  languages <i className="fas fa-language"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  scrollToSection: PropTypes.func.isRequired
};

export default Header;
