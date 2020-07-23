<template>
  <section class="hero bg-teal-300 max-w-full border-b-4 border-teal-800">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title">
          Notion Icons
        </p>
        <h2 class="italic text-xl text-grey-700">
          Easily add beautiful Icons to your Notion Notes.
        </h2>
      </div>
    </div>

    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container subtitle">
          <ul>
            <li :class="isMenuActive('index')">
              <a href="/">Home</a>
            </li>
            <li :class="isMenuActive('icons')">
              <nuxt-link to="/icons">
                Icons
              </nuxt-link>
            </li>
            <li :class="isMenuActive('about')">
              <nuxt-link to="/about">
                About
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
    background-color: #3F9795;
    border-color: #3F9795;
    border-bottom-color: transparent !important;
    color: white;
}

.tabs.is-boxed li a:hover {
    background-color: #B2F5E9;
}

.title {
  font-family: 'Graduate';
  font-weight: 500;
}

h2 {
  font-family: 'KoHo';
  color:#374454;
}

</style>
