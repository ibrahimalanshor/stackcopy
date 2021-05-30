<template>
  <div v-if="question">

    <div class="heading">
      <h1 class="h2 heading-title">{{ question.title }}</h1>
      <ul class="row">
        <li class="col">
          <span class="question-meta">Asked</span>
          <span>{{ question.date }}</span>
        </li>
        <li class="col">
          <span class="question-meta">Active</span>
          <span>{{ question.date }}</span>
        </li>
        <li class="col">
          <span class="question-meta">Viewed</span>
          <span>152 times</span>
        </li>
      </ul>
    </div>

    <hr class="line-divider">

    <div class="home-row">
      <main class="main mb-5">
        <article class="article content" v-html="question.content"></article>

        <hr class="line-divider">

        <div class="question-filter">
          <span class="question-countanswer">2 Answer</span>
          <div class="flex items-center border rounded px-4 py-2 cursor-pointer">
            <span class="mr-3">Active</span>
            <i class="fa fa-caret-down"></i>
          </div>
        </div>

        <div>
          <div class="question-answer content">
            <p>
              Uncompressed JPEG and PNG are non-trivial, and the results would likely have portability issues. Your simplest option might be TGA:
            </p>
            <p>
              If your data is not in BGR/BGRA order and you can't or don't want to convert it, my second recommendation would be TIFF:
            </p>
          </div>
          <div class="question-answer-data">
            <div class="question-answer-link">
              <a href="" class="mr-2">Share</a>
              <a href="">Follow</a>
            </div>
            <div class="question-answer-user">
              <img src="@/assets/user.jpg" class="question-answer-userimage">
              <div>
                <a href="" class="question-answer-username">@ibrahimgamal</a>
                <small class="text-gray-500">2 hours ago</small>
              </div>
            </div>
          </div>
        </div>

        <hr class="line-divider">

        <div>
          <div class="question-answer content">
            <p>
              To read and write image files, I would suggest using the single file public domain packages from https://github.com/nothings/stb/
            </p>
            <p>
              you can write the image without losing information in PNG, TGA or BMP format with functions defined in https://github.com/nothings/stb/blob/master/stb_image_write.h
            </p>
            <p>
              Image data can be read back into memory using https://github.com/nothings/stb/blob/master/stb_image.h
            </p>
          </div>
          <div class="question-answer-data">
            <div class="question-answer-link">
              <a href="" class="mr-2">Share</a>
              <a href="">Follow</a>
            </div>
            <div class="question-answer-user">
              <img src="@/assets/user.jpg" class="question-answer-userimage">
              <div>
                <a href="" class="question-answer-username">@ibrahimgamal</a>
                <small class="text-gray-500">2 hours ago</small>
              </div>
            </div>
          </div>
        </div>

      </main>
      <div class="widget">
        <div class="card mb-5">
          <div class="card-header">
            <h2 class="h6">Asker</h2>
          </div>
          <div class="card-body flex">
            <img :src="question.user.photo" class="question-userimage">
            <div>
              <span class="question-user">{{ question.user.name }}</span>
              <small class="text-gray-500">@{{ question.user.username }}</small>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h2 class="h6">Tags</h2>
          </div>
          <div class="card-body widget-tag">
            <a href="" class="badge bordered widget-tag-link" v-for="(tag, key) in question.tags" :key="key">{{ tag.name }}</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        question: null
      }
    },
    computed: {
      ...mapGetters('question', ['findQuestion'])
    },
    beforeRouteEnter(to, from, next) {
      const { user, question } = to.params

      next(vm => {
        vm.question = vm.findQuestion(user, question);
      })
    }
  }
</script>

<style>
  .article {
    @apply text-lg leading-8;
  }
  .content p, .content br, .content pre {
    @apply mb-3;
  }
  .content a {
    @apply text-blue-600;
  }
  .content pre {
    @apply bg-gray-100 text-sm text-gray-800 p-4 rounded !important;
  }
  .content :not(pre) > code {
    @apply bg-gray-200 text-sm rounded;
    padding: 2px 4px;
  } 
  .question-meta {
    @apply text-gray-500 mr-1;
  }
  .question-user {
    @apply font-semibold block;
  }
  .question-userimage {
    @apply w-12 h-12 object-cover rounded mr-3;
  }
  .question-filter, .question-answer-data {
    @apply flex items-center justify-between;
  }
  .question-filter {
    @apply mb-5;
  }
  .question-countanswer {
    @apply text-lg font-semibold;
  }
  .question-answer {
    @apply mb-4;
  }
  .question-answer-link {
    @apply text-gray-500 text-sm;
  }
  .question-answer-user {
    @apply flex;
  }
  .question-answer-userimage {
    @apply w-8 h-8 object-cover rounded mr-2;
  }
  .question-answer-username {
    @apply text-sm text-blue-600 leading-none block;
  }
</style>