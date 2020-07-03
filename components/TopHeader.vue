<template>
  <section class="hero bg-green-400 max-w-full border-b-4 border-green-800">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Notion Icons
        </h1>
        <h2 class="italic text-lg text-grey-700">
          Tool to simplify using Icons in Notion
        </h2>
      </div>
    </div>

    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <li :class="isMenuActive('index')">
              <a href="/">Home</a>
            </li>
            <li :class="isMenuActive('icons')">
              <nuxt-link to="/icons">
                Icons
              </nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>

<script lang="ts">

import { Vue } from 'nuxt-property-decorator'
export default class extends Vue {
  isMenuActive (menuName: string) {
    return this.$route.name === menuName ? 'is-active' : ''
  }
}

</script>
<style scoped>

.tabs.is-boxed li.is-active a {
    background-color: #32855B;
    border-color: #32855B;
    border-bottom-color: transparent !important;
    color: white;
}

.tabs.is-boxed li a:hover {
    background-color: #49BB78;
}

</style>
