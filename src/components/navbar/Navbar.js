import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = (props) => {
  const navigation = useNavigate();

  function redirectToMainPage() {
    props.handler();
    navigation("/");
  }

  return (
    <>
      <button onClick={redirectToMainPage} className={styles.link}>
        Главная
      </button>
      <button className={styles.link}>Тарифы</button>
      <button className={styles.link}>FAQ</button>
    </>
  );
}

export default Navbar;