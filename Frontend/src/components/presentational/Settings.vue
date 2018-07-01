<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Settings</v-card-title>
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs6>
              <v-subheader>Language</v-subheader>
            </v-flex>
            <v-flex xs6>
              <v-select
                :items="items"
                v-model="language"
                label="Select"
                single-line
              ></v-select>
            </v-flex>
            <v-flex xs6>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" flat @click.native="dialog = false">save</v-btn>
                <v-btn color="green darken-1" flat @click.native="dialog = false">close</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'Settings',
  data: () => ({
    dialog: true,
    language: null,
    items: [
      { text: 'English' },
      { text: 'Hindi' },
      { text: 'Gujarati' }
    ]
  })
}
</script>

<style scoped>

</style>
