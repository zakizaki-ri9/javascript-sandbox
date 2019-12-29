<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense nav>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>
              <router-link to="/">Top</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>
              <router-link to="/map">Map</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  drawer = false
}
</script>

<style lang="scss"></style>
