import parseDate from './parseDate';

const mapArray = (arr) => {
  const resultArray = [];
  if (!arr || !arr.length) {
    return [];
  } else {
    if (arr[0].histogramType === "totalDocuments") {
      arr[0].data.forEach(item => {
        resultArray.push({
          date: parseDate(item.date),
          totalValue: item.value,
          riskValue: 0
        })
      })
      if (arr[1]) {
        resultArray.forEach((item, index) => {
          item.riskValue = arr[1].data[index].value
        })
      }
    }

    if (arr[0].histogramType === "riskFactors") {
      arr[0].data.forEach(item => {
        resultArray.push({
          date: parseDate(item.date),
          totalValue: 0,
          riskValue: item.value
        })
      })
      if (arr[1]) {
        resultArray.forEach((item, index) => {
          item.totalValue = arr[1].data[index].value
        })
      }
    }
    return resultArray;
  }
}

export default mapArray;