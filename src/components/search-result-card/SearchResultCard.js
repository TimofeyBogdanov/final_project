import parseXml from '../../utils/parseXml';
import parseDate from '../../utils/parseDate';
import SearchResultSort from '../search-result-sort/SearchResultSort';
import parseImgSrc from '../../utils/parseImgSrc';
import styles from './SearchResultCard.module.css';

const SearchResultCard = ({ data }) => {
  return (
    <li className={styles.resultItem}>
      <div className={styles.cardHeader}>
        <div>
          <span className={styles.cardDate}>{parseDate(data.issueDate)}</span>
          <span className={styles.cardSource}>{data.source.name}</span>
        </div>
        <h1 className={styles.cardTitle}>{data.title.text}</h1>
        <SearchResultSort
          isAnnouncement={data.attributes.isAnnouncement}
          isDigest={data.attributes.isDigest}
          isTechNews={data.attributes.isTechNews}
        />
      </div>
      <div>{parseImgSrc(data.content.markup) !== null ? (<img src={parseImgSrc(data.content.markup)} alt="card image" />) : ''}</div>
      <div className={styles.cardText}>
        {parseXml(data.content.markup)}
      </div>
      <div className={styles.cardFooter}>
        <a className={styles.readMore} href={data.url === '' ? '/notFound' : data.url} target="_blank">Читать в источнике</a>
        <div className={styles.wordCount}>{data.attributes.wordCount} слова</div>
      </div>
    </li>
  )
}

export default SearchResultCard;