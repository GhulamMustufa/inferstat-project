import React, { Component } from "react";
import reactjs from "../img/reactjs.png";
import database from "../img/database.png";

import joshua from '../img/joshua.jpg'
export class Portfolio extends Component {
  render() {
    return (
      <div id="careers">
        <div className="container">
          <div className="page-title text-center">
            <h1>Careers Opportunities</h1>
            <p>
              Inferstat have great career opportunities for potential
              individuals
            </p>
            <hr className="pg-titl-bdr-btm" />
          </div>
          {/* <div className="row">
            <div className="col-lg-12">
              <ul id="portfolio-flters">
                <li data-filter=".filter-app, .filter-card, .filter-logo, .filter-web" className="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-logo">Logo</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div> */}
          <div className="row" id="portfolio-wrapper">
            {/* <div class="col-sm-6 col-md-6">
                <div class="thumbnail">
                  <img src={reactjs} height="200" width="200" alt="..." />
                  <div class="caption">
                    <h3>Thumbnail label</h3>
                    <p>...</p>
                    <p>
                      <a href="#" class="btn btn-primary" role="button">
                        Button
                      </a>{" "}
                      <a href="#" class="btn btn-default" role="button">
                        Button
                      </a>
                    </p>
                  </div>
                </div>
        
            </div>
            <div class="col-sm-6 col-md-6">
                <div class="thumbnail">
                  <img src="..." alt="..." />
                  <div class="caption">
                    <h3>Thumbnail label</h3>
                    <p>...</p>
                    <p>
                      <a href="#" class="btn btn-primary" role="button">
                        Button
                      </a>{" "}
                      <a href="#" class="btn btn-default" role="button">
                        Button
                      </a>
                    </p>
                  </div>
                </div>
        
            </div> */}
            <div className="row">
              <div className="col-md-4 ">
                <div className="service-box">
                  <div className="service-text1">
                    <h3>Change How Markets Trade</h3>
                    <p>
                     
                      Help our clients through the development of cutting edge technology for trade optimisation. Define best practice.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-text1">
                    <h3>Harness Your Potential</h3>
                    <p className="fontStyle">
                     
                      We will customise your role to focus on your preferred specialisations or develop you in new areas. Do what you
                      most enjoy.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-text1">
                    <h3>Achieve Life Objectives </h3>
                    <p>
                     
                      We offer flexible working approaches to suit your needs. We will support your career objectives alongside other life goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="job">
            <div className="col-md-6">
              <div className="team-info">
                {/* <div className="img-sec">
                  <img src={reactjs} className="img-responsive" />
                </div> */}
                 <div className="service-icon1"><i className="fab fa-react fa-5x" /></div>
                <div className="fig-caption1">
                  <h3>ReactJS Developer</h3>
                  <div className="col-md-12 bannerButtons bannerButtons1"><a href="#" className="btn btn-banner btn-banner1">View Role<i className="fa fa-send" /></a>
              </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="team-info">
                {/* <div className="img-sec">
                  <img src={database} className="img-responsive" height="500px" width="500px" />
                </div> */}
                 <div className="service-icon1"><i className="fas fa-database fa-5x" /></div>
                <div className="fig-caption1">
                  <h3>Data Scientist</h3>
                  <div className="col-md-12 bannerButtons bannerButtons1"><a href="#" className="btn btn-banner btn-banner1">View Role<i className="fa fa-send" /></a>
              </div>
                </div>
              </div>
            </div>
            </div>
            {/* <div className="col-lg-3 col-md-6 portfolio-item filter-app">
              <a href>
                <img src="img/portfolio/app3.jpg" alt />
                <div className="details">
                  <h4>App 3</h4>
                  <span>Alored dono par</span>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 portfolio-item filter-card">
              <a href>
                <img src="img/portfolio/card1.jpg" alt />
                <div className="details">
                  <h4>Card 1</h4>
                  <span>Alored dono par</span>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 portfolio-item filter-card">
              <a href>
                <img src="img/portfolio/card2.jpg" alt />
                <div className="details">
                  <h4>Card 2</h4>
                  <span>Alored dono par</span>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 portfolio-item filter-web">
              <a href>
                <img src="img/portfolio/web3.jpg" alt />
                <div className="details">
                  <h4>Web 3</h4>
                  <span>Alored dono par</span>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 portfolio-item filter-card">
              <a href>
                <img src="img/portfolio/card3.jpg" alt />
                <div className="details">
                  <h4>Card 3</h4>
                  <span>Alored dono par</span>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 portfolio-item filter-app">
              <a href>
                <img src="../img/portfolio/app2.jpg" alt />
                <div className="details">
                  <h4>App 2</h4>
                  <span>Alored dono par</span>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 portfolio-item filter-logo">
              <a href>
                <img src="img/portfolio/logo1.jpg" alt />
                <div className="details">
                  <h4>Logo 1</h4>
                  <span>Alored dono par</span>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 portfolio-item filter-logo">
              <a href>
                <img src="img/portfolio/logo3.jpg" alt />
                <div className="details">
                  <h4>Logo 3</h4>
                  <span>Alored dono par</span>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 portfolio-item filter-web">
              <a href>
                <img src="img/portfolio/web1.jpg" alt />
                <div className="details">
                  <h4>Web 1</h4>
                  <span>Alored dono par</span>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 portfolio-item filter-logo">
              <a href>
                <img src="img/portfolio/logo2.jpg" alt />
                <div className="details">
                  <h4>Logo 2</h4>
                  <span>Alored dono par</span>
                </div>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
