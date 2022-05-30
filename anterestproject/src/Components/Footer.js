import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <div className="Footer">
    <h4>&copy; 2022 IC Project</h4>
    <h4>Muntean Andra & Netedu Anemona</h4>
    <h3>Social Follow</h3>
            <a href=""
              className="youtube social">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
             <a href=""
                className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
             </a>
             <a href=""
                className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
             </a>
             <a href=""
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
             </a>
  </div>


);

export default Footer;