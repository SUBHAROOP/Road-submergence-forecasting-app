<template>
  <div>
    <v-card>
      <v-card-text>
        <section class="charts">
          <vue-highcharts :options="options"></vue-highcharts>
        </section>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import VueHighcharts from 'vue2-highcharts'
import * as Utils from '../../../utils/util'
import {lineChart} from '../../../utils/charts-util'
export default{
  components: {
    VueHighcharts
  },
  props: {
    parentdata1: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      options: lineChart(this.parentdata1),
      headers: null,
      items: null
    }
  },
  mounted () {
    this.headers = Utils.prepareLineChartTableHeaders(this.parentdata1)
    this.items = Utils.prepareLineChartTableItems(this.parentdata1)
  },
  watch: {
    parentdata1: function (newVal) {
      this.options = lineChart(newVal)
      this.headers = Utils.prepareLineChartTableHeaders(newVal)
      this.items = Utils.prepareLineChartTableItems(newVal)
    }
  }
}
</script>
<style scoped>
  .thin-divider{
    flex: 0!important;
  }
</style>
