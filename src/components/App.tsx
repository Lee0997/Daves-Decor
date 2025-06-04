import Nav from "./Nav";
import Services from "./Services";
import Carousel from "./Carousel";
import Portfolio from "./Portfolio";
import TrustpilotReviews from "./TrustpilotReviews";
import About from "./About";
import Contact from "./Contact";
import Quotes from "./Quotes";
import FAQ from "./FAQ";
import React from "react";

function App(): JSX.Element {
  return (
    <div>
      <Nav />
      {/* Add a spacer div to offset the fixed nav height */}
      <div style={{ height: "70px" }} />
      <div id="home" />
      <Carousel
        images={[
          {
            src: process.env.PUBLIC_URL + "/assets/example1.webp",
            alt: "Interior Painting Example",
          },
          {
            src: process.env.PUBLIC_URL + "/assets/example2.webp",
            alt: "Exterior Painting Example",
          },
          {
            src: process.env.PUBLIC_URL + "/assets/example3.webp",
            alt: "Wallpaper Hanging Example",
          },
        ]}
      />
      <div id="services" />
      <Services />
      <div id="portfolio" />
      <Portfolio />
      <div id="reviews" />
      <TrustpilotReviews />
      <div id="about" />
      <About />
      <div id="quotes" />
      <Quotes />
      <div id="faq" />
      <FAQ />
      <div id="contact" />
      <Contact />
    </div>
  );
}

export default App;
