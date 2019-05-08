import React, { Component } from 'react'

export class Banner extends Component {
  render() {
    return (
        <div id="banner" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="jumbotron">
              <h1 className="small">Automating the final step of trading decisions</h1>
              <p className="big">InferStat offers predictive research tools</p>
              <div className="col-md-12 bannerButtons"><a href="#" className="btn btn-banner">About Us<i className="fa fa-send" /></a>
              <a href="#" className="btn btn-banner">Beta SignUp<i className="fa fa-send" /></a></div>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner
