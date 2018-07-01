<template>
  <v-app>
    <v-container>
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script>
import storage from 'local-storage-fallback'
export default {
  name: 'App',
  created () {
    // Set locale
    if (storage.getItem('locale')) {
      this.$lang.setLang(storage.getItem('locale'))
    } else {
      this.$lang.setLang('en')
    }
  }
}
</script>
