<template>
  <div id="app">
    <Navbar></Navbar>
    <PageContent></PageContent>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import PageContent from "./components/ui/PageContent";

export default {
  name: "app",
  components: {
    Navbar,
    PageContent,
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

html {
  background: white;
}

body {
  background-color: var(--backdrop-color);
}
/* header {
  height: 40vh;
  background: url("assets/pdx_skyline.jpg") no-repeat center;
  background-size: cover;
} */

/* Global css variables */
:root {
  --primary-txt-color: rgb(50, 60, 114);
  --primary-bg-color: white;
  --secondary-txt-color: white;
  --secondary-bg-color: rgb(50, 60, 114);
  --backdrop-color: rgb(0, 0, 0, 0.1);
}

.primary-color {
  background-color: var(--primary-bg-color);
  color: var(--primary-txt-color);
}

.secondary-color {
  background-color: var(--secondary-bg-color);
  color: var(--secondary-txt-color);
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
</style>
