import React from "react";

const LenguageModal = () => {
    return(
        <div className="modal fade lang_ms_banner" id="myModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="m24_language_box ms_cover">
                  <h1>Language Selection</h1>
                  <p>
                    Please select the language(s) of the music you listen to.
                  </p>
                </div>
                <div className="lang_list_checkbox">
                  <ul>
                    <li>
                      <p className="music_field_box">
                        <input type="checkbox" id="c1" name="cb" />
                        <label htmlFor="c1">
                          हिंदी <span>Hindi</span>
                        </label>
                      </p>
                    </li>
                    <li>
                      <p className="music_field_box">
                        <input type="checkbox" id="c2" name="cb" />
                        <label htmlFor="c2">
                          English <span>English</span>
                        </label>
                      </p>
                    </li>
                    <li>
                      <p className="music_field_box">
                        <input type="checkbox" id="c3" name="cb" />
                        <label htmlFor="c3">
                          पंजाबी <span>Punjabi</span>
                        </label>
                      </p>
                    </li>
                    <li>
                      <p className="music_field_box">
                        <input type="checkbox" id="c4" name="cb" />
                        <label htmlFor="c4">
                          தமிழ் <span>tamil</span>
                        </label>
                      </p>
                    </li>
                    <li>
                      <p className="music_field_box">
                        <input type="checkbox" id="c5" name="cb" />
                        <label htmlFor="c5">
                          राजस्थानी <span>Rajasthani</span>
                        </label>
                      </p>
                    </li>
                    <li>
                      <p className="music_field_box">
                        <input type="checkbox" id="c6" name="cb" />
                        <label htmlFor="c6">
                          हरयाणवी <span>Haryanvi</span>
                        </label>
                      </p>
                    </li>
                    <li>
                      <p className="music_field_box">
                        <input type="checkbox" id="c7" name="cb" />
                        <label htmlFor="c7">
                          ગુજરાતી <span>Gujarati</span>
                        </label>
                      </p>
                    </li>
                    <li>
                      <p className="music_field_box">
                        <input type="checkbox" id="c8" name="cb" />
                        <label htmlFor="c8">
                          भोजपुरी <span>Bhojpuri</span>
                        </label>
                      </p>
                    </li>
                    <li>
                      <p className="music_field_box">
                        <input type="checkbox" id="c9" name="cb" />
                        <label htmlFor="c9">
                          മലയാളം <span>Malayalam</span>
                        </label>
                      </p>
                    </li>
                    <li>
                      <p className="music_field_box">
                        <input type="checkbox" id="c10" name="cb" />
                        <label htmlFor="c10">
                          मराठी <span>marathi</span>
                        </label>
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="lang_apply_btn_wrapper ms_cover">
                  <div className="lang_apply_btn">
                    <a href="#">apply</a>
                  </div>
                  <div className="cancel_wrapper">
                    <a href="#" className="" data-dismiss="modal">
                      cancel
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LenguageModal;