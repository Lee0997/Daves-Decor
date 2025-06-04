import React from "react";
import "../styles/Services.css";

const services = [
  {
    title: "Interior Painting",
    description:
      "Walls, ceilings, trims, and more for a flawless indoor finish.",
  },
  {
    title: "Exterior Painting",
    description:
      "Durable, weather-resistant painting for your home's exterior.",
  },
  {
    title: "Wallpaper Hanging",
    description: "Professional installation of all types of wallpaper.",
  },
  {
    title: "Decorative Finishes",
    description: "Faux finishes, murals, and custom decorative painting.",
  },
  {
    title: "Surface Preparation",
    description:
      "Filling, sanding, priming, and prepping surfaces for lasting results.",
  },
  {
    title: "Commercial & Residential",
    description: "Expert painting for both homes and businesses.",
  },
];

function Services(): JSX.Element {
  return (
    <section className="services-section">
      <h2 className="services-title">My Services</h2>
      <div className="services-content-wrapper">
        <ul className="services-list">
          {services.map((service) => (
            <li className="service-item" key={service.title}>
              <strong className="service-item-title">{service.title}</strong>
              <div className="service-item-desc">{service.description}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="services-additional">
        <strong>Additional Services:</strong> Colour consultation and material
        sourcing available on request.
      </div>
    </section>
  );
}

export default Services;
