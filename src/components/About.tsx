import React from "react";
import "../styles/About.css";

function About(): JSX.Element {
  return (
    <section className="about-section">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <div className="about-story">
          <p>
            Hi, I'm Dave, the owner of Dave's Decor. With over 15 years of
            experience in the painting and decorating industry, I take pride in
            delivering high-quality finishes for both residential and commercial
            clients. My journey began as an apprentice, and over the years, I've
            built a reputation for reliability, attention to detail, and a
            genuine passion for transforming spaces.
          </p>
          <p>
            <strong>Qualifications:</strong> City & Guilds NVQ Level 3 in
            Painting & Decorating, member of the Painting and Decorating
            Association.
          </p>
          <p>
            <strong>My Approach:</strong> I believe in honest communication,
            thorough preparation, and treating every project as if it were my
            own home. I use only premium materials and keep up-to-date with the
            latest techniques and trends.
          </p>
          <p>
            <strong>What Makes Me Different:</strong> I offer personalized
            service, flexible scheduling, and a commitment to leaving every
            client delighted with the results.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
