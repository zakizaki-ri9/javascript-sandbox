<template>
  <md-drawer :md-permanent="permanent">
    <md-toolbar class="md-transparent" md-elevation="0">SideNav</md-toolbar>

    <md-list>
      <template v-for="(menu, i) in menus">
        <md-list-item v-if="!!menu.label" :key="i">
          <md-icon>{{ menu.mdIcon }}</md-icon>
          <router-link
            :to="menu.path"
            @click.native="onRouterLinkClicked(menu)"
          >
            <span class="md-list-item-text">{{ menu.label }}</span>
          </router-link>
        </md-list-item>
      </template>
    </md-list>
  </md-drawer>
</template>

<script>
import { routes } from '../../router'

/**
 * @vuese
 * @group global
 * サイドバー
 */
export default {
  props: {
    // `md-permanent` に指定する値
    permanent: {
      type: String,
      default: 'clipped'
    }
  },
  computed: {
    menus() {
      return routes
    }
  },
  methods: {
    onRouterLinkClicked(menu) {
      /**
       * @arg `router/index.js` に定義されているオブジェクト
       * メニューアイテムがクリックされた際の処理
       */
      this.$emit('menuclick', menu)
    }
  }
}
</script>

<style lang="scss" scoped></style>
