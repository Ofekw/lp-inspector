import React from "react";
import "../styles/Footer.css";
import Donate from "./Donate";

interface FooterProps {
  showDonate: boolean;
}

function Footer({ showDonate }: FooterProps) {

  return (
    <footer className="footer-container">
      {showDonate && <Donate />}
      <p>
        How much is my LP worth? by <b>Newbieshwa 🎉</b> (forked from nopantytonight) 
      </p>
      <p>
      The source code is licensed MIT.
      </p>
    </footer>
  );
}

export default Footer;
