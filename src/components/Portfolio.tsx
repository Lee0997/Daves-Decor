import React from "react";
import "../styles/Portfolio.css";

type Project = {
  id: string;
  category: "Residential" | "Commercial" | "Interior" | "Exterior";
  beforeImg: string;
  afterImg: string;
  caption: string;
  testimonial?: {
    client: string;
    quote: string;
  };
};

const projects: Project[] = [
  {
    id: "1",
    category: "Residential",
    beforeImg:
      process.env.PUBLIC_URL + "/assets/portfolio/residential-before.webp",
    afterImg:
      process.env.PUBLIC_URL + "/assets/portfolio/residential-after.webp",
    caption: "Living room transformation: fresh paint, trim, and accent wall.",
    testimonial: {
      client: "Sarah T.",
      quote:
        "Dave's attention to detail made our home feel brand new. Highly recommended!",
    },
  },
  {
    id: "2",
    category: "Commercial",
    beforeImg:
      process.env.PUBLIC_URL + "/assets/portfolio/commercial-before.webp",
    afterImg:
      process.env.PUBLIC_URL + "/assets/portfolio/commercial-after.webp",
    caption: "Office space: modernized with durable, professional finishes.",
    testimonial: {
      client: "GreenTech Ltd.",
      quote:
        "The team worked around our schedule and delivered outstanding results.",
    },
  },
  {
    id: "3",
    category: "Exterior",
    beforeImg:
      process.env.PUBLIC_URL + "/assets/portfolio/exterior-before.webp",
    afterImg: process.env.PUBLIC_URL + "/assets/portfolio/exterior-after.webp",
    caption: "Exterior repaint: weatherproof and vibrant curb appeal.",
    testimonial: {
      client: "Emily R.",
      quote:
        "Dave's Decor transformed our home's exterior. We couldn't be happier!",
    },
  },
  {
    id: "4",
    category: "Interior",
    beforeImg:
      process.env.PUBLIC_URL + "/assets/portfolio/interior-before.webp",
    afterImg: process.env.PUBLIC_URL + "/assets/portfolio/interior-after.webp",
    caption: "Bedroom makeover: calming tones and smooth finishes.",
    testimonial: {
      client: "Michael R.",
      quote: "The new colors and finish exceeded our expectations!",
    },
  },
];

function Portfolio(): JSX.Element {
  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="portfolio-list">
        {projects.map((project) => (
          <div className="portfolio-card" key={project.id}>
            <div className="portfolio-images">
              <div className="portfolio-image-block">
                {project.beforeImg ? (
                  <img
                    src={project.beforeImg}
                    alt="Before"
                    className="portfolio-img"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display =
                        "none";
                      (e.currentTarget.parentElement as HTMLElement).innerHTML =
                        "<div style='width:150px;height:110px;display:flex;align-items:center;justify-content:center;background:#e9ecef;color:#888;font-size:0.95rem;border-radius:7px;'>No Image</div>";
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "150px",
                      height: "110px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#e9ecef",
                      color: "#888",
                      fontSize: "0.95rem",
                      borderRadius: "7px",
                    }}
                  >
                    No Image
                  </div>
                )}
                <span className="portfolio-img-label">Before</span>
              </div>
              <div className="portfolio-image-block">
                {project.afterImg ? (
                  <img
                    src={project.afterImg}
                    alt="After"
                    className="portfolio-img"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display =
                        "none";
                      (e.currentTarget.parentElement as HTMLElement).innerHTML =
                        "<div style='width:150px;height:110px;display:flex;align-items:center;justify-content:center;background:#e9ecef;color:#888;font-size:0.95rem;border-radius:7px;'>No Image</div>";
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "150px",
                      height: "110px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#e9ecef",
                      color: "#888",
                      fontSize: "0.95rem",
                      borderRadius: "7px",
                    }}
                  >
                    No Image
                  </div>
                )}
                <span className="portfolio-img-label">After</span>
              </div>
            </div>
            <div className="portfolio-caption">
              <span className="portfolio-category">{project.category}</span>
              <p>{project.caption}</p>
            </div>
            {project.testimonial && (
              <div className="portfolio-testimonial">
                <blockquote>
                  “{project.testimonial.quote}”
                  <footer>- {project.testimonial.client}</footer>
                </blockquote>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
