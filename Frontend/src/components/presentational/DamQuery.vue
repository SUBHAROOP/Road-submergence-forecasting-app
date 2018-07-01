<template>
  <v-layout row>
    <v-flex>
      <v-card>
        <v-card-text>
          <v-layout row>
            <v-flex xs3>
              <v-select
                :items="damName"
                v-model="dam"
                label="Dam Name"
                single-line
              ></v-select>
            </v-flex>
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
import DamService from '../../mockServices/DamService'

export default {
  name: 'DamQuery',
  data () {
    return {
      dam: {text: ''},
      damName: [],
      dateFrom: null,
      dateTo: null,
      menu1: false,
      menu2: false
    }
  },
  methods: {
    submit () {
      if (this.checkValidity()) {
        this.$emit('interface', {
          dam: this.dam.text,
          dateFrom: this.dateFrom,
          dateTo: this.dateTo
        })
      } else {
        this.$swal('PLease enter all required fiends ')
      }
    },
    checkValidity () {
      if (this.dateFrom > new Date() || this.dateTo > new Date()) {
        return false
      } else if (this.dateFrom > this.dateTo) {
        return false
      } else if (this.dam.text && this.dateFrom && this.dateTo) {
        return true
      } else {
        return false
      }
    }
  },
  created () {
    // this.damName = DamService.getDamName()
    DamService.getDamName().then(res => {
      this.damName = res
    }).catch(err => {
      if (err) {
        this.$swal('District Name ')
      }
    })
  }
}
</script>
