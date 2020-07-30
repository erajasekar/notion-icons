<template>
  <section class="main-content columns">
    <aside class="column is-2 section side-nav">
      <div>
        <b-field
          label="Search"
          placeholder="Type to search..."
        >
          <b-input v-model="searchKeyword" />
        </b-field>
        <b-field horizontal label="Color" class="mt-10">
          <v-swatches v-model="color" popover-x="left" />
        </b-field>
        <b-field horizontal :label="toggleMode" class="mt-10">
          <b-switch
            v-model="isDarkMode"
            type="is-warn"
            passive-type="is-dark"
            outlined
          />
        </b-field>
      </div>
      <hr>
      <ul class="">
        <li class="pt-2">
          <a href="/#how-to-use" class="text-teal-900 hover:text-teal-700 text-xs"> How to use ? </a>
        </li>
        <li class="pt-5">
          <a href="/about/#how-to-contribute" class="text-teal-900 hover:text-teal-700 text-xs"> Don't find Icon you want ? </a>
        </li>
        <li class="pt-5">
          <a class="text-teal-900 hover:text-teal-700 text-xs" href="notion://notion.so" target="_blank">
            Open Notion App
          </a>
        </li>
      </ul>
    </aside>

    <div class="container column is-10">
      <section :class="applyContainerTheme">
        <div class="columns is-multiline">
          <div v-for="(icon, index) in filteredIcons" :key="index" class="column is-one-fifth">
            <div :class="applyCardTheme" @click="copyIcon(icon.name)" @mouseover="iconHover(icon.name,true)" @mouseleave="iconHover(icon.name,false)">
              <div class="has-text-centered pb-5 pt-5">
                <p v-if="isIconSelected(icon.name)">
                  Copied!
                </p>
                <b-icon
                  v-else-if="isIconHover(icon.name)"
                  icon="content-copy"
                />
                <p v-else>
                  &nbsp;
                </p>
              </div>
              <div class="">
                <div class="level">
                  <div class="level-item has-text-centered">
                    <figure class="image is-48x48">
                      <img :ref="icon.name" :src="getImgUrl(icon.name)">
                    </figure>
                  </div>
                </div>
              </div>
              <footer class="">
                <p class="has-text-centered pt-5 pb-5">
                  {{ icon.name }}
                </p>
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
import { getCurrentPageUrl } from '../gallery/AppUtils'

import { getIconUrl, filterIconByNameOrTag } from '../gallery/UtilFunctions'

@Component({
  components: {
    VSwatches
  }
})
export default class IconGallery extends Vue {
  iconsData : IconConfig = new IconConfig()
  color = '#2980B9'
  selectedIcon = ''
  hoverIcon = ''
  searchKeyword = ''
  isDarkMode = false

  head () {
    return {
      titleTemplate: 'Icon Gallery | %s',
      meta: [
        { name: 'og:url', content: getCurrentPageUrl('/') },
        { name: 'twitter:url', content: getCurrentPageUrl('/') }
      ]
    }
  }

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

  get toggleMode () {
    return this.isDarkMode ? 'Light' : 'Dark'
  }

  isIconSelected (name: string) {
    return name === this.selectedIcon
  }

  isIconHover (name: string) {
    return name === this.hoverIcon
  }

  copyIcon (iconName: string) {
    const firstImg = (this.$refs[iconName] as any)[0]
    this.copyToClipboard(firstImg.src)
    this.selectedIcon = iconName
  }

  copyToClipboard (text: string) {
    const el = document.createElement('textarea')
    el.value = text
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }

  iconHover (iconName: string, hover: boolean) {
    if (hover) {
      this.hoverIcon = iconName
    } else {
      this.hoverIcon = ''
    }
  }

  get applyContainerTheme () {
    let style = 'section box icon-container'
    if (this.isDarkMode) {
      style = style + ' dark'
    }
    return style
  }

  get applyCardTheme () {
    if (this.isDarkMode) {
      return 'dark-icon-card'
    } else {
      return 'light-icon-card'
    }
  }
}
</script>

<style scoped>
  .side-nav {
    margin: 50px 10px 20px 20px;
    border: 1px solid #ddd;
    background-color: #E7F9EB;
  }

  .icon-container {
    margin: 40px 10px 10px 10px;
  }

  .light-icon-card:hover{
    background-color: #f2f2f2;
    border: 1px solid #ddd;
  }

  .dark-icon-card:hover{
    background-color: #34393d;
    border: 1px solid #666;
  }

  .dark-icon-card{
    background-color: #2F3437;
    color: white;
  }

  .dark {
    background-color: #2F3437;
    color: white;
  }

  p {
    font-family: Share Tech Mono,monospace;
  }

</style>
