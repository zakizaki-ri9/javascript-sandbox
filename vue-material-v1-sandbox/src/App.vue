<template>
  <main style="height: 100vh; width: 100%;">
    <md-toolbar class="md-primary" ref="toolbar">
      <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">Vue Material v1 Practice</span>
    </md-toolbar>
    <div class="base flex" :style="baseStyles">
      <side-nav v-if="menuVisible" @menuclick="onMenuClicked" />
      <div class="container">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script>
import SideNav from './components/global/SideNav'
export default {
  components: {
    SideNav
  },
  data() {
    return {
      menuVisible: false,
      toolbarHeight: 0
    }
  },
  computed: {
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
    },
    onMenuClicked() {
      this.menuVisible = false
    }
  },
  mounted() {
    this.$refs.toolbar.$el.addEventListener('resize', this.onWindowResize)
    this.onWindowResize()
  },
  beforeDestroy() {
    this.$refs.toolbar.$el.removeEventListener('resize', this.onWindowResize)
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
