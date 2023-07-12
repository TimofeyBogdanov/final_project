import React from "react";
import { Link } from "react-router-dom";
import styles from "./PageDoesntExist.module.css";

const PageDoesntExist = () => {
  return (
    <>
      <main className={styles.errorWrapper}>
        <h1 className={styles.errorText}>
          Страница не существует.
        </h1>
        <Link to={"/"} className={styles.link}>
          На главную
        </Link>
      </main>
    </>
  );
}

export default PageDoesntExist;