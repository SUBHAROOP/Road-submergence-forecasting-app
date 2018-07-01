<template>
  <v-layout row>
    <v-flex>
      <v-form>
        <v-text-field
          label="Dam Name"
          v-model="damName"
          required
        ></v-text-field>
        <v-text-field
          label="Water Release"
          v-model="waterRelease"
          required
        ></v-text-field>
        <v-text-field
          label="Dam Drainage"
          v-model="damDrainage"
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
  name: 'DamInput',
  data: () => ({
    damName: '',
    waterRelease: '',
    damDrainage: '',
    dateOfEvent: null,
    menu: null
  }),
  methods: {
    submit () {
      if (this.checkValidity()) {
        TransactionalDataService.saveDamInput({
          name: this.damName,
          water: this.waterRelease,
          drainage: this.damDrainage,
          date: this.dateOfEvent
        }).then(res => {
          console.log(res)
          if (res.data.msg === 'ADDED') {
            this.$swal('Dam data insert successfully')
          } else {
            this.$swal('Dam data could not be inserted successfully')
          }
        }).catch(err => {
          if (err) {
            this.$swal('Could not save dam data')
          }
        })
      } else {
        this.$swal('Fill up required fields')
      }
    },
    checkValidity () {
      if (this.damName && this.damDrainage && this.waterRelease && this.dateOfEvent) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
