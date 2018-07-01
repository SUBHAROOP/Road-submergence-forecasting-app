<template>
  <v-layout row>
    <v-flex>
      <panel title="Prediction Information"/>
      <v-card>
        <v-card-text>
          <panel title="Query"/>
          <prediction-query @interface="handleQueryData"/>
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-text>
          <v-card v-if="actionView">
            <panel title="Prediction Result"/>
            <v-tabs color="cyan" dark slider-color="yellow">
              <v-tab :key="1" ripple>
                Prediction Graphical Data
              </v-tab>
              <v-tab :key="2" ripple>
                Prediction Tabular Data
              </v-tab>
              <v-tab :key="3" ripple>
                Location on Map
              </v-tab>
              <v-tab-item :key="1">
                <v-card flat>
                  <v-card-text>
                    <line-chart :parentdata1="parentdata"/>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item :key="2">
                <v-card flat>
                  <v-card-text>
                    <line-table :parentdata1="parentdata"/>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item :key="3">
                <v-card flat>
                  <v-card-text>
                    <maps :parentdata1="parentdata"/>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import LineChart from '../charts/LineChart'
import LineTable from '../table/LineTable'
import Maps from '../../presentational/Maps'
import PredictionQuery from '../../presentational/PredictionQuery'
import PredictionService from '../../../mockServices/PredictionService'

export default {
  name: 'PredictionInformation',
  components: {
    LineTable,
    LineChart,
    Maps,
    PredictionQuery
  },
  data: () => ({
    parentdata: {},
    actionView: false,
    queryInput: null
  }),
  methods: {
    handleQueryData (query) {
      this.queryInput = query
      PredictionService.getPredictionData().then(res => {
        this.parentdata = res
        this.actionView = true
      }).catch(err => {
        if (err) {
          this.$swal('Could not fetch prediction data')
        }
      })
    }
  }
}
</script>
