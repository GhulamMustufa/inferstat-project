import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
// import { Link } from "react-router-dom"
import logo from "../img/logo.jpg";

export class Header extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <div className="main-navigation navbar-fixed-top">
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="index.html">
                <img
                  src={logo}
                  width="200"
                  height="50"
                  class="d-inline-block align-top"
                  alt=""
                />
              </a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right menu">
                <li>
                  <Link
                    className="nav-link"
                    activeClass="active "
                    to="banner"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="partners"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Partners
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="careers"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="aboutUs"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
                
                <li>
                  <Link
                    className="nav-link"
                    activeClass="active"
                    data-toggle="modal"
                    data-target="#myModal4"
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div id="myModal4" class="modal fade" role="dialog">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal">
                        &times;
                      </button>
                      <h3 class="modal-title">Inferstat Beta SignUp</h3>
                    </div>
                    <div class="modal-body">
                      <div id="mc_embed_signup">
                        <form
                          action="https://gmail.us20.list-manage.com/subscribe/post?u=5f73921cf79c449c65411ca5f&id=063d151c2f"
                          method="post"
                          id="mc-embedded-subscribe-form"
                          name="mc-embedded-subscribe-form"
                          className="validate"
                          target="_blank"
                          noValidate
                        >
                          <div id="mc_embed_signup_scroll">
                            <div className="indicates-required">
                              <span className="asterisk">*</span> indicates
                              required
                            </div>
                            <div className="mc-field-group">
                              <label htmlFor="mce-FNAME">
                                First Name <span className="asterisk">*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="enter first name"
                                name="FNAME"
                                className="required"
                                id="mce-FNAME"
                              />
                            </div>
                            <div className="mc-field-group">
                              <label htmlFor="mce-LNAME">
                                Last Name <span className="asterisk">*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="enter last name"
                                name="LNAME"
                                className="required"
                                id="mce-LNAME"
                              />
                            </div>
                            <div className="mc-field-group">
                              <label htmlFor="mce-EMAIL">
                                Email Address{" "}
                                <span className="asterisk">*</span>
                              </label>
                              <input
                                type="email"
                                placeholder="enter email"
                                name="EMAIL"
                                className="required email"
                                id="mce-EMAIL"
                              />
                            </div>
                            <div className="mc-field-group size1of2">
                              <label htmlFor="mce-MMERGE4">Phone Number </label>
                              <input
                                type="text"
                                name="MMERGE4"
                                className
                                placeholder="enter phone number"
                                id="mce-MMERGE4"
                              />
                            </div>
                            <div className="mc-field-group">
                              <label htmlFor="mce-MMERGE3">Company </label>
                              <input
                                type="text"
                                placeholder="enter company name"
                                name="MMERGE3"
                                className
                                id="mce-MMERGE3"
                              />
                            </div>
                            <div id="mce-responses" className="clear">
                              <div
                                className="response"
                                id="mce-error-response"
                                style={{ display: "none" }}
                              />
                              <div
                                className="response"
                                id="mce-success-response"
                                style={{ display: "none" }}
                              />
                            </div>{" "}
                            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                            <div
                              style={{ position: "absolute", left: "-5000px" }}
                              aria-hidden="true"
                            >
                              <input
                                type="text"
                                name="b_5f73921cf79c449c65411ca5f_063d151c2f"
                                tabIndex={-1}
                                defaultValue
                              />
                            </div>
                            <div className="clear">
                              <input
                                type="submit"
                                defaultValue="Subscribe"
                                name="subscribe"
                                id="mc-embedded-subscribe"
                                className="button"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

      </div>
    );
  }
}

export default Header;
