import Highcharts from 'highcharts'
// Utility function for bar chart
export const barChart = (options) => {
  return {
    chart: {
      type: 'bar'
    },
    title: {
      text: options.title
    },
    subtitle: {
      text: options.chartSubTitle
    },
    xAxis: {
      categories: options.xAxisSeries,
      title: options.xAxisTitle
    },
    yAxis: {
      min: 0,
      title: {
        text: options.yAxisTitle,
        align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      valueSuffix: options.toolTip
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    credits: {
      enabled: false
    },
    series: options.yAxisSeries
  }
}

// Utility function for cmbination chart
export const combinationChart = (options) => {
  return {
    title: {
      text: 'Combination chart'
    },
    xAxis: {
      categories: options.xAxisCategories
    },
    labels: {
      items: [{
        html: options.xAxisTitle,
        style: {
          left: '50px',
          top: '18px',
          color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
        }
      }]
    },
    series: options.series
  }
}

// Utility function for load module chart
export const loadModuleChart = (options) => {
  return {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Basic drilldown'
    },
    xAxis: {
      type: 'category'
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true
        }
      }
    },
    series: options.series,
    drilldown: options.drilldown
  }
}

// Utility function for line chart
export const lineChart = (options) => {
  return {
    chart: {
      type: 'spline'
    },
    title: {
      text: options.chartTitle
    },
    subtitle: {
      text: options.chartSubTitle
    },
    xAxis: {
      categories: options.xAxisCategories
    },
    yAxis: {
      title: {
        text: options.yAxisTitle
      }
    },
    tooltip: {
      crosshairs: true,
      shared: true
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      spline: {
        marker: {
          radius: 4,
          lineColor: '#666666',
          lineWidth: 1
        }
      }
    },
    series: options.series
  }
}

// Utility function for pie chart
export const pieChart = (options) => {
  return {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45
      }
    },
    title: {
      text: options.chartTitle
    },
    subtitle: {
      text: options.chartSubTitle
    },
    plotOptions: {
      pie: {
        innerSize: 100,
        depth: 45
      }
    },
    series: [{
      name: options.seriesName,
      data: options.seriesData
    }]
  }
}

// Utility function for drilldown data
export const drilldownChart = (options) => {
  return {
    chart: {
      type: 'column'
    },
    title: {
      text: options.title
    },
    xAxis: {
      type: options.xAxis
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true
        }
      }
    },
    series: options.yAxisSeries
  }
}
