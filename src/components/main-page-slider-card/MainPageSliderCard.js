import styles from "./MainPageSliderCard.module.css";

const MainPageSliderCard = ({ data }) => {
  return (
    <>
      <div
        className={
          data.class === "desktop"
            ? styles.desktopCard
            : styles.mobileCard
        }
      >
        <div className={styles.cardWrapper}>
          <img src={data.icon} alt="card icon" />
          <div
            className={
              data.class === "desktop"
                ? styles.desktopContent
                : styles.mobileContent
            }
          >
            {data.text}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPageSliderCard;