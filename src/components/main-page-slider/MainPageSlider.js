import React, { useState, useEffect } from "react";
import LeftArrow from "../../assets/images/left-arrow.svg";
import RightArrow from "../../assets/images/right-arrow.svg";
import styles from "./MainPageSlider.module.css";
import { ADVERTBLOCK } from "../../utils/constants";
import MainPageSliderCard from "../main-page-slider-card/MainPageSliderCard";

const MainPageSlider = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [advertData, setAdvertData] = useState(ADVERTBLOCK.slice(currIndex, currIndex + 3));
  const [render, setRender] = useState(false);

  const handleRight = () => {
    const card = advertData.shift();
    advertData.push(card);
    setAdvertData(advertData);
    setRender(!render);
  }

  function handleLeft() {
    const card = advertData.pop();
    advertData.unshift(card);
    setAdvertData(advertData);
    setRender(!render);
  }

  useEffect(() => {
    setCurrIndex(currIndex);
  }, [currIndex]);

  return (
    <>
      <div className={styles.slider}>
        <button onClick={handleLeft} className={styles.button}>
          <img src={LeftArrow} alt="left arrow" />
        </button>
        <div className={styles.sliderDesktopWrapper}>
          {advertData.map((item) => {
            return (
              <div key={item.id}>
                <MainPageSliderCard
                  data={{
                    icon: item.icon,
                    text: item.text,
                    class: "desktop",
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.sliderMobileWrapper}>
          {
            <MainPageSliderCard
              data={{
                icon: advertData[currIndex].icon,
                text: advertData[currIndex].text,
                class: "mobile",
              }}
            />
          }
        </div>
        <button onClick={handleRight} className={styles.button}>
          <img src={RightArrow} alt="right arrow" />
        </button>
      </div>
    </>
  );
}

export default MainPageSlider;