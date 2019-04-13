<template>
  <div id="navbar" class="primary-color">
    <div class="dropdown">
      <button class="nav-item primary-color">
        <div class="menu-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="dropbtn-text">PDXPrivacy</div>
      </button>
      <div class="dropdown-content">
        <router-link to="/">Home</router-link>
        <router-link to="/efforts">Efforts</router-link>
        <router-link to="/resources">Resources</router-link>
        <router-link to="/allies">Allies</router-link>
      </div>
    </div>
    <div class="nav-item nav-item-right">
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
  top: 0;
  border-bottom: 2px solid;
  -webkit-box-shadow: 0px 2px 2px 0px rgb(50, 60, 114, 0.75);
  -moz-box-shadow: 0px 2px 2px 0px rgb(50, 60, 114, 0.75);
  box-shadow: 0px 2px 2px 0px rgb(50, 60, 114, 0.75);
}

.nav-item {
  display: inline-block;
  background-color: transparent;
  padding: 0.8em;
  font-size: 1.3em;
  font-weight: 550;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: inherit;
  border-right: 1px solid rgb(255, 255, 255, 0);
}

.dropdown:hover .nav-item,
.nav-item:not(.nav-item-right):hover {
  border-right: 1px solid rgb(255, 255, 255, 0.5);
}

.nav-item-right {
  margin-left: auto;
  border-right: none;
  border-left: 1px solid rgb(255, 255, 255, 0);
}

.nav-item-right:hover {
  border-left: 1px solid rgb(255, 255, 255, 0.5);
}

.nav-item > a {
  text-decoration: none;
  display: block;
}

.dropbtn-text {
  display: inline-block;
  vertical-align: middle;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

@media only screen and (max-width: 340px) {
  .dropbtn-text {
    display: none;
  }

  .dropdown-content {
    width: fit-content;
  }
}

.dropdown-content a {
  color: rgb(50, 60, 114);
  padding: 0.8em 1em;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.menu-icon {
  float: left;
  margin: 0 10px;
  height: 100%;
}

.menu-icon > div {
  width: 30px;
  height: 4px;
  background-color: rgb(50, 60, 114);
  margin: 4px 0;
}
</style>
