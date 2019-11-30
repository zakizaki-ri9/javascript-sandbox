<template>
  <!-- <main>
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">Vue Material v1 Practice</span>
    </md-toolbar>

    <md-drawer :md-active.sync="menuVisible" style="width: 300px;">
      <md-toolbar class="md-transparent" md-elevation="0">SideNav</md-toolbar>

      <md-list>
        <template v-for="(menu, i) in menus">
          <md-list-item v-if="!!menu.label" :key="i">
            <md-icon>{{ menu.mdIcon }}</md-icon>
            <router-link :to="menu.path" @click.native="menuVisible = false">
              <span class="md-list-item-text">{{ menu.label }}</span>
            </router-link>
          </md-list-item>
        </template>
      </md-list>
    </md-drawer>

    <md-content class="container">
      <router-view />
    </md-content>
  </main>-->
  <main style="height: 100vh; width: 100%;">
    <md-toolbar class="md-primary" ref="toolbar">
      <span class="md-title">Vue Material v1 Practice</span>
    </md-toolbar>
    <div class="base flex" :style="baseStyles">
      <md-drawer md-permanent="clipped">
        <md-toolbar class="md-transparent" md-elevation="0">SideNav</md-toolbar>

        <md-list>
          <template v-for="(menu, i) in menus">
            <md-list-item v-if="!!menu.label" :key="i">
              <md-icon>{{ menu.mdIcon }}</md-icon>
              <router-link :to="menu.path" @click.native="menuVisible = false">
                <span class="md-list-item-text">{{ menu.label }}</span>
              </router-link>
            </md-list-item>
          </template>
        </md-list>
      </md-drawer>

      <div class="container">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script>
import { routes } from './router'
export default {
  data() {
    return {
      menuVisible: false,
      toolbarHeight: 0
    }
  },
  computed: {
    menus() {
      return routes
    },
    /**
     * div.base.flex のスタイル
     * @returns {Object}
     */
    baseStyles() {
      // vue-materialのmd-toolbarの高さ変動に合わせて調整
      let height = this.toolbarHeight
        ? `calc(100% - ${this.toolbarHeight}px)`
        : '100%'
      return {
        height: height
      }
    }
  },
  methods: {
    onWindowResize() {
      this.toolbarHeight = this.$refs.toolbar.$el.clientHeight
    }
  },
  mounted() {
    window.addEventListener('resize', this.onWindowResize)
    this.onWindowResize()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize)
  }
}
</script>

<style lang="scss" scoped>
.base {
  margin: 0px;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  .container {
    @extend .base;
    padding: 5px;
  }
}
.flex {
  display: flex;
}
</style>
