import { useState } from 'react';
import ResultContext from './createContext.js';

const ResultProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [generalData, setGeneralData] = useState(null);
  const [detailsData, setDetailsData] = useState(null);

  return (
    <ResultContext.Provider value={{
      generalData, setGeneralData,
      data, setData,
      detailsData, setDetailsData
    }}>
      {children}
    </ResultContext.Provider>)
}

export default ResultProvider;