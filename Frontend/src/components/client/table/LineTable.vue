<template>
  <v-card>
    <v-card-text>
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-content v-for="header in headers" :key="header.value">
            <v-list-tile-title v-text="header.text"></v-list-tile-title>
            <v-divider class="thin-divider"/>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar v-for="item in items" :key="item.value">
          <v-list-tile-content v-for="eachItem in item.each" :key="eachItem.value">
            <v-list-tile-title v-text="eachItem.text"></v-list-tile-title>
            <v-spacer/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import * as Utils from '../../../utils/util'
export default{
  props: {
    parentdata1: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      headers: null,
      items: null
    }
  },
  mounted () {
    this.headers = Utils.prepareLineChartTableHeaders(this.parentdata1)
    this.items = Utils.prepareLineChartTableItems(this.parentdata1)
  },
  watch: {
    parentdata1: function (newVal) {
      this.headers = Utils.prepareLineChartTableHeaders(newVal)
      this.items = Utils.prepareLineChartTableItems(newVal)
    }
  }
}
</script>
<style scoped>
  .thin-divider{
    flex: 0!important;
  }
</style>
