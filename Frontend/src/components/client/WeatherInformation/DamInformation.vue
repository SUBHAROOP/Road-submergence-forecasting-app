<template>
  <v-layout row>
    <v-flex>
      <panel title="Dam Information"/>
      <v-card>
        <v-card-text>
          <panel title="Query"/>
          <dam-query @interface="handleQueryData"/>
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-text>
          <v-card v-if="actionView">
            <panel title="Dam Result"/>
            <v-tabs color="cyan" dark slider-color="yellow">
              <v-tab :key="1" ripple>
                Dam Graphical Data
              </v-tab>
              <v-tab :key="2" ripple>
                Dam Tabular Data
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
import DamQuery from '../../presentational/DamQuery'
import DamService from '../../../mockServices/DamService'
// import DamService from '../../../services/DamService'
export default {
  name: 'DamInformation',
  components: {
    LineTable,
    BarTable,
    BarChart,
    LineChart,
    Maps,
    DamQuery
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
      DamService.getDailyDataFromQuery(this.queryInput).then(res => {
        this.parentdata = res
        this.barView = true
        this.lineView = false
        this.actionView = true
      }).catch(err => {
        if (err) {
          this.$swal('Could not fetch daily dam data')
        }
      })
    },
    monthlyAverage () {
      DamService.getMonthlyAverageSingleVillageFromQuery(this.queryInput).then(res => {
        this.parentdata = res
        this.barView = false
        this.lineView = true
      }).catch(err => {
        if (err) {
          this.$swal('Could not fetch monthly dam data')
        }
      })
    },
    fiveYearlyAverage () {
      DamService.getFiveYearlyAverageSingleVillageFromQuery(this.queryInput).then(res => {
        this.parentdata = res
        this.barView = false
        this.lineView = true
      }).catch(err => {
        if (err) {
          this.$swal('Could not fetch five yearly dam data')
        }
      })
    },
    tenYearlyAverage () {
      DamService.getTenYearlyAverageSingleVillageFromQuery(this.queryInput).then(res => {
        this.parentdata = res
        this.barView = false
        this.lineView = true
      }).catch(err => {
        if (err) {
          this.$swal('Could not fetch ten yearly dam data')
        }
      })
    }
  }
}
</script>
