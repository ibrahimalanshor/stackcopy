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
          <li class="col" v-if="login">
            <dropdown>
              <template v-slot:toggle>
                <img :src="user.photo" class="w-8 h-8 object-cover rounded-full">
              </template>

              <ul class="dropdown-menu">
                <li class="dropdown-item dropdown-header"><a href="" class="dropdown-link">
                  <span class="navbar-user-name">{{ user.name }}</span>
                  <small class="navbar-user-username">@{{ user.username }}</small>
                </a></li>
                <li class="dropdown-item"><a class="dropdown-link" href="">Profile</a></li>
                <li class="dropdown-item"><a class="dropdown-link" href="#" v-on:click="logout">Logout</a></li>
              </ul>
            </dropdown>
          </li>
          <li class="col" v-else><router-link :to="{ name: 'Login' }" class="button white">Login</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapMutations, mapState, mapGetters } from 'vuex'
  import Dropdown from './Dropdown'

  export default {
    components: {
      Dropdown
    },
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
      ...mapState('auth', ['login']),
      ...mapGetters('auth', ['user']),
      active() {
        return this.$route.name
      }
    },
    methods: {
      ...mapMutations(['toggleSidebar']),
      ...mapMutations('auth', ['logout']),
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
  .navbar-user-name {
    @apply text-gray-800 font-semibold block;
  }
  .navbar-user-username {
    @apply text-gray-500;
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