<script>
import HomeView from "./view/HomeView.vue"
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",

  components: { HomeView, Navbar }
};
</script>

<template>
  <div id="app">
    <div class="nav">
      <Navbar />
    </div>

    <div class="centerView">
      <HomeView />
    </div>
  </div>

</template>

<style scoped>
#app {
  display: inline-flex;
}

.centerView {
  margin-left: 80px;
  margin-left: 80px;
  margin-top: 40px;
}
</style>
