<template>
  <form v-on:submit.prevent="submit">

    <div class="heading">
      <h1 class="h2 heading-title">Ask Question</h1>
      <p class="heading-sub">Ask a public question</p>
    </div>

    <hr class="line-divider">

    <div class="home-row">
      
      <main class="main">
        <div class="form">
          <label>Title</label>
          <input type="text" class="input" placeholder="Title" v-model="title">
        </div>
        <div class="form">
          <label>Question</label>
          <div class="mt-2">
            <vue-simplemde preview-class="content" :highlight="true" :configs="mdeConfig" v-model="content" />
          </div>
        </div>
      </main>

      <div class="widget">
        <div class="form">
          <label>Tags</label>
          <div class="mt-2">
            <input class="tag" type="text" ref="tag">
          </div>
        </div>
        <button class="button blue mr-2" :disabled="loading">Save</button>
        <button type="button" class="button black" v-on:click="$router.go(-1)">Cancel</button>
      </div>

    </div>

    <transition name="fade">
      <div class="toast black" v-show="error.active">
        <div class="toast-message" v-for="(error, key) in error.errors" :key="key">
          <div>
            <i class="fa fa-exclamation-circle mr-2"></i>
            <span class="font-semibold">{{ error.param }}</span> {{ error.msg }}
          </div>
        </div>
      </div>
    </transition>

  </form>
</template>

<script>
  import VueSimplemde from 'vue-simplemde'
  import hljs from 'highlight.js'
  import Tagify from '@yaireo/tagify'
  import { mapActions, mapGetters, mapMutations } from 'vuex'

  window.hljs = hljs

  export default {
    components: {
      VueSimplemde
    },
    data() {
      return {
        error: {
          active: false,
          errors: []
        },
        loading: false,
        title: '',
        content: '',
        tagify: null,
        tagifyOptions: {
          placeholder: 'Tag',
          whitelist: []
        },
        mdeConfig: {
          placeholder: 'Question'
        }
      }
    },
    computed: {
      ...mapGetters('auth', ['user'])
    },
    methods: {
      ...mapActions('tag', ['search']),
      ...mapActions('question', ['store']),
      ...mapMutations(['createNotification']),
      async searchTag(e) {
        const name = e.detail.value

        this.tagify.settings.whitelist.length = 0

        this.tagify.loading(true).dropdown.hide.call(this.tagify)

        const results = await this.search(name)

        this.tagify.settings.whitelist.splice(0, results.length, ...results.map(res => res.name))
        this.tagify.loading(false).dropdown.show.call(this.tagify, name)
      },
      async submit() {
        this.loading = true

        try {
          const { slug, user } = await this.store({
            title: this.title,
            content: this.content,
            tags: this.tagify.value.map(item => item.value),
            user: this.user.id
          })

          this.createNotification('Question Created')

          this.$router.push({
            name: 'Read',
            params: {
              user: user.username,
              question: slug,
            }
          })
        } catch (err) {
          this.error = {
            active: true,
            errors: err.response.data.errors
          }

          setTimeout(this.cleanError, 3000)
        } finally {
          this.loading = false
        }
      },
      cleanError() {
        this.error = {
          active: false,
          errors: []
        }
      }
    },
    mounted() {
      this.tagify = new Tagify(this.$refs.tag, this.tagifyOptions)
      this.tagify.on('input', this.searchTag)
    }
  }
</script>

<style>
  @import '~simplemde/dist/simplemde.min.css';
  @import '~highlight.js/styles/atelier-seaside-light.css';
  @import '~@yaireo/tagify/dist/tagify.css';

  .tag {
    --tags-focus-border-color: #3B82F6;

    @apply rounded border-gray-200;
  }
  .tag .tagify__input {
    @apply leading-5;
  }

  .error-message {
    @apply mb-4 flex items-start justify-between;
  }
</style>