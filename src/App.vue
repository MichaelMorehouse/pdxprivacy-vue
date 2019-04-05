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

/* Basic content styles */

.page-content {
  width: 60%;
  margin: 20px auto;
}

@media only screen and (max-width: 600px) {
  .page-content {
    width: 80%;
  }
}

.page-content a {
  color: rgb(19, 28, 123, 0.8);
}

.text-uppercase {
  text-transform: uppercase;
}

.text-centered {
  text-align: center;
}

.text-bold {
  font-weight: bold;
}
.section-header {
  display: block;
  width: fit-content;
  font-weight: bold;
  font-size: 1.5em;
  padding: 20px 0 2px 0;
  margin: 0 0 18px 0;
  color: rgb(20, 30, 123);
  border-bottom: 1px solid;
}
</style>
