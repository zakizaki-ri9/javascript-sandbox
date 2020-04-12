<template>
  <Layout>
    <g-h1>Level1 Heading</g-h1>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <g-txt>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
      excepturi labore tempore expedita, et iste tenetur suscipit explicabo!
      Dolores, aperiam non officia eos quod asperiores
    </g-txt>

    <g-h2>Level2 Heading</g-h2>

    <!-- <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener"
        >Gridsome Docs</a
      >
      <a
        href="https://github.com/gridsome/gridsome"
        target="_blank"
        rel="noopener"
        >GitHub</a
      >
    </p> -->
  </Layout>
</template>

<script>
import Vue from 'vue'
import GH1 from '~/components/atmos/GH1.vue'
import GH2 from '~/components/atmos/GH2.vue'
import GTxt from '~/components/atmos/GTxt.vue'
export default Vue.extend({
  components: {
    GH1,
    GH2,
    GTxt
  },
  metaInfo: {
    title: 'Hello, world!'
  }
})
</script>

<style></style>
