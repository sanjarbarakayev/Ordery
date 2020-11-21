<template>
  <v-app id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </v-app>
</template>

<script>
const default_layout = "clients";
export default {
  name: "App",
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    },
  },
};
</script>

<style lang="scss">

</style>