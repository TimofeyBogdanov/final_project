import React from "react";
import styles from "./Footer.module.css";

import invertedLogo from "../../assets/images/inverted-logo.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={invertedLogo} alt="Logo"></img>
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.info}>
          <div>г. Москва, Цветной б-р, 40</div>
          <div>+7 495 771 21 11</div>
          <div>info@skan.ru</div>
        </div>
        <div>Copyright. 2022</div>
      </div>
    </footer>
  );
}

export default Footer;