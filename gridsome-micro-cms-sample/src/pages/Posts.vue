<template>
  <Layout>
    <h1>Posts</h1>
    <ul>
      <li v-for="edge in $page.posts.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">{{
          `${edge.node.date} - ${edge.node.title}`
        }}</g-link>
      </li>
    </ul>
  </Layout>
</template>

<script>
export default {}
</script>

<page-query>
  query {
    posts: allMicroCms {
      edges {
        node {
          path
          date
          title
        }
      }
    }
  }
</page-query>
