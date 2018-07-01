<template>
  <v-layout row>
    <v-flex>
      <v-card>
        <panel title="Bulk Entry"/>
        <v-card-text>
          <api-endpoints/>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import ApiEndpoints from './ApiEndpoints'
export default {
  components: {
    ApiEndpoints
  }
}

</script>
