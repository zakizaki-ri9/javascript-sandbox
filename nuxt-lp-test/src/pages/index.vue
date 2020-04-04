<template>
  <div>
    <h1>{{ title }}</h1>
    <PrimaryButton>test</PrimaryButton>
    <TagLink text="test" href="/" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PrimaryButton from '~/components/atoms/PrimaryButton.vue'
import TagLink from '~/components/atoms/TagLink.vue'

export default Vue.extend({
  components: {
    PrimaryButton,
    TagLink,
  },
  computed: {
    title(): string {
      return 'Hello Nuxt.js'
    },
  },
})
</script>

<style></style>
