export const mockHumidityData = () => {
  return {
    title: 'Humidity Data',
    markers: [
      {
        position: { lat: 21.17024, lng: 72.831062 }
      }
    ],
    chartSubTitle: 'Date wise Rainfall data',
    xAxisSeries: [
      '24/10/2017',
      '25/10/2017',
      '26/10/2017',
      '27/10/2017',
      '28/10/2017'
    ],
    xAxisTitle: 'Date',
    tooltip: '',
    yAxisTitle: 'Humidity Conditions',
    yAxisSeries: [
      {
        name: 'Max Humidity(in cm)',
        data: [75, 84, 76.5, 74, 72]
      },
      {
        name: 'Min Humidity(in cm)',
        data: [40, 48, 56, 72, 52]
      }
    ]
  }
}

export const mockAverageDailyHumidityData = () => {
  return {
    title: 'Humidity Data',
    markers: [
      {
        position: { lat: 21.91992, lng: 73.82342 }
      },
      {
        position: { lat: 21.98735, lng: 73.78964 }
      },
      {
        position: { lat: 21.91885, lng: 73.58635 }
      }
    ],
    chartSubTitle: 'Date wise Humidity data',
    xAxisSeries: [
      '24/10/2017',
      '25/10/2017',
      '26/10/2017',
      '27/10/2017',
      '28/10/2017'
    ],
    xAxisTitle: 'Date',
    tooltip: '',
    yAxisTitle: 'Average Humidity',
    yAxisSeries: [
      {
        name: 'Village 1',
        data: [55, 58, 46.5, 74, 62]
      },
      {
        name: 'Village 2',
        data: [68, 58, 46, 37, 26]
      },
      {
        name: 'Village 3',
        data: [55, 54, 62, 48, 67]
      }
    ]
  }
}

export const mockMonthlyAverageSingleVillage = () => {
  return {
    chartTitle: 'Monthly Average Data',
    markers: [
      {
        position: { lat: 21.91992, lng: 73.82342 }
      }
    ],
    chartSubTitle: '',
    xAxisCategories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    yAxisTitle: 'Humidity',
    seriesName: 'Village 1',
    series: [
      {
        name: 'Village 1',
        marker: {
          symbol: 'square'
        },
        data: [78, 76, 74.5, 82]
      }
    ]
  }
}

export const mockMonthlyAverageMultipleVillage = () => {
  return {
    chartTitle: 'Monthly Average Data',
    markers: [
      {
        position: { lat: 21.91992, lng: 73.82342 }
      },
      {
        position: { lat: 21.98735, lng: 73.78964 }
      },
      {
        position: { lat: 21.91885, lng: 73.58635 }
      },
      {
        position: { lat: 21.17024, lng: 72.831062 }
      }
    ],
    chartSubTitle: '',
    xAxisCategories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    yAxisTitle: 'Humidity',
    series: [
      {
        name: 'Village 1',
        marker: {
          symbol: 'square'
        },
        data: [78, 76, 64.5, 42]
      },
      {
        name: 'Village 2',
        marker: {
          symbol: 'square'
        },
        data: [42, 76, 40, 85]
      },
      {
        name: 'Village 3',
        marker: {
          symbol: 'square'
        },
        data: [62, 60, 40, 30]
      },
      {
        name: 'Village 4',
        marker: {
          symbol: 'square'
        },
        data: [48, 62, 60, 58]
      }
    ]
  }
}

export const mockFiveYearlySingleVillage = () => {
  return {
    chartTitle: '5 Year Average Data',
    markers: [
      {
        position: { lat: 21.91992, lng: 73.82342 }
      }
    ],
    chartSubTitle: '',
    xAxisCategories: ['2012', '2013', '2014', '2015', '2016'],
    yAxisTitle: 'Humidity',
    seriesName: 'Village 1',
    series: [
      {
        name: 'Village 1',
        marker: {
          symbol: 'square'
        },
        data: [28, 36, 34.5, 32, 36]
      }
    ]
  }
}

export const mockFiveYearlyMultipleVillage = () => {
  return { chartTitle: '5 year Average Data', markers: [{ position: { lat: 10.0, lng: 10.0 } }, { position: { lat: 11.0, lng: 11.0 } }], chartSubTitle: '', xAxisCategories: ['2012', '2013', '2014', '2015', '2016'], yAxisTitle: 'Humidity', series: [{ name: 'Village 1', marker: { symbol: 'square' }, data: [28, 36, 34.5, 32, 36] }, { name: 'Village 2', marker: { symbol: 'square' }, data: [32, 36, 30, 32, 28] }, { name: 'Village 3', marker: { symbol: 'square' }, data: [29, 30, 29, 30, 36] }, { name: 'Village 4', marker: { symbol: 'square' }, data: [39, 42, 40, 38, 43] }] }
}

export const mockTenYearlySingleVillage = () => {
  return {
    chartTitle: 'Ten Yearly Data',
    markers: [
      {
        position: { lat: 21.91992, lng: 73.82342 }
      }
    ],
    chartSubTitle: '',
    xAxisCategories: [
      '2005',
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015'
    ],
    yAxisTitle: 'Humidity',
    seriesName: 'Village 1',
    series: [
      {
        name: 'Village 1',
        marker: {
          symbol: 'square'
        },
        data: [28, 36, 34.5, 32, 28, 36, 34.5, 32, 31, 30]
      }
    ]
  }
}

export const mockTenYearlyMultipleVillage = () => {
  return {
    chartTitle: 'Ten Yearly Data',
    markers: [
      {
        position: { lat: 21.91992, lng: 73.82342 }
      },
      {
        position: { lat: 21.98735, lng: 73.78964 }
      },
      {
        position: { lat: 21.91885, lng: 73.58635 }
      },
      {
        position: { lat: 21.17024, lng: 72.831062 }
      }
    ],
    chartSubTitle: '',
    xAxisCategories: [
      '2005',
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015'
    ],
    yAxisTitle: 'Humidity',
    series: [
      {
        name: 'Village 1',
        marker: {
          symbol: 'square'
        },
        data: [28, 36, 34.5, 32, 28, 36, 34.5, 32, 31, 30]
      },
      {
        name: 'Village 2',
        marker: {
          symbol: 'square'
        },
        data: [32, 36, 30, 32, 32, 36, 30, 32, 32, 36]
      },
      {
        name: 'Village 3',
        marker: {
          symbol: 'square'
        },
        data: [29, 30, 29, 30, 29, 30, 29, 30, 29, 30]
      },
      {
        name: 'Village 4',
        marker: {
          symbol: 'square'
        },
        data: [39, 42, 40, 38, 39, 42, 40, 38, 39, 42]
      }
    ]
  }
}
