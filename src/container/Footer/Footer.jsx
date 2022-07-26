import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import "./Footer.css";
import { FooterOverlay, Newsletter } from "../../components";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
      </div>
      <div className="app__footer-links_logo">
        <h1 className="headtext__comrant">Gericht</h1>
        <FiInstagram />
        <FiFacebook />
        <FiTwitter />
      </div>
      <div className="app__footer-links_work"></div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2021 Gericht. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
