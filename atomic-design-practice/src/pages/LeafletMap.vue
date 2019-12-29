<template>
  <div>
    <l-map ref="map" style="height: 600px;" :zoom="zoom" :center="center">
      <l-tile-layer :url="url"></l-tile-layer>
    </l-map>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { LMap, LTileLayer } from 'vue2-leaflet'

@Component({
  components: { LMap, LTileLayer }
})
export default class LeafletMap extends Vue {
  url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
  zoom = 8
  center = [35.693825, 139.703356]
}
</script>
