<template>
  <div v-on-clickaway="close">
    <div v-on:click="toggle" class="dropdown-toggle">
      <slot name="toggle"></slot>
    </div>
    <transition name="fade">
      <div v-show="open" class="dropdown">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mixin as clickaway } from 'vue-clickaway'

  export default {
    data() {
      return {
        open: false
      }
    },
    mixins: [clickaway],
    methods: {
      close() {
        this.open = false
      },
      toggle() {
        this.open = !this.open
      }
    }
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>