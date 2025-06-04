import React, { useState } from "react";

function Nav(): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <img id="logo" src="/assets/Dave's-Decor-Logo.png" alt="Dave's Logo" />
      <button
        className="nav-burger"
        aria-label="Open navigation"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="burger-bar" />
        <span className="burger-bar" />
        <span className="burger-bar" />
      </button>
      <ul className={`nav-links${open ? " open" : ""}`}>
        <li>
          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#services" onClick={() => setOpen(false)}>
            Services
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => setOpen(false)}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#reviews" onClick={() => setOpen(false)}>
            Reviews
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#quotes" onClick={() => setOpen(false)}>
            Quotes
          </a>
        </li>
        <li>
          <a href="#faq" onClick={() => setOpen(false)}>
            FAQ
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
