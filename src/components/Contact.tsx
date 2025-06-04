import React, { useState } from "react";
import "../styles/Contact.css";

function Contact(): JSX.Element {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle sending the form data
    setSubmitted(true);
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={form.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
          />
          <button type="submit" className="contact-submit">
            Send Message
          </button>
          {submitted && (
            <div className="contact-success">
              Thank you! I'll be in touch soon.
            </div>
          )}
        </form>
        <div className="contact-details">
          <div>
            <strong>Phone:</strong> <a href="tel:0123456789">01234 567 890</a>
          </div>
          <div>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@davesdecor.com">info@davesdecor.com</a>
          </div>
          <div className="contact-socials">
            <a
              href="https://facebook.com/davesdecor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com/davesdecor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
          <div className="contact-map">
            {/* Replace with your map embed or image */}
            <iframe
              title="Service Area"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.15,51.5,-0.1,51.52&layer=mapnik"
              width="100%"
              height="180"
              style={{ border: 0, marginTop: "1rem", borderRadius: "8px" }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
