import React from "react";
import "../styles/Quotes.css";

function Quotes(): JSX.Element {
  return (
    <section className="quotes-section">
      <h2 className="quotes-title">Free Quotes & Pricing</h2>
      <div className="quotes-content">
        <p>
          <strong>Free Quotes Available:</strong> Get in touch for a
          no-obligation, transparent quote tailored to your project.
        </p>
        <p>
          <strong>General Pricing Guidelines:</strong>
          <ul>
            <li>
              Standard room repaint (walls & ceiling): <b>from £180</b>
            </li>
            <li>
              Exterior house painting: <b>from £1,200</b>
            </li>
            <li>
              Wallpaper hanging: <b>from £120 per room</b>
            </li>
            <li>
              Decorative finishes: <b>quoted individually</b>
            </li>
          </ul>
        </p>
        <p>
          Every project is unique. I believe in transparency and will always
          provide a clear, detailed quote before any work begins. No hidden
          fees, no pressure.
        </p>
        <a href="#contact" className="quotes-cta-btn">
          Request Your Free Quote
        </a>
      </div>
    </section>
  );
}

export default Quotes;
