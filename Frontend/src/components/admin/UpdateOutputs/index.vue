<template>
  <v-layout row>
    <v-flex>
      <panel title="Update Outputs"/>
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
              <v-subheader>Output</v-subheader>
              <v-select
                :items="outputName"
                v-model="output"
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
import AdminUpdateOutput from '../../../services/AdminUpdateOutput'
export default {
  name: 'UserQuery',
  data () {
    return {
      district: {text: ''},
      tehsil: {text: ''},
      village: {text: ''},
      output: {text: ''},
      districtName: [],
      tehsilName: [],
      villageName: [],
      outputName: [],
      dateOfEvent: null,
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
        AdminUpdateOutput.saveOutput({
          district: this.district.text,
          tehsil: this.tehsil.text,
          village: this.village.text,
          dateOfEvent: this.dateOfEvent,
          output: this.output.text
        }).then(res => {
          console.log(2)
        })
      } else {
        this.$swal('Please fill up the required fields')
      }
    },
    checkValidity () {
      if (this.district.text && this.tehsil.text && this.dateFrom && this.dateOfEvent) {
        return true
      } else {
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

    UserQueryService.getOutput().then(res => {
      this.outputName = res
    }).catch(err => {
      if (err) {
        this.$swal('Outputs not defined ')
      }
    })
  }
}
</script>
