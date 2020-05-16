<template>
  <div class="center">
    <v-overlay absolute opacity=".65">
      <div class="headline">{{ about.headline }}</div>
      <div class="subtitle-1">{{ about.description }}</div>
    </v-overlay>
  </div>
</template>

<script>
export default {
  props: {
    about: {
      type: Object,
      default: null
    }
  }
}
</script>

<style></style>
