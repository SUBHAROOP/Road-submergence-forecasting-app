<template>
  <v-layout row>
    <v-flex>
      <panel title="User Forecast"/>
      <v-card>
        <v-card-text>
          <v-subheader>District</v-subheader>
          <v-select
            :items="districtName"
            v-model="district"
            v-on:change="getTehsilName"
            label="Select"
            single-line
            required
          ></v-select>
          <v-subheader>Tehsil</v-subheader>
          <v-select
            :items="tehsilName"
            v-model="tehsil"
            v-on:change="getVillageName"
            label="Select"
            required
            single-line
          ></v-select>
          <v-subheader>Villages</v-subheader>
          <v-select
            :items="villageName"
            v-model="village"
            label="Select"
            single-line
          ></v-select>
          <v-menu
            ref="menu2"
            lazy
            :close-on-content-click="false"
            v-model="menu2"
            transition="scale-transition"
            offset-y
            full-width
            :nudge-right="40"
            min-width="290px"
            :return-value.sync="dateOfEvent"
          >
            <v-text-field
              slot="activator"
              label="Date To"
              required
              v-model="dateOfEvent"
              prepend-icon="event"
              readonly
            ></v-text-field>
            <v-date-picker v-model="dateOfEvent" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="menu2 = false">Cancel</v-btn>
              <v-btn flat color="primary" @click="$refs.menu2.save(dateOfEvent)">OK</v-btn>
            </v-date-picker>
          </v-menu>
          <v-spacer></v-spacer>
          <v-container fluid>
            <v-flex xs12>
              <v-subheader>Is there any probability of Road Submergence?</v-subheader>
              <v-select
                :items="forecastValues"
                v-model="forecast"
              ></v-select>
            </v-flex>
          </v-container>
          <v-subheader>Select the probability of Submergence on a scale of 1-5</v-subheader>
          <v-select
            :items="scaleRange"
            v-model="selectedWeight"
            label="Select"
            single-line
          ></v-select>
          <v-flex xs12>
            <v-btn color="success" style="width: 100%" @click="submit">Submit</v-btn>
          </v-flex>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import UserQueryService from '../../../mockServices/UserQueryService'

export default {
  name: 'UserForecast',
  data () {
    return {
      district: {text: ''},
      tehsil: {text: ''},
      village: {text: ''},
      forecast: {text: ''},
      districtName: [],
      tehsilName: [],
      villageName: [],
      dateOfEvent: null,
      selectedWeight: {text: ''},
      scaleRange: [
        {text: '1'},
        {text: '2'},
        {text: '3'},
        {text: '4'},
        {text: '5'}
      ],
      forecastValues: [
        {text: 'Yes'},
        {text: 'No'}
      ],
      menu2: false
    }
  },
  methods: {
    getTehsilName () {
      UserQueryService.getTehsilNames(this.district).then(res => {
        this.tehsilName = res
      }).catch(err => {
        if (err) {
          this.$swal('District Name ')
        }
      })
    },
    getVillageName () {
      UserQueryService.getVillageNames(this.tehsil).then(res => {
        this.villageName = res
      }).catch(err => {
        if (err) {
          this.$swal('Village Name ')
        }
      })
    },
    submit () {
      if (this.checkValidity()) {
        setTimeout(() => {
          this.$swal('Your inputs have been saved successfully')
        }, 500)
      } else {
        this.$swal('Please fill up the required fields')
      }
    },
    checkValidity () {
      if (this.district.text && this.tehsil.text && this.village.text && this.dateOfEvent) {
        return true
      } else {
        console.log(this.district.text + '' + this.tehsil.text + '' + this.village.text + '' +
          '' + '' + this.dateOfEvent)
        return false
      }
    }
  },
  created () {
    UserQueryService.getDistrictNames().then(res => {
      this.districtName = res
    }).catch(err => {
      if (err) {
        this.$swal('District Name ')
      }
    })
  }
}
</script>
