<template lang="pug">
div#app
  NavBar
  router-view(:key="$route.fullPath")
  Footer
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer
  }
};
</script>

<style lang="sass">
#app
  background-color: #000000e3

.error-message
  color: red
</style>
