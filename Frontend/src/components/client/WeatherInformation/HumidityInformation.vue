<template>
  <v-layout row>
    <v-flex>
      <panel title="Humidity Information"/>
      <v-card>
        <v-card-text>
          <panel title="Humidity Query"/>
          <user-query @interface="handleQueryData"/>
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-text>
          <v-card v-if="actionView">
            <panel title="Humidity Result"/>
            <v-tabs color="cyan" dark slider-color="yellow">
              <v-tab :key="1" ripple>
                Humidity Graphical Data
              </v-tab>
              <v-tab :key="2" ripple>
                Humidity Tabular Data
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
import HumidityService from '../../../mockServices/HumidityService'
export default {
  name: 'HumidityInformation',
  components: {
    BarChart,
    LineChart,
    BarTable,
    LineTable,
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
        // this.parentdata = RainfallService.getDailyDataFromQuery(this.queryInput)
        HumidityService.getDailyDataFromQuery(this.queryInput).then(res => {
          this.parentdata = res
          this.barView = true
          this.lineView = false
          this.actionView = true
        }).catch(err => {
          if (err) {
            this.$swal('Could not fetch daily railfall data')
          }
        })
      } else {
        // this.parentdata = RainfallService.getDailyAverageDataFromQuery(this.queryInput)
        HumidityService.getDailyAverageDataFromQuery(this.queryInput).then(res => {
          this.parentdata = res
          this.barView = true
          this.lineView = false
          this.actionView = true
        }).catch(err => {
          if (err) {
            this.$swal('Could not fetch daily railfall data')
          }
        })
      }
    },
    monthlyAverage () {
      this.barView = false
      this.lineView = true
      if (this.queryInput.village.text === '') {
        // this.parentdata = RainfallService.getMonthlyAverageSingleVillageFromQuery(this.queryInput)
        HumidityService.getMonthlyAverageSingleVillageFromQuery(this.queryInput).then(res => {
          this.parentdata = res
          this.barView = false
          this.lineView = true
        }).catch(err => {
          if (err) {
            this.$swal('Could not fetch monthly railfall data')
          }
        })
      } else {
        // this.parentdata = RainfallService.getMonthlyAverageMultipleVillageFromQuery(this.queryInput)
        HumidityService.getMonthlyAverageMultipleVillageFromQuery(this.queryInput).then(res => {
          this.parentdata = res
          this.barView = false
          this.lineView = true
        }).catch(err => {
          if (err) {
            this.$swal('Could not fetch monthly railfall data')
          }
        })
      }
    },
    fiveYearlyAverage () {
      if (this.queryInput.village.text === '') {
        // this.parentdata = RainfallService.getFiveYearlyAverageSingleVillageFromQuery(this.queryInput)
        HumidityService.getFiveYearlyAverageSingleVillageFromQuery(this.queryInput).then(res => {
          this.parentdata = res
          this.barView = false
          this.lineView = true
        }).catch(err => {
          if (err) {
            this.$swal('Could not five yearly railfall data')
          }
        })
      } else {
        // this.parentdata = RainfallService.getFiveYearlyAverageMultipleVillageFromQuery(this.queryInput)
        HumidityService.getFiveYearlyAverageMultipleVillageFromQuery(this.queryInput).then(res => {
          this.parentdata = res
          this.barView = false
          this.lineView = true
        }).catch(err => {
          if (err) {
            this.$swal('Could not fetch five yearly railfall data')
          }
        })
      }
    },
    tenYearlyAverage () {
      if (this.queryInput.village.text === '') {
        // this.parentdata = RainfallService.getTenYearlyAverageSingleVillageFromQuery(this.queryInput)
        HumidityService.getTenYearlyAverageSingleVillageFromQuery(this.queryInput).then(res => {
          this.parentdata = res
          this.barView = false
          this.lineView = true
        }).catch(err => {
          if (err) {
            this.$swal('Could not fetch ten yearly railfall data')
          }
        })
      } else {
        // this.parentdata = RainfallService.getTenYearlyAverageMultipleVillageFromQuery(this.queryInput)
        HumidityService.getTenYearlyAverageMultipleVillageFromQuery(this.queryInput).then(res => {
          this.parentdata = res
          this.barView = false
          this.lineView = true
        }).catch(err => {
          if (err) {
            this.$swal('Could not fetch ten yearly railfall data')
          }
        })
      }
    }
  }
}
</script>
