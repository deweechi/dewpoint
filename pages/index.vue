<template>
  <div>
    <section>
      <landinghead :header="homedata.header" />
    </section>
    <section>
      <v-layout column wrap class="my-5" align-center>
      <aboutblock v-for="about in homedata.about" :id="about.id" :key="about.id" :about="about" />
      </v-layout>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import landinghead from '~/components/landinghead'
import aboutblock from '~/components/aboutblock'
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
    landinghead,
    aboutblock
  },
  async fetch({ store, params }) {
    await store.dispatch('getHome')
  },

  computed: {
    ...mapState(['homedata'])
  }
}
</script>
