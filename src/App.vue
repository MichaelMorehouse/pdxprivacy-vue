<template>
  <div id="app">
    <!-- <header></header> -->
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";

export default {
  name: "app",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
html,
body {
  margin: 0px;
  height: 100%;
  width: 100%;
  scroll-behavior: smooth;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

header {
  height: 40vh;
  background: url("assets/pdx_skyline.jpg") no-repeat center;
  background-size: cover;
}

.secondary-color {
  background-color: rgb(30, 50, 140); /* orange: rgb(255, 170, 11); */
  color: white;
}
</style>
