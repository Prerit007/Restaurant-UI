import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import "./Footer.css";
import { FooterOverlay, Newsletter } from "../../components";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <FiInstagram />
    <FiFacebook />
    <FiTwitter />
  </div>
);

export default Footer;
