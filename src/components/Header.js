import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
// import { Link } from "react-router-dom"
import logo from '../img/logo.jpg'

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
              <img src={logo} width="200" height="50" class="d-inline-block align-top" alt=""/>
                
              </a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right menu">
                <li>
                  <Link
                    className="nav-link"
                    activeClass="active"
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
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
