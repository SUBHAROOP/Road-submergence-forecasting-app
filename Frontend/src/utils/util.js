export const prepareBarChartTableHeaders = (options) => {
  let headers = []
  let index = 0
  headers.push({
    text: options.xAxisTitle,
    value: index
  })
  options.yAxisSeries.map(function (item) {
    index++
    headers.push({
      text: item.name,
      value: index
    })
  })
  return headers
}

export const prepareBarChartTableItems = (options) => {
  let items = []
  for (let i = 0; i < options.xAxisSeries.length; i++) {
    let item = []
    item.push(options.xAxisSeries[i])
    for (let j = 0; j < options.yAxisSeries.length; j++) {
      item.push(options.yAxisSeries[j].data[i])
    }
    items.push(item)
  }
  return formatBarChartItems(items)
}

const formatBarChartItems = (items) => {
  let finalItems = []
  let index = 0
  items.map(function (item) {
    let eachFinalItem = []
    item.map(function (eachItem) {
      eachFinalItem.push({
        text: eachItem,
        value: index
      })
      index++
    })
    finalItems.push({
      each: eachFinalItem,
      value: index
    })
  })
  return finalItems
}

export const prepareLineChartTableHeaders = (options) => {
  let headers = []
  let index = 0
  headers.push({
    text: options.xAxisTitle,
    value: index
  })
  options.series.map(function (item) {
    index++
    headers.push({
      text: item.name,
      value: index
    })
  })
  return headers
}

export const prepareLineChartTableItems = (options) => {
  let items = []
  for (let i = 0; i < options.xAxisCategories.length; i++) {
    let item = []
    item.push(options.xAxisCategories[i])
    for (let j = 0; j < options.series.length; j++) {
      item.push(options.series[j].data[i])
    }
    items.push(item)
  }
  return formatLineChartItems(items)
}

const formatLineChartItems = (items) => {
  let finalItems = []
  let index = 0
  items.map(function (item) {
    let eachFinalItem = []
    item.map(function (eachItem) {
      eachFinalItem.push({
        text: eachItem,
        value: index
      })
      index++
    })
    finalItems.push({
      each: eachFinalItem,
      value: index
    })
  })
  return finalItems
}
