<template>
  <section class="main-content columns">
    <aside class="column is-2 section">
      <p class="">
        Filter and Customize
      </p>
    </aside>

    <div class="container column is-10">
      <section class="section">
        <div class="columns is-mobile is-multiline ">
          <div v-for="(icon, index) in iconsData.icons" :key="index" class="column is-one-fifth">
            <div class="icon-card">
              <a class="">
                <img height="50px" width="50px" :src="getImgUrl(icon.name)">
              </a>
              <footer class="">
                <div class="">
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

<style scoped>
  /*.card-footer {
    border: 0px;
  }
  .card {
    background-color: white;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    color: #4a4a4a;
    max-width: 100%;
    position: relative;
}
  .card {
    border: 10px;
    max-width: 100%;
  }*/
  div.icon-card:hover{
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    color: #4a4a4a;
  }

</style>
