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
                label="Select"
                required
                single-line
              ></v-select>
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
      districtName: [],
      tehsilName: []
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
    submit () {
      if (this.checkValidity()) {
        this.$emit('interface', {
          district: this.district.text,
          tehsil: this.tehsil.text
        })
      } else {
        this.$swal('Please fill up the required fields')
      }
    },
    checkValidity () {
      if (this.district.text && this.tehsil.text) {
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
  }
}
</script>
