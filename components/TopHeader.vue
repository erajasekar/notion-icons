<template>
  <section class="hero is-primary max-w-full border-b-4 border-yellow-700">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Notion Icons
        </h1>
        <h2 class="italic text-lg text-yellow-800">
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
            <li :class="isMenuActive('gallery')">
              <nuxt-link to="/gallery">
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
<style>
</style>
