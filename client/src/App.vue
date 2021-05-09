<template>
  <div id="app">
    <navbar />
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
import { Navbar, Sidebar, Drawer } from './components'

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
    Drawer
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
  }
}
</script>