import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { logIn } from "../../api/authorizationApi";
import { authCheck } from "../../utils/authorizationControl";
import AuthPageImage from "../../assets/images/auth-page-image.svg";
import Lock from "../../assets/images/lock.svg";
import Google from "../../assets/images/google.svg";
import Facebook from "../../assets/images/facebook.svg";
import Yandex from "../../assets/images/yandex.svg";
import styles from "./AuthPage.module.css";

const AuthPage = ({ isAuth, setIsAuth }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAuth = () => {
    localStorage.setItem("User", login);
    logIn(login, password).then(() => {
      return authCheck(
        localStorage.getItem("TOKEN"),
        localStorage.getItem("EXPIRE"),
        setIsAuth,
        navigate
      );
    });
    setLogin("");
    setPassword("");
  }

  return (
    <main>
      <Container>
        <div className={styles.formWrapper}>
          <div className={styles.auth}>
              <h1>
                Для оформление подписки <br /> на тариф, необходимо <br /> авторизоваться.
              </h1>
            <img
              className={styles.authPageImage}
              src={AuthPageImage}
              alt="auth page image"
            />
          </div>
          <div className={styles.loginWrapper}>
            <div className={styles.loginFormWrapper}>
              <form>
                <img className={styles.lock} src={Lock} alt="lock image" />
                <div className={styles.loginHeader}>
                  <Button className={styles.login}>Войти</Button>
                  <Button className={styles.signup}>
                    Зарегистрироваться
                  </Button>
                </div>
                <div className={styles.inputFormWrapper}>
                  <label>
                    Логин или номер телефона:
                    <input
                      type="text"
                      placeholder=""
                      required
                      value={login}
                      onChange={(e) => {
                        setLogin(e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className={styles.inputFormWrapper}>
                  <label>
                    Пароль:
                    <input
                      type="password"
                      placeholder=""
                      required
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </label>
                </div>
                <Button disabled={!(login && password)} onClick={handleAuth} className={styles.submitButton}>
                  Войти
                </Button>
                <div>
                  <a href="#" className={styles.restorePassword}>
                    Восстановить пароль
                  </a>
                  <label style={{ color: '#949494' }}>Войти через:</label>
                  <div className={styles.loginImageWrapper}>
                    <img
                      src={Google}
                      alt="Geogle"
                    />
                    <img
                      src={Facebook}
                      alt="facebook"
                    />
                    <img
                      src={Yandex}
                      alt="yandex"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default AuthPage;