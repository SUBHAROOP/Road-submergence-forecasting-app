<template>
  <gmap-map
    :center="center"
    :zoom="7"
    style="width: 100%; height: 500px"
  >
  </gmap-map>
</template>

<script>
export default {
  data () {
    return {
      center: null,
      markers: null
    }
  },
  props: {
    parentdata1: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  watch: {
    parentdata1: function (newVal) {
      console.log(newVal.markers[0].position)
      this.center = newVal.markers[0].position
      this.markers = newVal.markers
    }
  },
  created () {
    this.center = this.parentdata1.markers[0].position
    this.markers = this.parentdata1.markers
  }
}
</script>
