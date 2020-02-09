<template>
  <div>
    <v-btn :loading="loading" @click="search">検索</v-btn>
    <l-map ref="map" style="height: 600px;" :zoom="zoom" :center="center">
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
import axios from 'axios'
import dayjs from 'dayjs'

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
  loading = false

  get connpassUrl(): string {
    return 'https://connpass.com/api/v1/event'
  }

  // クリックしたらマーカーセットするサンプルメソッド
  onClickMap(e: { latlng: LatLng }) {
    if (e && e.latlng) {
      this.markers.push(e.latlng)
    }
  }

  search() {
    this.loading = true
    axios
      .get(this.connpassUrl, {
        params: {
          ymd: dayjs().format('YYYYMMDD')
        },
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(res => {
        // eslint-disable-next-line no-console
        console.log({
          res: res
        })
      })
      .finally(() => {
        this.loading = false
      })
  }
}
</script>
