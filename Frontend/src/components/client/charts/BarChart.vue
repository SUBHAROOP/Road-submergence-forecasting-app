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
import {barChart} from '../../../utils/charts-util'
export default {
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
      options: barChart(this.parentdata1),
      headers: null,
      items: null
    }
  },
  mounted () {
    this.headers = Utils.prepareBarChartTableHeaders(this.parentdata1)
    console.log(this.headers)
    this.items = Utils.prepareBarChartTableItems(this.parentdata1)
  },
  watch: {
    parentdata1: function (newVal) {
      this.options = barChart(newVal)
      this.headers = Utils.prepareBarChartTableHeaders(newVal)
      this.items = Utils.prepareBarChartTableItems(newVal)
    }
  }
}
</script>
<style scoped>
  .thin-divider{
    flex: 0!important;
  }
</style>
