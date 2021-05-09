<template>
  <div id="app">
    <navbar />
    <drawer />

    <div class="container flex">
        
      <sidebar />

      <router-view />

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
  }
}
</script>