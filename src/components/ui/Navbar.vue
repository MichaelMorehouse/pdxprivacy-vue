<template>
  <div id="navbar" class="primary-color">
    <div class="dropdown">
      <div class="dropdown-icon">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="dropdown-content">
        <router-link to="/">Home</router-link>
        <router-link to="/efforts">Efforts</router-link>
        <router-link to="/resources">Resources</router-link>
        <router-link to="/allies">Allies</router-link>
        <router-link to="/blog">Blog</router-link>
      </div>
    </div>
    <div class="nav-item nav-title">PDXPrivacy</div>
    <div class="nav-item nav-link nav-item-right">
      <a href="#contact">Contact</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Navbar styles */

#navbar {
  display: flex;
  position: relative;
  top: 0;
  -webkit-box-shadow: 0px 2px 2px 0px rgb(50, 60, 114, 0.75);
  -moz-box-shadow: 0px 2px 2px 0px rgb(50, 60, 114, 0.75);
  box-shadow: 0px 2px 2px 0px rgb(50, 60, 114, 0.75);
}

.nav-title {
  font-size: 1.5em;
}

.nav-item {
  margin: auto 0;
  padding: 0 20px;
  font-weight: bold;
}

.nav-link {
  cursor: pointer;
}

.nav-item-right {
  margin-left: auto;
}

.nav-item > a {
  color: var(--primary-txt-color);
  text-decoration: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  margin-top: 100%;
  background-color: var(--primary-bg-color);
  width: fit-content;
  -webkit-box-shadow: 2px 2px 2px 0px rgb(50, 60, 114, 0.75);
  -moz-box-shadow: 2px 2px 2px 0px rgb(50, 60, 114, 0.75);
  box-shadow: 2px 2px 2px 0px rgb(50, 60, 114, 0.75);
  z-index: 1;
}

.dropdown-content a,
.dropdown-content a:visited {
  color: var(--primary-txt-color);
  padding: 0.8em 1em;
  text-decoration: none;
  display: block;
}

.dropdown-content > *:hover {
  background-color: var(--backdrop-color);
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropdown-icon {
  background: var(--backdrop-color);
}

.dropdown .dropdown-icon {
  float: left;
  padding: 20px;
  height: 100%;
}

.dropdown-icon > div {
  width: 30px;
  height: 4px;
  background-color: var(--primary-txt-color);
  margin: 4px 0;
  border-radius: 2px;
}

@media only screen and (max-width: 360px) {
  .dropbtn-text {
    display: none;
  }

  .dropdown-content {
    width: fit-content;
  }
}
</style>
