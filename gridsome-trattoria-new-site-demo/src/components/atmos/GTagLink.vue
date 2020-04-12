<template>
  <g-link class="el_tag el_tag__link" :to="to">
    <slot />
  </g-link>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    to: {
      type: String,
      required: true
    }
  }
})
</script>

<style></style>
