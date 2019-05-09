import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Career from "./components/Career";
import Partner from "./components/Partner";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Banner />
        <Partner />
        <Career />
        <Team />
        <About />
        <Contact />
        <Footer />
        <Route path="/" exact component={Header} />
        <Route path="/banner" component={Banner} />
        <Route path="/career" component={Career} />
        <Route path="/partner" component={Partner} />
        <Route path="/team" component={Team} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/footer" component={Footer} />
      </div>
    </Router>
  );
}

export default App;
