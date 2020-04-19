<template>
  <Layout>
    <small>投稿日時：{{ $context.date }}</small>
    <h1>{{ $context.title }}</h1>
    <hr />
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="$context.content"></div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: `${this.$context.title}`
    }
  }
}
</script>
