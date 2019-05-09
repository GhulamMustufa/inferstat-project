import React, { Component } from "react";
import thomas from "../img/thomas.jpg";
import william from "../img/william.jpg";
import joshua from "../img/joshua.jpg";

export class Team extends Component {
  render() {
    return (
      <div id="about" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="page-title text-center">
              <h1>Meet Our Team</h1>
              <p className="fontStyle">
                We have a talented team of individual with the aim to provide
                you the best solution.{" "}
              </p>
              <hr className="pg-titl-bdr-btm" />
            </div>
            <div className="autoplay">
              <div className="col-md-4">
                <div className="team-info">
                  <div className="img-sec">
                    <img src={thomas} className="img-responsive" />
                  </div>
                  <div className="fig-caption">
                    <h3>Thomas Oliver</h3>
                    <p className="fontStyle">CEO</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-info">
                  <div className="img-sec">
                    <img src={william} className="img-responsive" />
                  </div>
                  <div className="fig-caption">
                    <h3>William Everett</h3>
                    <p className="fontStyle">Digital Content Manager</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-info">
                  <div className="img-sec">
                    <img src={joshua} className="img-responsive" />
                  </div>
                  <div className="fig-caption">
                    <h3>Joshua Mason</h3>
                    <p className="fontStyle">
                      Head of Development and Operations
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
}

export default Team;
