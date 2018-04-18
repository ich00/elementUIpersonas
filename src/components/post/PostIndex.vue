<template>
  <div id='post-index'>
    <h2>Hola posts</h2>
     <div class="row">
      <div class="col-md-12">
        <div class="alert alert-success">
          {{ messages }}
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="pull-left">
          <h3><strong>LIST DATA POSTS ALL</strong></h3>
        </div>
        <div class="pull-right">
         <router-link :to="'/posts/new'" class="btn btn-lg btn-default">
            New Data
          </router-link>
          <router-link :to="'/'" class="btn btn-lg btn-primary">
            Back to Homepage
          </router-link>
        </div>
      </div>
    </div>
    <hr class="top">
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>elem</th>
          <th>user</th>
          <th>id</th>
          <th>title</th>
          <th>body</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post, index) in posts" v-bind:key="post.id">
          <td><div class="text-center">{{ index+1 }}</div></td>
          <td>{{ post.userId }}</td>
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
         
          <td>
            <router-link v-bind:to="'/posts/edit/' + post.id" class="btn btn-sm btn-warning">
              Edit Data
            </router-link>
            <button @click="destroy(post.id)" class="btn btn-sm btn-danger">
              Delete Data
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'post-index',
  computed: mapGetters({
    posts: 'allPosts',
    messages: 'messages'
  }),
  methods: mapActions([
    'destroy'
  ]),
  created () {
    this.$store.dispatch('getAllPosts')
  }
}
</script>

<style lang="scss" scoped>
  hr {
    margin-top: 0px;
    margin-bottom: 0px;

    &.top{
      margin-bottom: 20px;
    }
  }
</style>
