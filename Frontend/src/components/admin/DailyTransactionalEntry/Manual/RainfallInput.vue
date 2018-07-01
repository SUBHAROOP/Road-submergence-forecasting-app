<template>
  <v-layout row>
    <v-flex>
      <v-form>
        <v-text-field
          label="Village Name"
          v-model="villageName"
          required
        ></v-text-field>
        <v-text-field
          label="Max Rainfall Amout"
          v-model="maxRainfallAmt"
          required
        ></v-text-field>
        <v-text-field
          label="Min Rainfall Amout"
          v-model="minRainfallAmt"
          required
        ></v-text-field>
        <v-text-field
          label="Max Temperature"
          v-model="maxTemp"
          required
        ></v-text-field>
        <v-text-field
          label="Min Temperature"
          v-model="minTemp"
          required
        ></v-text-field>
        <v-text-field
          label="Max Humidity"
          v-model="maxHumidity"
          required
        ></v-text-field>
        <v-text-field
          label="Min Humidity"
          v-model="minHumidity"
          required
        ></v-text-field>
        <v-menu
          ref="menu"
          lazy
          :close-on-content-click="false"
          v-model="menu"
          transition="scale-transition"
          offset-y
          full-width
          :nudge-right="40"
          min-width="290px"
          :return-value.sync="dateOfEvent"
        >
          <v-text-field
            slot="activator"
            label="Date"
            v-model="dateOfEvent"
            prepend-icon="event"
            readonly
          ></v-text-field>
          <v-date-picker v-model="dateOfEvent" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.menu.save(dateOfEvent)">OK</v-btn>
          </v-date-picker>
        </v-menu>
        <v-card-actions>
          <v-btn color="success" style="width: 100%" @click="submit">submit</v-btn>
        </v-card-actions>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
import TransactionalDataService from '../../../../services/TransactionalDataService'

export default {
  name: 'RainfallInput',
  data: () => ({
    villageName: '',
    maxRainfallAmt: '',
    minRainfallAmt: '',
    maxTemp: '',
    minTemp: '',
    maxHumidity: '',
    minHumidity: '',
    dateOfEvent: null,
    menu: null
  }),
  methods: {
    submit () {
      if (this.checkValidity) {
        TransactionalDataService.saveRainfallInput({
          name: this.villageName,
          maxrainfall: this.maxRainfallAmt,
          minrainfall: this.minRainfallAmt,
          date: this.dateOfEvent,
          maxtemp: this.maxTemp,
          mintemp: this.minTemp,
          maxhumi: this.maxHumidity,
          minhumi: this.minHumidity
        }).then(res => {
          console.log(res)
          if (res.data.msg === 'ADDED') {
            this.$swal('Weather data insert successfully')
          } else {
            this.$swal('Weather data could not be inserted successfully')
          }
        }).catch(err => {
          if (err) {
            this.$swal('Could not fetch railfall data')
          }
        })
      } else {
        this.$swal('Fill up required fields')
      }
    },
    checkValidity () {
      if (this.villageName && this.maxRainfallAmt && this.minRainfallAmt &&
        this.maxTemp && this.minTemp && this.maxHumidity && this.minHumidity && this.dateOfEvent) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
