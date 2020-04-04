<template>
  <a class="tag_link" :href="href">
    {{ text }}
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" module>
.tag_link {
  border: 2px solid transparent;
  text-decoration: none;
  transition: 0.25s;
  &:focus,
  &:hover {
    border-color: currentColor;
    background-color: white;
    color: var(--color-text);
  }
}
</style>
