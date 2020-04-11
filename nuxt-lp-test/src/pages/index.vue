<template>
  <div>
    <header-menu>
      <a href="#">サンプル1</a>
      <a href="#">サンプル2</a>
    </header-menu>
    <h1>{{ title }}</h1>
    <primary-button>
      test
    </primary-button>
    <tag-link text="test" href="/" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PrimaryButton from '~/components/atoms/PrimaryButton.vue'
import TagLink from '~/components/atoms/TagLink.vue'
import HeaderMenu from '~/components/atoms/HeaderMenu.vue'

export default Vue.extend({
  components: {
    PrimaryButton,
    TagLink,
    HeaderMenu,
  },
  computed: {
    title(): string {
      return 'Hello Nuxt.js'
    },
  },
})
</script>

<style></style>
