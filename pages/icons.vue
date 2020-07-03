<template>
  <section class="main-content columns">
    <aside class="column is-2 section">
      <p class="">
        Filter and Customize
      </p>
    </aside>

    <div class="container column is-10">
      <section class="section">
        <div class="columns is-mobile">
          <div v-for="(icon, index) in iconsData.icons" :key="index" class="column">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title has-text-grey">
                  Copy
                </p>
              </header>
              <div class="card-content">
                <div class="content has-text-centered">
                  <img height="50px" width="50px" :src="getImgUrl(icon.name)">
                </div>
              </div>
              <footer class="card-footer">
                <div class="card-footer-item">
                  {{ icon.name }}
                </div>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script lang="ts">

import { Component, Vue } from 'nuxt-property-decorator'
import { IconConfig } from '../gallery/config'
import { getIconUrl } from '../gallery/UtilFunctions'

@Component
export default class extends Vue {
  iconsData : IconConfig = new IconConfig()
  color = '0000FF'

  getImgUrl (name: string) {
    return getIconUrl(this.iconsData.url, this.iconsData.style, this.iconsData.size, this.color, name)
  }
}
</script>
