<template>
  <section class="hero bg-teal-300 max-w-full border-b-4 border-teal-800">
    <div class="container has-text-centered text-orange-100">
      <div class="">
        <img class="h-32" src="~assets/LogoNew.png" alt="Notion Icons Icon">
      </div>
      <h2 class="italic font-bold text-2xl pb-10  mr-5">
        &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  Add beautiful Icons to your Notion Notes
      </h2>
    </div>

    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container subtitle">
          <ul>
            <li :class="isMenuActive('index')">
              <nuxt-link to="/">
                Home
              </nuxt-link>
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
  /*color:#718096;*/
  color:#B7791F;
}

</style>
