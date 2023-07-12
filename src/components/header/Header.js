import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BurgerMenu from "../burger-menu/BurgerMenu.js";
import Loader from "../loader/Loader.js";
import Logo from "../../assets/images/logo.svg";
import invertedLogo from "../../assets/images/inverted-logo.svg";
import Avatar from "../../assets/images/ava.png";
import { accountInfo } from "../../api/authorizationApi.js";
import { authControl } from "../../utils/authorizationControl.js";
import authDrop from "../../utils/authorizationDrop.js";
import store from "../../redux/store.js";

import styles from "./Header.module.css";

const Header = ({ isAuth, setIsAuth }) => {
  const [companiesUsed, setCompaniesUsed] = useState(localStorage.getItem("CompaniesUsed"));
  const [companiesLimit, setCompaniesLimit] = useState(localStorage.getItem("CompaniesLimit"));
  const [userName, setUserName] = useState(localStorage.getItem("User"));
  const [userAvatar] = useState(Avatar);
  const [menuStatus, setMenuStatus] = useState(store.getState().menuStatus);
  const [token, setToken] = useState(localStorage.getItem("TOKEN"));

  const location = useLocation();
  const navigate = useNavigate();
  const logoRef = useRef(null);

  useEffect(() => {
    setToken(localStorage.getItem("TOKEN"));
    setUserName(localStorage.getItem("User"));
    authControl(localStorage.getItem("TOKEN"), localStorage.getItem("EXPIRE"), setIsAuth);

    if (isAuth) {
      getInfoData(token);
    }
    setUserName(localStorage.getItem("User"));
  }, [isAuth, location]);

  async function getInfoData() {
    await accountInfo(token)
      .then((res) => {
        localStorage.setItem("CompaniesUsed", res.usedCompanyCount);
        localStorage.setItem("CompaniesLimit", res.companyLimit);
        setCompaniesUsed(res.usedCompanyCount);
        setCompaniesLimit(res.companyLimit);
      })
      .catch((e) => {
        console.log("Receiving account data error", e);
      });
  }

  const handleExit = () => {
    authDrop(setIsAuth, navigate);
  }

  const redirectToMainPage = () => {
    navigate("/");
  }

  store.subscribe(() => {
    setMenuStatus(store.getState().menuStatus);
  });

  return (
    <>
      <header className={menuStatus ? styles.headerInverted : styles.header}>
        <Link to={"/"} className={styles.logoLink}>
          <img
            ref={logoRef}
            className={styles.logo}
            src={menuStatus ? invertedLogo : Logo}
            alt="Logo"
          ></img>
        </Link>
        <div>
          <nav className={styles.nav}>
            <button onClick={redirectToMainPage} className={styles.link}>
              Главная
            </button>
            <button className={styles.link}>Тарифы</button>
            <button className={styles.link}>FAQ</button>
          </nav>
        </div>
        {!isAuth ? (
          <div>
            <div className={styles.auth}>
              <Link className={styles.register} to={"#"}>
                Зарегистрироваться
              </Link>
              <div className={styles.separator}></div>
              <Link className={styles.enter} to={"/auth"}>
                Войти
              </Link>
            </div>
            <div className={styles.burger}>
              <BurgerMenu />
            </div>
          </div>
        ) : (
          <div className={styles.authDataWrapper}>
            {companiesLimit ? (
              <div
                className={
                  menuStatus ? styles.requestsInfoHidden : styles.requestsInfo
                }
              >
                <div className={styles.info}>Использовано компаний </div>
                <div className={styles.data}>{companiesUsed}</div>
                <div className={styles.info}>Лимит по компаниям</div>
                <div className={styles.data}>{companiesLimit}</div>
              </div>
            ) : (
              <div className={styles.loaderContainer}>
                <Loader />
              </div>
            )}
            <div className={styles.profile}>
              <div className={styles.name}>
                <div>{userName}</div>
                <button onClick={handleExit} className={styles.exit}>
                  Выйти
                </button>
              </div>
              <div className={styles.avatar}>
                <img
                  className={styles.avatarImage}
                  src={userAvatar}
                  alt="Avatar"
                ></img>
              </div>
            </div>
            <div className={styles.burger}>
              <BurgerMenu />
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;