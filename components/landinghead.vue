<template>
<div>
<v-parallax height="300" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
         <v-row
      align="center"
      justify="center"
    >
          <v-col class="text-center" cols="12">
            <div class="subheading">{{header.title}}</div>
            <div class="body-1">{{header.description}}</div>
          </v-col>
        </v-row>
      </v-parallax>





</div>
</template>

<script>
export default {

  props: {
    header: {
      type: Object,
      default: null
    },

  }
}

</script>

<style>

</style>
