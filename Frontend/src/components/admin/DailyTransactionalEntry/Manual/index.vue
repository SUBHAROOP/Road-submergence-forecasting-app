<template>
  <v-layout row>
    <v-flex>
      <v-card>
        <panel title="ManualDataEntry"/>
        <v-tabs
          color="cyan"
          dark
          slider-color="yellow"
        >
          <v-tab
            :key="1"
            ripple
          >
            Dam Input
          </v-tab>
          <v-tab
            :key="2"
            ripple
          >
            Rainfall Input
          </v-tab>
          <v-tab-item
            :key="1"
          >
            <v-card flat>
              <v-card-text><dam-input/></v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item
            :key="2"
          >
            <v-card flat>
              <v-card-text><rainfall-input/></v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import DamInput from './DamInput'
import RainfallInput from './RainfallInput'
export default {
  name: 'ManualEntry',
  components: {
    DamInput,
    RainfallInput
  },
  data: () => ({
    model: 'tab-1'
  })
}
</script>
