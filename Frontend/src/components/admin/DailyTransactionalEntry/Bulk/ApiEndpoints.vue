<template>
  <v-layout row>
    <v-flex>
      <v-card>
        <panel title="Api Endpoints"/>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Weather Data Endpoints"
              v-model="weatherData"
            ></v-text-field>
            <v-text-field
              label="Dam data Endpoints"
              v-model="damData"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="success" style="width: 100%" @click="submit">submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import TransactionalDataService from '../../../../services/TransactionalDataService'

export default {
  name: 'ApiEndpoints',
  data: () => ({
    weatherData: '',
    damData: ''
  }),

  methods: {
    submit () {
      if (this.checkValidity()) {
        TransactionalDataService.saveApiEndpoints({
          weatherEndpoint: this.weatherData,
          damEndpoint: this.damData
        }).then(res => {
          this.$swal('Data entry through API endpoints is successful')
        }).catch(err => {
          if (err) {
            this.$swal('Could not fetch monthly railfall data')
          }
        })
      } else {
        this.$swal('Fill all the required fields')
      }
    },
    checkValidity () {
      if (this.weatherData && this.damData) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
