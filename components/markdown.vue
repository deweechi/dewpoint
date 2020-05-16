<template lang="md">
  <div v-html="renderedMd" />
</template>

<script>
export default {
  props: {
    markdown: String
  },
  computed: {
    renderedMd: function () {
      let rawTemplate = '<div />'
      if (this.markdown) {
        rawTemplate = this.$md.render(this.markdown)
      }
      return rawTemplate

    }
  }
}
</script>
