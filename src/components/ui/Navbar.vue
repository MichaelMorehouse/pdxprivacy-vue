<template>
  <div id="navbar" class="secondary-color">
    <div class="dropdown">
      <button class="nav-item">
        <div class="menu-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="dropbtn-text">PDXPrivacy</div>
      </button>
      <div class="dropdown-content">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/efforts">Efforts</router-link>
        <router-link to="/network">Network</router-link>
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
  position: sticky;
  top: 0;
}

.nav-item {
  display: inline-block;
  background-color: transparent;
  color: white;
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
  color: white;
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
  color: rgb(20, 30, 123);
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
  background-color: white;
  margin: 4px 0;
}
</style>
