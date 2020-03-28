<template>
  <h1>{{ title }}</h1>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    title(): string {
      return 'Hello Nuxt.js'
    }
  }
})
</script>

<style>

</style>