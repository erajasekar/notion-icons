<template>
  <section class="main-content columns">
    <aside class="column is-2 section">
      <p class="">
        Filter and Customize
      </p>
    </aside>

    <div class="container column is-10">
      <p class="">
        ICONS
      </p>
    </div>
  </section>
</template>

<script lang="typescript">
import iconsData from '../gallery/config'
import { getImgUrl } from '../gallery/UtilFunctions'

export default {
  mounted () {
    iconsData.icons.forEach((data) => {
      console.log('RAJA ', getImgUrl(iconsData.url, iconsData.style, iconsData.size, 'FFFFFF', data.name))
    })
  }
}
</script>
