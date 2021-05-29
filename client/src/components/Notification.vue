<template>
  <div class="notification" v-show="notification.active">
    <div class="container">
      {{ notification.text }}
      <button v-on:click="destroyNotification">
        <i class="fa fa-times"></i>
      </button>
    </div>
  </div>
</template>

<style>
  .notification {
    @apply bg-green-50 border-b border-green-100 text-green-700 py-4;
  }
  .notification .container {
    @apply flex items-center justify-between;
  }
</style>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    computed: {
      ...mapState(['notification'])
    },
    methods: {
      ...mapMutations(['destroyNotification'])
    }
  }
</script>