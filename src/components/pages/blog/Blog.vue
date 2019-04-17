<template>
  <div id="resource-content" class="page-content">
    <div id="blog-flex">
      <div id="blog-abstracts">
        <div v-for="post in posts" :key="post.title" class="post">
          <div class="post-title">{{ post.title }}</div>
          <div class="post-content">{{ post.content }}</div>Read more
        </div>
      </div>
      <div id="blog-sidebar">
        <div v-for="post in posts" :key="post.title" class="post">
          <div class="post-title">{{ post.title }}</div>
        </div>
      </div>
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
#blog-flex {
  display: flex;
  flex-direction: row;
}

#blog-abstracts {
}

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
