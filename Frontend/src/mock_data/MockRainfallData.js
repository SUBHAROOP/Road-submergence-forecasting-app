export const mockRainfallData = () => {
  return {
    title: 'Rainfall Data',
    markers: [{
      position: { lat: 21.91992, lng: 73.82342 }
    }],
    chartSubTitle: 'Date wise Rainfall data',
    xAxisSeries: ['24/10/2017', '25/10/2017', '26/10/2017', '27/10/2017', '28/10/2017'],
    xAxisTitle: 'Date',
    tooltip: '',
    yAxisTitle: 'Weather Conditions',
    yAxisSeries: [
      {
        name: 'Max Rainfall(in cm)',
        data: [35, 38, 36.5, 34, 32]
      },
      {
        name: 'Min Rainfall(in cm)',
        data: [28, 28, 26, 27, 23]
      }
    ]
  }
}

export const mockAverageDailyRainfallData = () => {
  return {
    title: 'Rainfall Data',
    markers: [{
      position: { lat: 21.91992, lng: 73.82342 }
    },
    {
      position: { lat: 21.98735, lng: 73.78964 }
    },
    {
      position: { lat: 21.91885, lng: 73.58635 }
    }],
    chartSubTitle: 'Date wise Rainfall data',
    xAxisSeries: ['24/10/2017', '25/10/2017', '26/10/2017', '27/10/2017', '28/10/2017'],
    xAxisTitle: 'Date',
    tooltip: '',
    yAxisTitle: 'Average Rainfall',
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
    markers: [{
      position: { lat: 21.91992, lng: 73.82342 }
    }],
    chartSubTitle: '',
    xAxisCategories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    yAxisTitle: 'Rainfall',
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
    chartSubTitle: '',
    xAxisCategories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    yAxisTitle: 'Rainfall',
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
    markers: [{
      position: { lat: 21.91992, lng: 73.82342 }
    }],
    chartSubTitle: '',
    xAxisCategories: ['2012', '2013', '2014', '2015', '2016'],
    yAxisTitle: 'Rainfall',
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
    chartSubTitle: '',
    xAxisCategories: ['2012', '2013', '2014', '2015', '2016'],
    yAxisTitle: 'Rainfall',
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
    markers: [
      {
        position: { lat: 21.91992, lng: 73.82342 }
      }],
    chartSubTitle: '',
    xAxisCategories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'],
    yAxisTitle: 'Rainfall',
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
    xAxisCategories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'],
    yAxisTitle: 'Rainfall',
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
