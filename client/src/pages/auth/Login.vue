<template>
  <div>
    <div class="row items-center">

      <div class="col auth-image">
        <img src="@/assets/login.png" alt="">
      </div>

      <form action="" class="col auth-form">
        <div class="heading">
          <h1 class="h2 heading-title">Login</h1>
          <p class="heading-sub">Login to access your account</p>
        </div>

        <hr class="line-divider">

        <div class="form">
          <label>Email</label>
          <input type="email" class="input" placeholder="Email">
        </div>
        <div class="form">
          <label>Password</label>
          <input type="password" class="input" placeholder="Password">
        </div>
        <button class="button black mr-2">Login</button>
        <router-link :to="{ name: 'Register' }" class="button white border">Register</router-link>
      </form>

    </div>
  </div>
</template>

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