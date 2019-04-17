<template>
  <div id="resource-content" class="page-content">
    <div v-for="post in posts" :key="post.title" class="post">
      <div class="post-title">{{ post.title }}</div>
      <div class="post-content">{{ post.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      posts: [
        {
          title: "First title",
          content: "First content"
        },
        {
          title: "Second title",
          content: "Second content"
        }
      ]
    };
  }
};
</script>

<style>
.post {
  padding: 0 5px;
}
.post-title {
  font-size: 1.2em;
}

.post-content {
  padding: 0 5px;
}
</style>
