<template>
  <section class="charts">
    <h3>Load Modules(Drilldown)</h3>
    <vue-highcharts :Highcharts="Highcharts" :options="drilldownOptions" ref="drilldownChart"></vue-highcharts>
  </section>
</template>
<script>
import VueHighcharts from 'vue2-highcharts'
import Drilldown from 'drilldown'
import * as data from '../../../mock_data/data'
import Highcharts from 'highcharts'
Drilldown(Highcharts)
Highcharts.setOptions({
  lang: {
    drillUpText: 'back'
  }
})
export default {
  components: {
    VueHighcharts
  },
  data () {
    return {
      Highcharts: Highcharts,
      drilldownOptions: data.DrilldownData
    }
  }
}
</script>
