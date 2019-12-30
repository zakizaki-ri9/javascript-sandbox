<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense nav>
        <v-list-item
          v-for="(route, index) in navigationRoutes"
          :key="index"
          link
        >
          <v-list-item-content>
            <v-list-item-title>
              <router-link :to="route.path">{{ route.title }}</router-link>
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
import { routes } from '@/router'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  drawer = false

  get navigationRoutes(): { path: string; title: string }[] | [] {
    const filteredRoutes = routes
      .filter(route => !!route.title)
      .map(route => {
        return {
          path: route.path,
          title: route.title || ''
        }
      })
    return filteredRoutes || []
  }
}
</script>

<style lang="scss"></style>
