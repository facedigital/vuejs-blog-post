// App.vue
<template lang="html">
  <div class="container"> 
    <div v-if="selectedPost == null">
      <h1>Blog Posts</h1>
      <ul>
        <li v-for="post in posts">
          <a href="javascript: void(0)" @click="mostrarPost(post)">{{post.title}}</a>
        </li>
      </ul>
    </div>
    <div v-else>
      <h1>{{selectedPost.title}}</h1>
      <p>{{selectedPost.body}}</p>
      <button @click="selectedPost = null">Voltar</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default 
{
  mounted() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.posts = response.data;
        // console.table(response.data);
      })
      // .then(response => (this.posts = response.data))
  },
  methods: {
    mostrarPost(post) {
      this.selectedPost = post;
    }
  },
  data() {
    return {
      bundler: "Webpack",
      selectedPost: null,
      posts: [{
        id: 1,
        title: 'Hello world',
        body: 'Lorem ipsum dolor sit amet'
      }]
    };
  }
};
</script>

<style lang="scss" scoped>
.container 
{
  h1 {
    color: green;
  }
}
</style>