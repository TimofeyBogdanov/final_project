import DotLoader from "react-spinners/DotLoader";
import styles from './GeneralDataLoader.module.css';

const GeneralDataLoader = () => {
  return (
    <div className={styles.dotLoader}><DotLoader
      color="#000"
      loading={true}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
      <p className={styles.loading}>Загрузка...</p></div>
  )
}

export default GeneralDataLoader;