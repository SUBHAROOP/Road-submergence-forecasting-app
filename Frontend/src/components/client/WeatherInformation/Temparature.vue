<template>
  <v-layout row>
    <v-flex>
      <panel title="Temperature Information"/>
      <v-card>
        <v-card-text>
          <panel title="Temperature Query"/>
          <user-query @interface="handleQueryData"/>
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-text>
          <v-card v-if="actionView">
            <panel title="Temperature Result"/>
            <v-tabs color="cyan" dark slider-color="yellow">
              <v-tab :key="1" ripple>
                Temperature Graphical Data
              </v-tab>
              <v-tab :key="2" ripple>
                Temperature Tabular Data
              </v-tab>
              <v-tab :key="3" ripple>
                Location on Map
              </v-tab>
              <v-tab-item :key="1">
                <v-card flat>
                  <v-card-text>
                    <bar-chart v-if="barView" :parentdata1="parentdata"/>
                    <line-chart v-if="lineView" :parentdata1="parentdata"/>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item :key="2">
                <v-card flat>
                  <v-card-text>
                    <bar-table v-if="barView" :parentdata1="parentdata"/>
                    <line-table v-if="lineView" :parentdata1="parentdata"/>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item :key="3">
                <v-card flat>
                  <v-card-text>
                    <maps v-if="actionView" :parentdata1="parentdata"/>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-card-text>
        <v-card-actions>
          <div v-if="actionView">
            <v-btn color="success" round @click="monthlyAverage">Monthly Average of Last Year</v-btn>
            <v-btn color="warning" round @click="fiveYearlyAverage">Last 5 Year Average</v-btn>
            <v-btn color="error" round @click="tenYearlyAverage">Last 10 Year Average</v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import BarChart from '../charts/BarChart'
import LineChart from '../charts/LineChart'
import BarTable from '../table/BarTable'
import LineTable from '../table/LineTable'
import Maps from '../../presentational/Maps'
import UserQuery from '../../presentational/UserQuery'
import TemperatureService from '../../../mockServices/TemperatureService'
export default {
  name: 'Temperature',
  components: {
    LineTable,
    BarTable,
    BarChart,
    LineChart,
    Maps,
    UserQuery
  },
  data: () => ({
    barView: false,
    lineView: false,
    parentdata: {},
    actionView: false,
    queryInput: null
  }),
  methods: {
    handleQueryData (query) {
      this.queryInput = query
      if (this.queryInput.village) {
        // this.parentdata = TemperatureService.getDailyDataFromQuery(this.queryInput)
        TemperatureService.getDailyDataFromQuery(this.queryInput).then(res => {
          this.parentdata = res
          this.barView = true
          this.lineView = false
          this.actionView = true
        }).catch(err => {
          if (err) {
            this.$swal('Could not fetch daily temperature data')
          }
        })
      } else {
        // this.parentdata = TemperatureService.getDailyAverageDataFromQuery(this.queryInput)
        TemperatureService.getDailyAverageDataFromQuery(this.queryInput).then(res => {
          this.parentdata = res
          this.barView = true
          this.lineView = false
          this.actionView = true
        }).catch(err => {
          if (err) {
            this.$swal('Could not fetch daily temperature data')
          }
        })
      }
    },
    monthlyAverage () {
      if (this.queryInput.village.text === '') {
        // this.parentdata = TemperatureService.getMonthlyAverageSingleVillageFromQuery(this.queryInput)
        TemperatureService.getMonthlyAverageSingleVillageFromQuery(this.queryInput).then(res => {
          this.parentdata = res
          this.barView = false
          this.lineView = true
        }).catch(err => {
          if (err) {
            this.$swal('Could not fetch monthly temperature data')
          }
        })
      } else {
        // this.parentdata = TemperatureService.getMonthlyAverageMultipleVillageFromQuery(this.queryInput)
        TemperatureService.getMonthlyAverageMultipleVillageFromQuery(this.queryInput).then(res => {
          this.parentdata = res
          this.barView = false
          this.lineView = true
        }).catch(err => {
          if (err) {
            this.$swal('Could not fetch monthly temperature data')
          }
        })
      }
    },
    fiveYearlyAverage () {
      if (this.queryInput.village.text === '') {
        // this.parentdata = TemperatureService.getFiveYearlyAverageSingleVillageFromQuery(this.queryInput)
        TemperatureService.getFiveYearlyAverageSingleVillageFromQuery(this.queryInput).then(res => {
          this.parentdata = res
          this.barView = false
          this.lineView = true
        }).catch(err => {
          if (err) {
            this.$swal('Could not fetch five yearly temperature data')
          }
        })
      } else {
        // this.parentdata = TemperatureService.getFiveYearlyAverageMultipleVillageFromQuery(this.queryInput)
        TemperatureService.getFiveYearlyAverageMultipleVillageFromQuery(this.queryInput).then(res => {
          this.parentdata = res
          this.barView = false
          this.lineView = true
        }).catch(err => {
          if (err) {
            this.$swal('Could not fetch five yearly temperature data')
          }
        })
      }
    },
    tenYearlyAverage () {
      this.barView = false
      this.lineView = true
      if (this.queryInput.village.text === '') {
        // this.parentdata = TemperatureService.getTenYearlyAverageSingleVillageFromQuery(this.queryInput)
        TemperatureService.getTenYearlyAverageSingleVillageFromQuery(this.queryInput).then(res => {
          this.parentdata = res
          this.barView = false
          this.lineView = true
        }).catch(err => {
          if (err) {
            this.$swal('Could not fetch ten yearly temperature data')
          }
        })
      } else {
        // this.parentdata = TemperatureService.getTenYearlyAverageMultipleVillageFromQuery(this.queryInput)
        TemperatureService.getTenYearlyAverageMultipleVillageFromQuery(this.queryInput).then(res => {
          this.parentdata = res
          this.barView = false
          this.lineView = true
        }).catch(err => {
          if (err) {
            this.$swal('Could not fetch ten yearly temperature data')
          }
        })
      }
    }
  }
}
</script>
