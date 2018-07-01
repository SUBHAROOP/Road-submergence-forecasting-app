<template>
  <v-layout row>
    <v-flex>
      <v-card>
        <v-card-text>
          <v-layout row>
            <v-flex xs3>
              <v-subheader>District</v-subheader>
              <v-select
                :items="districtName"
                v-model="district"
                v-on:change="getTehsilName"
                label="Select"
                single-line
                required
              ></v-select>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs3>
              <v-subheader>Tehsil</v-subheader>
              <v-select
                :items="tehsilName"
                v-model="tehsil"
                v-on:change="getVillageName"
                label="Select"
                required
                single-line
              ></v-select>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs3>
              <v-subheader>Villages</v-subheader>
              <v-select
                :items="villageName"
                v-model="village"
                label="Select"
                single-line
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs3>
              <v-menu
                ref="menu1"
                lazy
                :close-on-content-click="false"
                v-model="menu1"
                transition="scale-transition"
                offset-y
                full-width
                :nudge-right="40"
                min-width="290px"
                :return-value.sync="dateFrom"
              >
                <v-text-field
                  slot="activator"
                  label="Date From"
                  required
                  v-model="dateFrom"
                  prepend-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="dateFrom" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="menu1 = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.menu1.save(dateFrom)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs3>
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
                :return-value.sync="dateTo"
              >
                <v-text-field
                  slot="activator"
                  label="Date To"
                  required
                  v-model="dateTo"
                  prepend-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="dateTo" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="menu2 = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.menu2.save(dateTo)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-flex>
            <v-spacer></v-spacer>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-btn color="success" style="width: 100%" @click="submit">Submit</v-btn>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import UserQueryService from '../../mockServices/UserQueryService'
export default {
  name: 'UserQuery',
  data () {
    return {
      district: {text: ''},
      tehsil: {text: ''},
      village: {text: ''},
      districtName: [],
      tehsilName: [],
      villageName: [],
      dateFrom: null,
      dateTo: null,
      menu1: false,
      menu2: false
    }
  },
  methods: {
    getTehsilName () {
      UserQueryService.getTehsilNames({district: this.district}).then(res => {
        console.log(res)
        this.tehsilName = res
      }).catch(err => {
        if (err) {
          this.$swal('District Name ')
        }
      })
    },
    getVillageName () {
      UserQueryService.getVillageNames({tehsil: this.tehsil}).then(res => {
        console.log(res)
        this.villageName = res
      }).catch(err => {
        if (err) {
          this.$swal('Village Name ')
        }
      })
    },
    submit () {
      if (this.checkValidity()) {
        this.$emit('interface', {
          district: this.district.text,
          tehsil: this.tehsil.text,
          village: this.village.text,
          dateFrom: this.dateFrom,
          dateTo: this.dateTo
        })
      } else {
        this.$swal('Please fill up the required fields')
      }
    },
    checkValidity () {
      if (this.dateFrom > new Date() || this.dateTo > new Date()) {
        return false
      } else if (this.dateFrom > this.dateTo) {
        return false
      } else if (this.district.text && this.tehsil.text && this.dateFrom && this.dateTo) {
        return true
      } else {
        return false
      }
    }
  },
  created () {
    UserQueryService.getDistrictNames().then(res => {
      console.log(res)
      this.districtName = res
    }).catch(err => {
      if (err) {
        this.$swal('District Name ')
      }
    })
  }
}
</script>
