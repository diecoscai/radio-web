import React from "react";

const LoginModal = () =>{
    return (
        <div className="modal fade lang_ms_banner" id="login_modal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="m24_language_box ms_cover">
                  <h1>Login / Sign In</h1>
                  <p>
                    for unlimited music streaming & a personalised experience
                  </p>
                </div>
                <div className="login_form_wrapper">
                  <div className="icon_form comments_form">
                    <input
                      type="text"
                      className="form-control"
                      name="full_name"
                      placeholder="Enter Email Address*"
                    />
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="icon_form comments_form">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Password *"
                    />
                    <i className="fas fa-lock"></i>
                  </div>
                  <div className="login_remember_box">
                    <label className="control control--checkbox">
                      keep me signed in
                      <input type="checkbox" />
                      <span className="control__indicator"></span>
                    </label>
                    <a href="#" className="forget_password">
                      Forgot Password ?
                    </a>
                  </div>
                </div>
                <div className="lang_apply_btn_wrapper ms_cover">
                  <div className="lang_apply_btn">
                    <a href="#">login now</a>
                  </div>
                  <div className="cancel_wrapper">
                    <a href="#" className="" data-dismiss="modal">
                      cancel
                    </a>
                  </div>
                  <div className="dont_have_account ms_cover">
                    <p>
                      Don’t have an acount ?{" "}
                      <a href="#register_modal" data-toggle="modal">
                        register here
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LoginModal;