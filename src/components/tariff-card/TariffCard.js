import React from "react";
import { Link } from "react-router-dom";
import CheckMark from "../../assets/images/check-mark.svg";
import styles from "./TariffCard.module.css";

const TariffCard = (props) => {
  return (
    <div
      style={
        props.isPurchased
          ? {
            border: `1px solid ${props.color.primaryColor}`,
          }
          : { border: "none" }
      }
      className={styles.tariffCard}
    >
      <div
        style={{
          backgroundColor: props.color.primaryColor,
          color: props.color.secondaryColor,
        }}
        className={styles.tariffHeader}
      >
        <div className={styles.tariffInfo}>
          <header>{props.title[0]}</header>
          <div>{props.title[1]}</div>
        </div>
        <div className={styles.tariffImg}>
          <img src={props.title[2].icon} alt="tariff image" />
        </div>
      </div>
      <div className={styles.currentTariffWrapper}>
        {props.isPurchased ? (
          <div className={styles.currentTariffLabel}>Текущий тариф</div>
        ) : (
          <div className={styles.emptyLabel}></div>
        )}
      </div>
      <div className={styles.prices}>
        <div>{props.prices[0]}</div>
        <div>{props.prices[1]}</div>
      </div>
      <div>
        {props.prices[2] ? (
          <div className={styles.creditPrice}>{props.prices[2]}</div>
        ) : (
          <div className={styles.emptyCreditLabel}></div>
        )}
      </div>
      <div className={styles.detailsTitle}>В тариф входит:</div>
      <div className={styles.detailsWrapper}>
        <div className={styles.detailsText}>
          <img src={CheckMark} alt="check mark" />
          {props.details[0]}
        </div>
        <div className={styles.detailsText}>
          <img src={CheckMark} alt="check mark" />
          {props.details[1]}
        </div>
        <div className={styles.detailsText}>
          <img src={CheckMark} alt="check mark" />
          {props.details[2]}
        </div>
      </div>
      {props.isPurchased ? (
        <div className={styles.linkToAccount}>
          <Link to={"#"}>Перейти в личный кабинет</Link>
        </div>
      ) : (
        <div className={styles.aboutTariff}>
          <Link to={"#"}>Подробнее</Link>
        </div>
      )}
    </div>
  );
}

export default TariffCard;