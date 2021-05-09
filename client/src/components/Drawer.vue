<template>
  <div class="drawer">
    <div class="drawer-heading">
      <h2 class="h6">Stackcopy</h2>
      <button>
        <i class="fa fa-times"></i>
      </button>
    </div>
    <ul class="drawer-menu">
      <li class="drawer-list"><a href="" class="drawer-link active">Question</a></li>
      <li class="drawer-list"><a href="" class="drawer-link">Articles</a></li>
      <li class="drawer-list"><a href="" class="drawer-link">Jobs</a></li>
      <li class="drawer-list"><a href="" class="drawer-link">Chalenges</a></li>
    </ul>
  </div>
</template>

<style>
  .drawer {
    @apply fixed top-0 left-0 w-72 h-screen bg-white border-r;
  }
  .drawer-heading {
    @apply h-16 border-b border-gray-100 p-4 flex items-center justify-between;
  }
  .drawer-menu {
    @apply p-4;
  }
  .drawer-list {
    @apply mb-4;
  }
  .drawer-link {
    @apply text-gray-500;
  }
  .drawer-link:hover, .drawer-link.active {
    @apply text-gray-800;
  }

  @screem sm {
    .drawer {
      @apply hidden;
    }
  }
</style>