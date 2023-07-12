import React, { useContext, useEffect, useState } from 'react';
import SearchResultCard from '../../components/search-result-card/SearchResultCard';
import SearchRangeSlider from '../../components/search-range-slider/SearchRangeSlider';
import GeneralDataLoader from '../../components/general-data-loader/GeneralDataLoader';
import ResultContext from '../../context/createContext';
import { getDetailData } from '../../api/dataApi';
import mapArray from '../../utils/mapArray';
import sumTotalValues from '../../utils/sumTotalValues';
import SearchResultPageImg from '../../assets/images/result-page-img.svg';
import styles from './SearchResultPage.module.css';

const SearchResultPage = () => {
  const context = useContext(ResultContext);
  const [countResults, setCountResults] = useState(10);
  const resultGeneralData = context.generalData;
  const resultData = context.data;
  const detailsData = context.detailsData;
  const setDetailsData = context.setDetailsData;

  useEffect(() => {
    if (resultData && (+resultData.data.items.length) > 0) {
      const arrForRequest = [];

      if ((+resultData.data.items.length) < countResults) {
        for (let i = 0; i < (+resultData.data.items.length); i++) {
          arrForRequest.push(resultData.data.items[i].encodedId)
        }
      } else {
        for (let i = 0; i < countResults; i++) {
          arrForRequest.push(resultData.data.items[i].encodedId)
        }
      }
      const req = async () => {
        setDetailsData(await getDetailData(arrForRequest))
      }
      req();
    }
  }, [resultData, countResults]);

  const handleResults = () => {
    const countMoreResults = 10;
    if ((countResults + countMoreResults) < (+resultData.data.items.length)) {
      setCountResults(countResults + countMoreResults)
    }

    const docsRest = (+resultData.data.items.length) - countResults;

    if (docsRest < countMoreResults) {
      setCountResults(countResults + docsRest)
    }
  }

  return (
    <main className={styles.resultPage}>
      <div className={styles.waitResultWrapper}>
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>Ищем. Скоро будут результаты</h1>
          <p className={styles.text}>Поиск может занять некоторое время, просим сохранять терпение.</p>
        </div>
        <img className={styles.resultImg} src={SearchResultPageImg} alt="wait result" />
      </div>
      <div className={styles.summaryBlock}>
        <h2 className={styles.subtitle}>Общая сводка</h2>
        <p className={styles.dataSum}>Найдено
          {!resultGeneralData
            ? ` 0`
            : ` ${sumTotalValues(mapArray(resultGeneralData.data.data))}`} вариантов
        </p>
        {<SearchRangeSlider isLoading={!resultGeneralData} data={!resultGeneralData
          ? []
          : resultGeneralData.data.data} />}
      </div>
      <div>
        <h2 className={styles.subtitle}>Список документов</h2>
        <ul className={styles.resultList}>
          {!resultData || +resultData.data.items.length === 0
            ? <p></p>
            : !detailsData
              ? <GeneralDataLoader />
              : detailsData.data.map(item => <SearchResultCard key={item.ok.id} data={item.ok} />)}
        </ul>
        <button onClick={handleResults} className={resultData && ((countResults) >= +resultData.data.items.length) ? styles.loadButtonHidden : styles.loadButton}>Показать больше</button>
      </div>
    </main>
  )
}

export default SearchResultPage;