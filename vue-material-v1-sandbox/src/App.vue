<template>
  <md-app md-mode="reveal">
    <md-app-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">Vue Material v1 Practice</span>
    </md-app-toolbar>

    <md-app-drawer :md-active.sync="menuVisible" style="width: 300px;">
      <md-toolbar class="md-transparent" md-elevation="0">
        SideNav
      </md-toolbar>

      <md-list>
        <div>
          <md-list-item>
            <md-icon>pan_tool</md-icon>
            <router-link to="/helloworld" @click.native="menuVisible = false">
              <span class="md-list-item-text">HelloWorld</span>
            </router-link>
          </md-list-item>
        </div>
      </md-list>
    </md-app-drawer>

    <md-app-content>
      <router-view />
    </md-app-content>
  </md-app>
</template>

<script>
export default {
  data() {
    return {
      menuVisible: false
    }
  }
}
</script>
