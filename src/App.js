import React from "react";
import Navbar from "./portfolio/Navbar";
import Home from "./portfolio/Home";
import SocialLinks from "./portfolio/SocialLinks";
import About from "./portfolio/About";
import Portfolio from "./portfolio/Portfolio";
import Experiance from "./portfolio/Experiance";
import Contact from "./portfolio/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experiance />
      <Contact />

      <SocialLinks />
    </>
  );
}

export default App;
