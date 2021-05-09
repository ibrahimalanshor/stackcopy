<template>
  <nav class="navbar">
    <div class="container">
      <div class="row navbar-row">
        <ul class="col navbar-nav">
          <li v-for="(nav, key) in navs" :key="key"><router-link :to="{ name: nav.to }" class="col navbar-link" :class="{ 'active': active === nav.name }">{{ nav.name }}</router-link></li>
        </ul>
        <div class="col navbar-toggle">
          <button v-on:click="toggleSidebar">
            <i class="fa fa-bars"></i>
          </button>
        </div>
        <form action="" class="col navbar-form">
          <input type="search" class="navbar-search input borderless nofocus" placeholder="Search">
        </form>
        <ul class="row col">
          <li class="col"><router-link :to="{ name: 'Login' }" class="button white">Login</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    data() {
      return {
        navs: [
          {
            to: 'Home',
            name: 'Home'
          },
          {
            to: 'Home',
            name: 'Question'
          }
        ]
      }
    },
    computed: {
      active() {
        return this.$route.name
      }
    },
    methods: {
      ...mapMutations(['toggleSidebar'])
    }
  }
</script>

<style>
  .navbar {
    @apply h-16 bg-gray-800 text-white flex items-center;
  }
  .navbar-row {
    @apply items-center;
  }
  .navbar-nav {
    @apply items-center hidden -mx-2;
  }
  .navbar-link {
    @apply text-gray-400;
  }
  .navbar-link:hover, .navbar-link.active {
    @apply text-gray-100;
  }
  .navbar-form {
    @apply flex-grow;
  }
  .navbar-search {
    @apply text-gray-800;
  }

  @screen sm {
    .navbar-nav {
      @apply flex;
    }
    .navbar-toggle {
      @apply hidden;
    }
  }
</style>