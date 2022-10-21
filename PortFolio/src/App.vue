<script>

import HomeView from "./view/HomeView.vue"
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",

  components: { Navbar }
};
</script>

<template>
  <div id="app">
    <router-view />
  </div>





</template>

<style scoped>
#app {
  display: flex;
  flex-direction: row;
}


body {
  /* background-color: #272727; */
  background-color: black;

}
</style>
