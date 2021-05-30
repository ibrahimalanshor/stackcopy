<template>
  <div class="question">
    <router-link :to="{ name: 'Read', params: { user: question.user.username, question: question.slug } }" class="question-title link">{{ question.title }}</router-link>
    <div class="question-data">
      <div>
        <a href="" class="badge bordered question-tag" v-for="(tag, key) in question.tags" :key="key">{{ tag.name }}</a>
      </div>
      <div class="question-detail">
        <time class="question-date">{{ question.date }}</time> by <a href="" class="link">{{ question.user.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['question']
  }
</script>

<style>
  .question {
    @apply mb-5;
  }
  .question-title {
    @apply block text-lg text-blue-600 mb-2;
  }
  .question-data {
    @apply flex items-center justify-between;
  }
  .question-tag {
    @apply mr-1;
  }
  .question-detail {
    @apply text-sm;
  }
  .question-date {
    @apply text-gray-500;
  }
</style>