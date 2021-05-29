<template>
  <div>
    <div class="row items-center">

      <div class="col auth-image">
        <img src="@/assets/register.png" alt="">
      </div>

      <form action="" class="col auth-form" v-on:submit.prevent="process">
        <div class="heading">
          <h1 class="h2 heading-title">Register</h1>
          <p class="heading-sub">Register to access our features</p>
        </div>

        <hr class="line-divider">

        <div class="form">
          <label>Name</label>
          <input type="text" class="input" :class="{ 'error': errors.name.error }" placeholder="Name" v-model="name">

          <small class="form-error" v-if="errors.name.error">{{ errors.name.text }}</small>
        </div>
        <div class="form">
          <label>Email</label>
          <input type="email" class="input" :class="{ 'error': errors.email.error }" placeholder="Email" v-model="email">

          <small class="form-error" v-if="errors.email.error">{{ errors.email.text }}</small>
        </div>
        <div class="form">
          <label>Password</label>
          <input type="password" class="input" :class="{ 'error': errors.password.error }" placeholder="Password" v-model="password">

          <small class="form-error" v-if="errors.password.error">{{ errors.password.text }}</small>
        </div>
        <button class="button black mr-2" :disabled="loading">Register</button>
        <router-link :to="{ name: 'Login' }" class="button white border">Login</router-link>
      </form>

    </div>
  </div>
</template>

<script>
  import { mapActions, mapMutations } from 'vuex'

  const errors = {
    name: {
      error: false,
      text: null
    },
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
        name: '',
        email: '',
        password: '',
        loading: false,
        errors: {...errors}
      }
    },
    methods: {
      ...mapActions('auth', ['register']),
      ...mapMutations(['createNotification']),
      async process() {
        this.loading = true

        try {
          await this.register({
            name: this.name,
            email: this.email,
            password: this.password,
          })

          this.createNotification('Register Success');

          this.$router.push({ name: 'Login' })
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