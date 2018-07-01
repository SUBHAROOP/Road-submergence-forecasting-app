<template>
  <v-layout row>
    <v-flex>
      <v-card>
        <panel title="Excel Input"/>
        <v-card-text>
         <h1>Add excel input form</h1>
        </v-card-text>
        <v-card-actions>
          <v-btn color="success" style="width: 100%" @click="submit">submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'ExcelData',
  data: () => ({
    weatherData: '',
    damData: ''
  }),
  methods: {
    submit () {
      console.log('Add this part')
    }
  }
}
</script>
