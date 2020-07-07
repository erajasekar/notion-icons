<template>
  <section class="center site">
    <TopHeader />
    <div class="container main">
      <nuxt />
    </div>
    <BottomFooter />
  </section>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import TopHeader from '@/components/TopHeader.vue'
import BottomFooter from '@/components/BottomFooter.vue'

@Component({
  components: {
    TopHeader,
    BottomFooter
  }
})
export default class extends Vue {
}
</script>

<style>
  body {
    background-color: #FAFAFA;
    background-image: url("~assets/background8.png")
  }
  .dark {
    background-color: #2F3437;
    color: white;
  }

</style>
