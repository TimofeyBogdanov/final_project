import styles from './SearchResultSort.module.css'

const SearchResultSort = ({ isAnnouncement, isDigest, isTechNews }) => {
  return (
    <ul className={styles.cardTypesWrapper}>
      {[isAnnouncement, isDigest, isTechNews].map((attr, index) =>
        attr && attr === isAnnouncement
          ? <li key={index} className={styles.cardType}>Анонсы и события</li>
          : attr && attr === isDigest
            ? <li key={index} className={styles.cardType}>Новости</li>
            : attr && attr === isTechNews
              ? <li key={index} className={styles.cardType}>Технические новости</li>
              : ''
      )}
    </ul>
  )
}

export default SearchResultSort;