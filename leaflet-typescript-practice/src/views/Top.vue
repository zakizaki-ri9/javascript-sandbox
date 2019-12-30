<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Top extends Vue {
  title: string = 'TopPage'
}
</script>
