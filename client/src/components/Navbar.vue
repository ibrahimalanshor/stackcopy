<template>
  <nav class="navbar">
    <div class="container">
      <div class="row navbar-row">
        <ul class="col navbar-nav">
          <li><a href="" class="col navbar-link active">Question</a></li>
          <li><a href="" class="col navbar-link">Post</a></li>
          <li><a href="" class="col navbar-link">Jobs</a></li>
        </ul>
        <div class="col navbar-toggle">
          <button>
            <i class="fa fa-bars"></i>
          </button>
        </div>
        <form action="" class="col navbar-form">
          <input type="search" class="navbar-search input" placeholder="Search">
        </form>
        <ul class="row col">
          <li class="col"><a href="" class="button white">Login</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

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

  @screen sm {
    .navbar-nav {
      @apply flex;
    }
    .navbar-toggle {
      @apply hidden;
    }
  }
</style>