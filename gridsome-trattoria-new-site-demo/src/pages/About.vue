<template>
  <Layout>
    <g-h1>About us</g-h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque
      omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum
      odit fugit assumenda rem dolores inventore iste reprehenderit maxime!
      Iusto.
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
    title: 'About us'
  }
})
</script>
