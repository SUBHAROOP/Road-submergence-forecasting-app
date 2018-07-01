export const mockTemperatureData = () => {
  return {
    title: 'Temperature Data',
    chartSubTitle: 'Date wise temperature data',
    xAxisSeries: ['24/10/2017', '25/10/2017', '26/10/2017', '27/10/2017', '28/10/2017'],
    xAxisTitle: 'Date',
    tooltip: '',
    yAxisTitle: 'Weather Conditions',
    markers: [{
      position: { lat: 21.91992, lng: 73.82342 }
    }],
    yAxisSeries: [
      {
        name: 'Max Temperature(degree Cenrigate)',
        data: [35, 38, 36.5, 34, 32]
      },
      {
        name: 'Min Temperature(degree Cenrigate)',
        data: [28, 28, 26, 27, 23]
      }
    ]
  }
}

export const mockAverageDailyTemperatureData = () => {
  return {
    title: 'Temperature Data',
    chartSubTitle: 'Date wise temperature data',
    xAxisSeries: ['24/10/2017', '25/10/2017', '26/10/2017', '27/10/2017', '28/10/2017'],
    xAxisTitle: 'Date',
    markers: [{
      position: { lat: 21.91992, lng: 73.82342 }
    },
    {
      position: { lat: 21.98735, lng: 73.78964 }
    },
    {
      position: { lat: 21.91885, lng: 73.58635 }
    }],
    tooltip: '',
    yAxisTitle: 'Average Temperature',
    yAxisSeries: [
      {
        name: 'Village 1',
        data: [35, 38, 36.5, 34, 32]
      },
      {
        name: 'Village 2',
        data: [28, 28, 26, 27, 23]
      },
      {
        name: 'Village 3',
        data: [28, 30, 34, 27, 23]
      }
    ]
  }
}

export const mockMonthlyAverageSingleVillage = () => {
  return {
    chartTitle: 'Monthly Average Data',
    chartSubTitle: '',
    xAxisTitle: 'Week',
    markers: [{
      position: { lat: 21.91992, lng: 73.82342 }
    }],
    xAxisCategories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    yAxisTitle: 'Temperature',
    seriesName: 'Village 1',
    series: [{
      name: 'Village 1',
      marker: {
        symbol: 'square'
      },
      data: [28, 36, 34.5, 32]
    }]
  }
}

export const mockMonthlyAverageMultipleVillage = () => {
  return {
    chartTitle: 'Monthly Average Data',
    chartSubTitle: '',
    xAxisTitle: 'Week',
    markers: [{
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
    }],
    xAxisCategories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    yAxisTitle: 'Temperature',
    series: [{
      name: 'Village 1',
      marker: {
        symbol: 'square'
      },
      data: [28, 36, 34.5, 32]
    }, {
      name: 'Village 2',
      marker: {
        symbol: 'square'
      },
      data: [32, 36, 30, 32]
    }, {
      name: 'Village 3',
      marker: {
        symbol: 'square'
      },
      data: [29, 30, 29, 30]
    }, {
      name: 'Village 4',
      marker: {
        symbol: 'square'
      },
      data: [39, 42, 40, 38]
    }]
  }
}

export const mockFiveYearlySingleVillage = () => {
  return {
    chartTitle: '5 Year Average Data',
    chartSubTitle: '',
    markers: [{
      position: { lat: 21.91992, lng: 73.82342 }
    }],
    xAxisTitle: 'Year',
    xAxisCategories: ['2012', '2013', '2014', '2015', '2016'],
    yAxisTitle: 'Temperature',
    seriesName: 'Village 1',
    series: [{
      name: 'Village 1',
      marker: {
        symbol: 'square'
      },
      data: [28, 36, 34.5, 32, 36]
    }]
  }
}

export const mockFiveYearlyMultipleVillage = () => {
  return {
    chartTitle: '5 year Average Data',
    chartSubTitle: '',
    markers: [{
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
    }],
    xAxisTitle: 'Year',
    xAxisCategories: ['2012', '2013', '2014', '2015', '2016'],
    yAxisTitle: 'Temperature',
    series: [{
      name: 'Village 1',
      marker: {
        symbol: 'square'
      },
      data: [28, 36, 34.5, 32, 36]
    }, {
      name: 'Village 2',
      marker: {
        symbol: 'square'
      },
      data: [32, 36, 30, 32, 28]
    }, {
      name: 'Village 3',
      marker: {
        symbol: 'square'
      },
      data: [29, 30, 29, 30, 36]
    }, {
      name: 'Village 4',
      marker: {
        symbol: 'square'
      },
      data: [39, 42, 40, 38, 43]
    }]
  }
}

export const mockTenYearlySingleVillage = () => {
  return {
    chartTitle: 'Ten Yearly Data',
    chartSubTitle: '',
    markers: [{
      position: { lat: 21.91992, lng: 73.82342 }
    }],
    xAxisTitle: 'Year',
    xAxisCategories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'],
    yAxisTitle: 'Temperature',
    seriesName: 'Village 1',
    series: [{
      name: 'Village 1',
      marker: {
        symbol: 'square'
      },
      data: [28, 36, 34.5, 32, 28, 36, 34.5, 32, 31, 30]
    }]
  }
}

export const mockTenYearlyMultipleVillage = () => {
  return {
    chartTitle: 'Ten Yearly Data',
    chartSubTitle: '',
    markers: [{
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
    }],
    xAxisTitle: 'Year',
    xAxisCategories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'],
    yAxisTitle: 'Temperature',
    series: [{
      name: 'Village 1',
      marker: {
        symbol: 'square'
      },
      data: [28, 36, 34.5, 32, 28, 36, 34.5, 32, 31, 30]
    }, {
      name: 'Village 2',
      marker: {
        symbol: 'square'
      },
      data: [32, 36, 30, 32, 32, 36, 30, 32, 32, 36]
    }, {
      name: 'Village 3',
      marker: {
        symbol: 'square'
      },
      data: [29, 30, 29, 30, 29, 30, 29, 30, 29, 30]
    }, {
      name: 'Village 4',
      marker: {
        symbol: 'square'
      },
      data: [39, 42, 40, 38, 39, 42, 40, 38, 39, 42]
    }]
  }
}
