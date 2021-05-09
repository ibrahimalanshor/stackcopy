<template>
  <div>

    <div class="heading">
      <h1 class="h2 heading-title">All Question</h1>
      <p class="heading-sub">Total about 723.223.499 questions</p>
    </div>

    <hr class="line-divider">

    <ul class="row mb-5">
      <li class="col"><a href="" class="heading-link active">Popular</a></li>
      <li class="col"><a href="" class="heading-link">Week</a></li>
      <li class="col"><a href="" class="heading-link">Month</a></li>
      <li class="col"><a href="" class="heading-link">Year</a></li>
    </ul>

    <div class="home-row">
      
      <main class="main">
        
        <home-question v-for="(question, key) in questions" :key="key" :question="question" />

      </main>

      <div class="widget">
        <div class="card">
          <div class="card-header">
            <h2 class="h6">Tags</h2>
          </div>
          <div class="card-body widget-tag">
            <a href="" class="badge bordered widget-tag-link">javascript</a>
            <a href="" class="badge bordered widget-tag-link">python</a>
            <a href="" class="badge bordered widget-tag-link">react</a>
            <a href="" class="badge bordered widget-tag-link">vue.js</a>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import { HomeQuestion } from '@/components/question'

  export default {
    components: {
      HomeQuestion
    },
    data() {
      return {
        questions: [
          {
            title: 'How to store image in redux, image return an empty object',
            tags: ['javascript', 'react'],
            date: '40 secs ago',
            user: 'Roby Cigar'
          },
          {
            title: 'RelatedObjectDoesNotExist at /login/ User has no profile',
            tags: ['python', 'django'],
            date: '1 min ago',
            user: 'Sumithran'
          },
          {
            title: 'replace double backslash with one in python',
            tags: ['pyhton', 'regex'],
            date: '2 min ago',
            user: 'Nessi'
          },
          {
            title: 'How to check all checkboxes on selecting one in Vuejs?',
            tags: ['javascript', 'vue.js'],
            date: '4 min ago',
            user: 'rcbxd'
          },
          {
            title: 'Nats.io multithreading and async',
            tags: ['python', 'pyhton-2.7', 'tornado', 'python-multithreading', 'nats.io'],
            date: '40 secs ago',
            user: 'Roby Cigar'
          },
        ]
      }
    }
  }
</script>

<style>
  .heading-title {
    @apply mb-3;
  }
  .heading-sub {
    @apply text-xl text-gray-500;
  }
  .heading-link {
    @apply text-gray-500;
  }
  .heading-link:hover, .heading-link.active {
    @apply text-gray-800;
  }
  .heading-link.active {
    @apply font-bold;
  }

  .home-row {
    @apply flex flex-wrap;
  }

  .main {
    @apply w-full;
  }

  .widget {
    @apply w-full flex-shrink-0;
  }
  .widget-tag {
    @apply flex flex-wrap;
  }
  .widget-tag-link {
    @apply mr-2 mb-2;
  }

  @screen lg {
    .home-row {
      @apply -mx-5;
    }

    .main {
      @apply w-2/3 px-5;
    }

    .widget {
      @apply w-1/3 px-5;
    }
  }
</style>