import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authDrop from "../../utils/authorizationDrop.js";
import Navbar from "../navbar/Navbar.js";
import store from "../../redux/store.js";
import styles from "./BurgerMenu.module.css";

const BurgerMenu = () => {
  const [menuStatus, setMenuStatus] = useState(store.getState().menuStatus);
  const [authStatus, setAuthStatus] = useState(localStorage.getItem("AuthStatus"));

  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleBurgerMenu = () => {
    store.dispatch({ type: "CHANGE_MENU_STATUS" });
    setMenuStatus(!menuStatus);
  }

  const enterHandler = () => {
    handleBurgerMenu();
    navigate("/auth");
  }

  const exitHandler = () => {
    authDrop(setAuthStatus, navigate);
    handleBurgerMenu();
  }

  return (
    <>
      <div
        className={menuStatus ? styles.menuButtonOpen : styles.menuButton}
        onClick={handleBurgerMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div
        ref={menuRef}
        className={
          menuStatus ? styles.mobileMenuVisible : styles.mobileMenuHidden
        }
      >
        <nav className={styles.navMobile}>
          <Navbar handler={handleBurgerMenu} />
        </nav>
        <div className={styles.mobileAuth}>
          <Link to={"/"} className={styles.mobileRegister}>
            Зарегистрироваться
          </Link>
          {authStatus === "false" ? (
            <button onClick={enterHandler} className={styles.mobileEnter}>
              Войти
            </button>
          ) : (
            <button onClick={exitHandler} className={styles.mobileExit}>
              Выйти
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default BurgerMenu;