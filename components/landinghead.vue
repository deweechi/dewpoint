<template>

    <v-img height="300" :src="header.image">

        <v-overlay absolute opacity=".25">

            <div class="headline">{{ header.title }}</div>
            <div class="subtitle-1">{{ header.description }}</div>

        </v-overlay>

    </v-img>

</template>

<script>
export default {
  props: {
    header: {
      type: Object,
      default: null
    }
  }
}
</script>

<style></style>
