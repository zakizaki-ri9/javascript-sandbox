<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <g-tag-link to="/">
          Home
        </g-tag-link>
        <g-tag-link to="/about/">
          About
        </g-tag-link>
      </nav>
      <slot />
    </header>
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<script lang="ts">
import Vue from 'vue'
import GTagLink from '~/components/atmos/GTagLink.vue'
export default Vue.extend({
  components: {
    GTagLink
  }
})
</script>

<style></style>
