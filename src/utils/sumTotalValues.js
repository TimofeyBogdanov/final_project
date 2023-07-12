const sumTotalValues = (arr, sum = 0) => {
    for (let item of arr) {
        sum += item.totalValue;
    }
    return sum;
}

export default sumTotalValues;