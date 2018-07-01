<template>
  <v-toolbar dark color="primary">
    <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>
<script>
export default {
  name: 'Header',
  props: ['title', 'color']
}
</script>
