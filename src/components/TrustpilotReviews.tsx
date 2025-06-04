import React from "react";
import "../styles/TrustpilotReviews.css";

const reviews = [
  {
    name: "Sarah Thompson",
    photo: process.env.PUBLIC_URL + "/assets/reviews/sarah.jpg",
    quote:
      "Dave's Decor transformed our living room! The attention to detail was incredible and the team was so friendly.",
  },
  {
    name: "Michael Richards",
    photo: process.env.PUBLIC_URL + "/assets/reviews/michael.jpg",
    quote:
      "Professional, punctual, and the results speak for themselves. Highly recommended for any painting job.",
  },
  {
    name: "GreenTech Ltd.",
    photo: process.env.PUBLIC_URL + "/assets/reviews/greentech.jpg",
    quote:
      "Our office looks fantastic. Dave worked around our schedule and delivered on time. Will use again!",
  },
];

function TrustpilotReviews(): JSX.Element {
  return (
    <section className="trustpilot-section">
      <h2 className="trustpilot-title">What My Clients Say</h2>
      <div className="trustpilot-list">
        {reviews.map((review, idx) => (
          <div className="trustpilot-card" key={idx}>
            <img
              src={review.photo}
              alt={review.name}
              className="trustpilot-photo"
              loading="lazy"
            />
            <blockquote className="trustpilot-quote">
              “{review.quote}”
            </blockquote>
            <div className="trustpilot-name">{review.name}</div>
            <div
              style={{
                color: "#555",
                fontSize: "0.97rem",
                marginTop: "0.5rem",
                textAlign: "center",
              }}
            >
              {review.quote}
            </div>
          </div>
        ))}
      </div>
      <div className="trustpilot-links">
        <a
          href="https://www.trustpilot.com/review/example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          See more on Trustpilot
        </a>
        <span> | </span>
        <a
          href="https://www.google.com/maps/place/Dave's+Decor/reviews"
          target="_blank"
          rel="noopener noreferrer"
        >
          See more on Google Reviews
        </a>
      </div>
    </section>
  );
}

export default TrustpilotReviews;
