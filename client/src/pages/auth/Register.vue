<template>
  <div>
    <div class="row items-center">

      <div class="col auth-image">
        <img src="@/assets/register.png" alt="">
      </div>

      <form action="" class="col auth-form">
        <div class="heading">
          <h1 class="h2 heading-title">Register</h1>
          <p class="heading-sub">Register to access our features</p>
        </div>

        <hr class="line-divider">

        <div class="form">
          <label>Name</label>
          <input type="text" class="input" placeholder="Name">
        </div>
        <div class="form">
          <label>Email</label>
          <input type="email" class="input" placeholder="Email">
        </div>
        <div class="row">
          <div class="col">
            <div class="form">
              <label>Password</label>
              <input type="password" class="input" placeholder="Password">
            </div>
          </div>
          <div class="col">
            <div class="form">
              <label>Confirm Password</label>
              <input type="password" class="input" placeholder="Confirm Password">
            </div>
          </div>
        </div>
        <button class="button black mr-2">Register</button>
        <router-link :to="{ name: 'Login' }" class="button white border">Login</router-link>
      </form>

    </div>
  </div>
</template>