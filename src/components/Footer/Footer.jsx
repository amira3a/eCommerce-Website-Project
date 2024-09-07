import React, { useState } from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

 
  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (validateEmail(email)) {
      setError(""); 
      alert("Subscribed successfully!");
      
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <div className={style.footer}>
      <div className={style.footerTop}>
        <div className={style.footerLogo}>
          <h3>Funiro.</h3>
          <p className={style.footerAdd}>
            400 University Drive Suite 200 Coral Gables,
            <br /> FL 33134 USA
          </p>
        </div>
        <ul className={style.footerLinks}>
          <h3>Links</h3>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" onClick={handleLinkClick}>
              Shop
            </Link>
          </li>
          <li>About</li>
          <li>
            <Link to="/contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
        </ul>
        <ul className={style.footerLinks}>
          <h3>Help</h3>
          <li>Payment Options</li>
          <li>Returns</li>
          <li>Privacy Policies</li>
        </ul>
        <div className={style.newsletter}>
          <h3>Newsletter</h3>
          <form className={style.form} onSubmit={handleSubmit}>
            <input
              className={style.input}
              type="email"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className={style.sub} type="submit">
              SUBSCRIBE
            </button>
            {error && <p className={style.error}>{error}</p>}
          </form>
        </div>
      </div>
      <div className={style.footerCopyright}>
        <hr />
        <p>2023 furino. All rights reserved</p>
      </div>
    </div>
  );
};
