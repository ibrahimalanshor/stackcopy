<template>
  <div>
    <div class="row items-center">

      <div class="col auth-image">
        <img src="@/assets/login.png" alt="">
      </div>

      <form action="" class="col auth-form" v-on:submit.prevent="process">
        <div class="heading">
          <h1 class="h2 heading-title">Login</h1>
          <p class="heading-sub">Login to access your account</p>
        </div>

        <hr class="line-divider">

        <div class="form">
          <label>Email</label>
          <input type="email" class="input" :class="{ 'error': errors.email.error }" placeholder="Email" v-model="email" autofocus>

          <small class="form-error" v-if="errors.email.error">{{ errors.email.text }}</small>
        </div>
        <div class="form">
          <label>Password</label>
          <input type="password" class="input" :class="{ 'error': errors.password.error }" placeholder="Password" v-model="password">
          
          <small class="form-error" v-if="errors.password.error">{{ errors.password.text }}</small>
        </div>
        <button class="button black mr-2" :disabled="loading">Login</button>
        <router-link :to="{ name: 'Register' }" class="button white border">Register</router-link>
      </form>

    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  const errors = {
    email: {
      error: false,
      text: null
    },
    password: {
      error: false,
      text: null
    }
  }

  export default {
    data() {
      return {
        email: '',
        password: '',
        errors: {...errors},
        loading: false
      }
    },
    methods: {
      ...mapActions('auth', ['login']),
      async process() {
        this.loading = true

        try {
          await this.login({
            email: this.email,
            password: this.password
          })

          this.$router.push({ name: 'Home' })
        } catch (err) {
          if (err.response.status === 422) {
            this.errors = {...errors}
            this.addError(err.response.data.errors)
          }
        } finally {
          this.loading = false
        }
      },
      addError(errors) {
        errors.forEach(({ msg, param }) => {
          this.errors[param] = {
            error: true,
            text: msg
          }
        })
      }
    }
  }
</script>

<style>
  .auth-image {
    @apply w-1/2 hidden;
  }
  .auth-form {
    @apply w-full;
  }

  @screen lg {
    .auth-image {
      @apply block;
    }
    .auth-form {
      @apply w-1/2;
    }
  }
</style>