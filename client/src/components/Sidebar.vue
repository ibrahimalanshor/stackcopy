<template>
  <aside class="sidebar">
    <ul>
      <li><a href="" class="sidebar-link active">Question</a></li>
      <li><a href="" class="sidebar-link">Jobs</a></li>
      <li><a href="" class="sidebar-link">Chalenges</a></li>
    </ul>
  </aside>
</template>

<style>
  .sidebar {
    @apply w-60 flex-shrink-0 h-screen border-r border-gray-100 py-8 pr-4 hidden sticky top-0 left-0;
  }
  .sidebar-link {
    @apply block py-2 px-3 rounded;
  }
  .sidebar-link:hover, .sidebar-link.active {
    @apply bg-gray-100;
  }

  @screen sm {
    .sidebar {
      @apply block;
    }
  }
</style>