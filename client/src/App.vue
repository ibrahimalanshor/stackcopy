<template>
  <div id="app">
    <navbar />

    <notification />

    <drawer />

    <div class="container flex">
        
      <sidebar />

      <main class="wrapper">        
        <router-view />
        <vue-progress-bar />
      </main>

    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Navbar, Sidebar, Drawer, Notification } from './components'

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
    Drawer,
    Notification
  },
  watch: {
    $route(to) {
      if (to.name === 'Home') {
        this.get(to.query.page)
      }
    }
  },
  methods: {
    ...mapActions('question', ['get']),
  },
  created() {
    this.$Progress.start()

    this.$router.beforeEach((to, from, next) => {
      this.$Progress.start()

      next()
    })

    this.$router.afterEach(() => {
      this.$Progress.finish()
    })

  },
  mounted() {
    this.$Progress.finish()
    this.get(this.$route.query.page)
  }
}
</script>