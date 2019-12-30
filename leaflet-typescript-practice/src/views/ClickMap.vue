<template>
  <div>
    <l-map
      ref="map"
      style="height: 600px;"
      :zoom="zoom"
      :center="center"
      @click="onClickMap"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker
        v-for="(marker, index) in markers"
        :key="index"
        :lat-lng="marker"
        :icon="icon"
      ></l-marker>
    </l-map>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
import { Icon, LatLng } from 'leaflet'

@Component({
  components: { LMap, LTileLayer, LMarker }
})
export default class LeafletMap extends Vue {
  url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
  zoom = 8
  center = [35.693825, 139.703356]
  markers: LatLng[] = []
  icon: Icon = new Icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png')
  })
  onClickMap(e: { latlng: LatLng }) {
    if (e && e.latlng) {
      this.markers.push(e.latlng)
    }
  }
}
</script>
