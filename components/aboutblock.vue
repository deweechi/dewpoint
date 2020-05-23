<template>

    <v-flex xs12 sm4 class="my-3">

        <h2 class="headline">{{ about.headline }}</h2>
        <Markdown :markdown="about.description" />

    </v-flex>

</template>

<script>
import Markdown from '~/components/Markdown'
export default {
  components: {
    Markdown
  },
  props: {
    about: {
      type: Object,
      default: null
    }
  }
}
</script>

<style></style>
