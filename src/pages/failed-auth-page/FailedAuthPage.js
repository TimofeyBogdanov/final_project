import React from "react";
import { Link } from "react-router-dom";
import styles from "./FailedAuthPage.module.css";

const FailedAuthPage = () => {
  return (
    <>
      <main className={styles.errorWrapper}>
        <h1 className={styles.errorText}>
          Неверный логин или пароль. <br /> Попробуйте войти снова, вернувшись на страницу авторизации.
        </h1>
        <Link to={"/auth"} className={styles.link}>
          Войти
        </Link>
      </main>
    </>
  );
}

export default FailedAuthPage;