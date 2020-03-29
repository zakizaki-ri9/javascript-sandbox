<template>
  <div>
    <h1>{{ title }}</h1>
    <PrimaryButton>test</PrimaryButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PrimaryButton from '~/components/atoms/PrimaryButton.vue'

export default Vue.extend({
  components: {
    PrimaryButton
  },
  computed: {
    title(): string {
      return 'Hello Nuxt.js'
    }
  }
})
</script>

<style>

</style>