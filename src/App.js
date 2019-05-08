import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Cta from "./components/Cta";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Cta2 from "./components/Cta2";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Banner />
      
        <Service />
        <Portfolio />
        <Team />
      
        <Contact />
        <Footer />
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        <Route path="/" exact component={Header} />
        <Route path="/banner" component={Banner} />
        <Route path="/cta" component={Cta} />
        <Route path="/service" component={Service} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/team" component={Team} />
        <Route path="/cta2" component={Cta2} />
        <Route path="/contact" component={Contact} />
        <Route path="/footer" component={Footer} />
      </div>
    </Router>
  );
}

export default App;
