import { useRef } from 'react';
import GeneralDataLoader from '../general-data-loader/GeneralDataLoader';
import mapArray from '../../utils/mapArray';
import SearchSliderArrow from '../../assets/images/search-slider-arrow.png';
import styles from './SearchRangeSlider.module.css';

const SearchRangeSlider = ({ data, isLoading }) => {
  const decodedData = mapArray(data);
  const dateRef = useRef(null);
  const moveLeft = () => {
    dateRef.current.scrollLeft -= 133;

    if (window.innerWidth <= 600) {
      dateRef.current.scrollLeft -= 298;
    }
  }

  const moveRight = () => {
    dateRef.current.scrollLeft += 133
    if (window.innerWidth <= 600) {
      dateRef.current.scrollLeft += 298
    }
  }

  return (
    <div className={styles.dateSlider}>
      <button onClick={moveLeft} className={styles.arrow + " " + styles.leftArrow} type='button'><img src={SearchSliderArrow} /></button>
      <div className={styles.periodWrapper}>
        <div className={styles.periodTitles}>
          <div>Период</div>
          <div>Всего</div>
          <div>Риски</div>
        </div>
        <ul ref={dateRef} className={styles.dataList}>
          {isLoading
            ? <GeneralDataLoader />
            : decodedData.map((item, index) => {
              return (
                <li key={index} className={styles.dataItem}>
                  <div>{item.date}</div>
                  <div>{item.totalValue}</div>
                  <div>{item.riskValue}</div>
                </li>
              )
            })}
        </ul>
      </div>
      <button onClick={moveRight} className={styles.arrow + " " + styles.rightArrow} type='button'><img src={SearchSliderArrow} /></button>
    </div>
  )
}

export default SearchRangeSlider;