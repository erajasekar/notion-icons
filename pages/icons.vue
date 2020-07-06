<template>
  <section class="main-content columns">
    <aside class="column is-2 section">
      <div class="field">
        <!-- <div class="form__label">
          <strong>Pick color:</strong>
        </div> -->
        <b-field label="Pick color">
          <v-swatches v-model="color" show-fallback popover-x="left" />
        </b-field>
        <!-- <div>
          <v-swatches v-model="color" show-fallback popover-x="left" />
        </div> -->
        <b-field
          label="Search"
          placeholder="Type to search..."
        >
          <b-input v-model="searchKeyword" />
        </b-field>
        <div class="field">
          <b-switch
            v-model="isDarkMode"
            type="is-warn"
            passive-type="is-dark"
            outlined
          >
            {{ isDarkMode ? "Light Mode" : "Dark Mode" }}
          </b-switch>
        </div>
      </div>
    </aside>

    <div class="container column is-10">
      <section :class="applyTheme">
        <div class="columns is-mobile is-multiline ">
          <div v-for="(icon, index) in filteredIcons" :key="index" class="column is-one-fifth">
            <div class="icon-card dark" @click="copyIcon(icon.name)">
              <div v-if="isIconSelected(icon.name)">
                Copied!
              </div>
              <div>
                <img :ref="icon.name" height="50px" width="50px" :src="getImgUrl(icon.name)">
              </div>
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
import VSwatches from 'vue-swatches'
import 'vue-swatches/dist/vue-swatches.css'
import { IconConfig } from '../gallery/config'
import { getIconUrl, filterIconByNameOrTag } from '../gallery/UtilFunctions'

@Component({
  components: {
    VSwatches
  }
})
export default class extends Vue {
  iconsData : IconConfig = new IconConfig()
  color = '#0000FF'
  selectedIcon = ''
  searchKeyword = ''
  isDarkMode = false

  get filteredIcons () {
    if (this.searchKeyword.length > 0) {
      return this.iconsData.icons.filter(i => filterIconByNameOrTag(i, this.searchKeyword))
    } else {
      return this.iconsData.icons
    }
  }

  getImgUrl (name: string) {
    return getIconUrl(this.iconsData.url, this.iconsData.style, this.iconsData.size, this.color, name)
  }

  isIconSelected (name: string) {
    return name === this.selectedIcon
  }

  copyIcon (iconName: string) {
    const firstImg = (this.$refs[iconName] as any)[0]
    this.$copyText(firstImg.src).then(() => {
      this.selectedIcon = iconName
    })
  }

  get applyTheme () {
    let style = 'section mt-10'
    if (this.isDarkMode) {
      style = style + ' dark'
    }
    return style
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
  div.icon-card.dark:hover{
    box-shadow: 5 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    color: white;
  }
</style>
