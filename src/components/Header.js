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
      <div>
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
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
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
      </div>
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
              <div id="sendmessage">Your message has been sent. Thank you!</div>
            <div id="errormessage" />
            <div className="form-sec">
              <form action method="post" role="form" className="contactForm">
                <div className="col-md-12 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control text-field-box"
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div className="validation" />
                </div>
                <div className="col-md-12 form-group">
                  <input
                    type="email"
                    className="form-control text-field-box"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                  />
                  <div className="validation" />
                </div>
                <div className="col-md-12 form-group">
                  <input
                    type="text"
                    className="form-control text-field-box"
                    name="subject"
                    id="subject"
                    placeholder="Company"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div className="validation" />
                </div>
                <div className="col-md-12 form-group">
                  <textarea
                    className="form-control text-field-box"
                    name="message"
                    rows={5}
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Cover Letter"
                    defaultValue={""}
                  />
                  <div className="validation" />
                  <button
                    className="button-medium"
                    id="contact-submit"
                    type="submit"
                    name="contact"
                  >
                    Submit Now
                  </button>
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
