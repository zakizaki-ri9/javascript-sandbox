<template>
  <Layout>
    <g-h1>Hello, world!</g-h1>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
      excepturi labore tempore expedita, et iste tenetur suscipit explicabo!
      Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener"
        >Gridsome Docs</a
      >
      <a
        href="https://github.com/gridsome/gridsome"
        target="_blank"
        rel="noopener"
        >GitHub</a
      >
    </p>
  </Layout>
</template>

<script>
import Vue from 'vue'
import GH1 from '~/components/atmos/GH1.vue'
export default Vue.extend({
  components: {
    GH1
  },
  metaInfo: {
    title: 'Hello, world!'
  }
})
</script>

<style></style>
