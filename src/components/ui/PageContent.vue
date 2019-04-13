<template>
  <div id="page-content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Content styles */
.page-content {
  width: 60%;
  margin: 10px auto;
  padding: 10px 10%;
  border-radius: 4px;
  background-color: white;
}

@media only screen and (max-width: 600px) {
  .page-content {
    width: 80%;
  }
}

.page-content a {
  color: var(--primary-txt-color);
}

.section-header {
  display: block;
  width: fit-content;
  font-weight: bold;
  font-size: 1.5em;
  padding: 20px 0 2px 0;
  margin: 0 0 18px 0;
  color: var(--primary-txt-color);
  border-bottom: 1px solid;
}
</style>
