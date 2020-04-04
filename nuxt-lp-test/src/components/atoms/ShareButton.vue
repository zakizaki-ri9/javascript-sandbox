<template>
  <button ref="target" class="el_btn" @click="onClicked">
    <slot>
      Button
    </slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    onClicked(e: MouseEvent): void {
      this.$emit('click', e)
      if (this.$refs.target) {
        ;(this.$refs.target as HTMLElement).blur()
      }
    },
  },
})
</script>

<style module></style>
