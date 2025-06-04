import React, { useState } from "react";
import "../styles/FAQ.css";

const faqs = [
  {
    question: "Do you supply paint or do I need to?",
    answer:
      "I can supply all paints and materials, or use your preferred brands if you wish. I’m happy to discuss options and provide recommendations.",
  },
  {
    question: "How long will the job take?",
    answer:
      "Every project is unique, but I’ll always give you a clear timescale before starting. Most standard rooms are completed in 1-2 days.",
  },
  {
    question: "Do you work weekends?",
    answer:
      "Yes, I offer flexible scheduling and can work weekends or evenings to suit your needs.",
  },
  {
    question: "Are you insured?",
    answer: "Absolutely. I am fully insured for your peace of mind.",
  },
];

function FAQ(): JSX.Element {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqs.map((faq, idx) => (
          <li className="faq-item" key={faq.question}>
            <button
              className="faq-question"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              aria-expanded={openIdx === idx}
            >
              {faq.question}
              <span className="faq-toggle">{openIdx === idx ? "−" : "+"}</span>
            </button>
            {openIdx === idx && <div className="faq-answer">{faq.answer}</div>}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FAQ;
