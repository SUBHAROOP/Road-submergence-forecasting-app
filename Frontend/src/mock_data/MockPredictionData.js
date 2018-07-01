export const mockPredictionData = () => {
  return {
    chartTitle: 'Prediction Data',
    markers: [
      {
        position: { lat: 21.91992, lng: 73.82342 }
      },
      {
        position: { lat: 21.98735, lng: 73.78964 }
      }
    ],
    chartSubTitle: '',
    xAxisCategories: [
      '30/03/2018',
      '01/03/2018',
      '02/03/2018',
      '03/03/2018'
    ],
    yAxisTitle: 'Prediction',
    series: [
      {
        name: 'Village 1',
        marker: {
          symbol: 'square'
        },
        data: [20, 0, 0, 0]
      },
      {
        name: 'Village 2',
        marker: {
          symbol: 'square'
        },
        data: [0, 36, 0, 84]
      },
      {
        name: 'Village 3',
        marker: {
          symbol: 'square'
        },
        data: [0, 28, 0, 0]
      },
      {
        name: 'Village 4',
        marker: {
          symbol: 'square'
        },
        data: [0, 0, 0, 80]
      }
    ]
  }
}
