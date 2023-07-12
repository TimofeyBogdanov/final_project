import React from "react";
import { Link } from "react-router-dom";
import TariffCard from "../../components/tariff-card/TariffCard";
import MainPageSlider from "../../components/main-page-slider/MainPageSlider";
import MainPageImage from "../../assets/images/main-page-image.svg";
import MainAdvertImageFirst from "../../assets/images/main-advert-image1.svg";
import MainAdvertImageSecond from "../../assets/images/main-advert-image2.svg";
import Bulb from "../../assets/images/bulb.svg";
import Target from "../../assets/images/target.svg";
import Laptop from "../../assets/images/laptop.svg";
import styles from "./MainPage.module.css";

const MainPage = ({ isAuth }) => {
  return (
    <>
      <main className={styles.mainSection}>
        <div className={styles.mainInfo}>
          <div className={styles.mainContent}>
            <h1 className={styles.mainTitle}>
              Cервис по поиску публикаций <br /> о компании <br /> по его ИНН
            </h1>
            <div className={styles.mainDescription}>
              Комплексный анализ публикаций, получение данных в формате PDF на
              электронную почту.
            </div>
            {isAuth ? (<nav className={styles.nav}>
              <Link className={styles.requestButton} to={"/search"}>
                Запросить данные
              </Link>
            </nav>) : ''}
          </div>
          <div className={styles.mainImage}>
            <img src={MainPageImage} alt="main page image" />
          </div>
        </div>
        <div className={styles.sliderWrapper}>
          <div>Почему именно мы</div>
          <div>
            <MainPageSlider />
          </div>
        </div>
        <div className={styles.advertImageWrapper}>
          <div className={styles.advertImageFirst}>
            <img src={MainAdvertImageFirst} alt="main page advert image" />
          </div>
          <div className={styles.advertImageSecond}>
            <img src={MainAdvertImageSecond} alt="main page advert image" />
          </div>
        </div>
        <div className={styles.tariffTitle}>Наши тарифы</div>
        <div className={styles.tariffWrapper}>
          <TariffCard
            title={["Beginner", "Для небольшого исследования", { icon: Bulb }]}
            prices={[
              "799 ₽",
              "1 200 ₽",
              "или 150 ₽/мес. при рассрочке на 24 мес.",
            ]}
            details={[
              "Безлимитная история запросов",
              "Безопасная сделка",
              "Поддержка 24/7",
            ]}
            isPurchased={true}
            color={{
              primaryColor: "rgba(255, 182, 79, 1)",
              secondaryColor: "rgba(0, 0, 0, 1)",
            }}
          />
          <TariffCard
            title={["Pro", "Для HR и фрилансеров", { icon: Target }]}
            prices={[
              "1 299 ₽",
              "2 600 ₽",
              "или 279 ₽/мес. при рассрочке на 24 мес.",
            ]}
            details={[
              "Все пункты тарифа Beginner",
              "Экспорт истории",
              "Рекомендации по приоритетам",
            ]}
            isPurchased={false}
            color={{
              primaryColor: "rgba(124, 227, 225, 1)",
              secondaryColor: "rgba(0, 0, 0, 1)",
            }}
          />
          <TariffCard
            title={["Business", "Для корпоративных клиентов", { icon: Laptop }]}
            prices={["2 379 ₽", "3 700 ₽", ""]}
            details={[
              "Все пункты тарифа Pro",
              "Безлимитное количество запросов",
              "Приоритетная поддержка",
            ]}
            isPurchased={false}
            color={{
              primaryColor: "rgba(0, 0, 0, 1)",
              secondaryColor: "rgba(255, 255, 255, 1)",
            }}
          />
        </div>
      </main>
    </>
  );
}

export default MainPage;