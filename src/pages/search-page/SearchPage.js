import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getGeneralData, getData, getDetailData } from "../../api/dataApi";
import validateInn from "../../utils/validateInn";
import ResultContext from "../../context/createContext";
import GroupImage from "../../assets/images/search-group-image.svg";
import FolderImage from "../../assets/images/search-folder-image.svg";
import DocumentImage from "../../assets/images/search-document-image.svg";
import styles from "./SearchPage.module.css";

const SearchPage = () => {
  const navigate = useNavigate();
  const context = useContext(ResultContext);

  const [searchData, setSearchData] = useState({
    inn: "",
    completeness: false,
    businessContext: false,
    mainRole: false,
    tonality: "any",
    riskFactors: false,
    technicalNews: false,
    announcements: false,
    newsDigests: false,
    documentCount: "",
    startDate: "",
    endDate: "",
  });

  const [validInn, setValidInn] = useState({});

  const handleInput = (event) => {
    const { name, value, type, checked } = event.target;
    setSearchData({
      ...searchData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSearch = async () => {
    navigate('/result')
    context.setGeneralData(await getGeneralData(searchData))
    context.setData(await getData(searchData))
  };

  useEffect(() => {
    setValidInn(validateInn(searchData.inn))
  }, [searchData.inn])

  const isFormValid = () => {
    return (
      validInn.errorStatus &&
      (+searchData.documentCount > 0 && +searchData.documentCount <= 1000) &&
      searchData.startDate.length > 0 &&
      searchData.endDate.length > 0 &&
      Date.parse(searchData.startDate) < Date.parse(searchData.endDate)
    );
  };

  return (
    <main className={styles.searchPage}>
      <div className={styles.searchWrapper}>
        <h1 className={styles.title}>
          НАЙДИТЕ НЕОБХОДИМЫЕ <br /> ДАННЫЕ В ПАРУ КЛИКОВ.
        </h1>
        <p className={styles.text}>
          Задайте параметры поиска. Чем больше заполните, тем точнее поиск
        </p>
        <div className={styles.searchContent}>
          <form className={styles.form}>
            <div className={styles.column}>
              <div className={styles.left}>
                <label htmlFor="inn">
                  ИНН компании <span className={styles.star}>*</span>
                </label>
                <input
                  type="text"
                  id="inn"
                  name="inn"
                  value={searchData.inn}
                  onChange={handleInput}
                  required
                  className={
                    !validInn.errorStatus && (searchData.inn.length !== 0) ?
                      styles.errorInput :
                      styles.leftInput}
                  placeholder="10 цифр"
                />
                <span className={styles.error}>{validInn.errorElement}</span>
                <label htmlFor="tonality" className={styles.label}>
                  Тональность
                </label>
                <select
                  id="tonality"
                  name="tonality"
                  value={searchData.tonality}
                  onChange={handleInput}
                  required
                  className={styles.select}
                >
                  <option value="any">Любая</option>
                  <option value="positive">Позитивная</option>
                  <option value="negative">Негативная</option>
                </select>
                <label htmlFor="documentCount">
                  Количество документов в выдаче <span className={styles.star}>*</span>
                </label>
                <input
                  type="number"
                  id="documentCount"
                  name="documentCount"
                  value={searchData.documentCount < 0 ? 0 : searchData.documentCount}
                  onChange={handleInput}
                  required
                  className={(searchData.documentCount > 1000) ?
                    styles.errorInput :
                    styles.leftInput}
                  placeholder="1 до 1000"
                />
                <h1>Диапазон поиска <span className={styles.star}>*</span></h1>
                <div className={styles.data}>
                  <input
                    placeholder="Дата начала"
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={searchData.startDate}
                    onChange={handleInput}
                    required
                    className={styles.leftInput}
                  />
                  <div className={styles.dateSeparator}></div>
                  <input
                    placeholder="Дата конца"
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={searchData.endDate}
                    onChange={handleInput}
                    required
                    className={styles.leftInput}
                  />
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.right}>
                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    id="completeness"
                    name="completeness"
                    checked={searchData.completeness}
                    onChange={handleInput}
                    className={styles.checkbox}
                  />
                  <label htmlFor="completeness" className={styles.label}>
                    Признак максимальной полноты
                  </label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    id="businessContext"
                    name="businessContext"
                    checked={searchData.businessContext}
                    onChange={handleInput}
                    className={styles.checkbox}
                  />
                  <label htmlFor="businessContext" className={styles.label}>
                    Упоминания в бизнес-контексте
                  </label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    id="mainRole"
                    name="mainRole"
                    checked={searchData.mainRole}
                    onChange={handleInput}
                    className={styles.checkbox}
                  />
                  <label htmlFor="mainRole" className={styles.label}>
                    Главная роль в публикации
                  </label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    id="riskFactors"
                    name="riskFactors"
                    checked={searchData.riskFactors}
                    onChange={handleInput}
                    className={styles.checkbox}
                  />
                  <label htmlFor="riskFactors" className={styles.label}>
                    Публикации только c риск-факторами
                  </label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    id="technicalNews"
                    name="technicalNews"
                    checked={searchData.technicalNews}
                    onChange={handleInput}
                    className={styles.checkbox}
                  />
                  <label htmlFor="technicalNews" className={styles.label}>
                    Включать технические новости рынков
                  </label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    id="announcements"
                    name="announcements"
                    checked={searchData.announcements}
                    onChange={handleInput}
                    className={styles.checkbox}
                  />
                  <label htmlFor="announcements" className={styles.label}>
                    Включать анонсы и календари
                  </label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    id="newsDigests"
                    name="newsDigests"
                    checked={searchData.newsDigests}
                    onChange={handleInput}
                    className={styles.checkbox}
                  />
                  <label htmlFor="newsDigests" className={styles.label}>
                    Включать сводки новостей
                  </label>
                </div>
                <button
                  type="button"
                  onClick={handleSearch}
                  disabled={!isFormValid()}
                  className={styles.submitButton}
                >
                  Поиск
                </button>
                <p className={styles.textRequired}>* Обязательные к заполнению поля</p>
              </div>
            </div>
          </form>
          <div className={styles.imageContainer}>
            <img
              src={DocumentImage}
              alt="Search Page"
              className={styles.documentImage}
            />
            <img src={FolderImage} alt="Search Page" className={styles.folderImage} />
            <img src={GroupImage} alt="Search Page" className={styles.groupImage} />
          </div>
        </div>
      </div>

    </main>


  );
};

export default SearchPage;