<template>
  <div id="footer">
    <div class="footer-flex">
      <div id="contact">
        <div id="contact-icons">
          <a href="mailto:info@pdxprivacy.org" target="_blank">
            <font-awesome-icon :icon="['far','envelope']" size="3x"></font-awesome-icon>
          </a>
          <a href="https://twitter.com/pdxprivacy" target="_blank">
            <font-awesome-icon :icon="['fab','twitter']" size="3x"></font-awesome-icon>
          </a>
        </div>
        <div>PDX Privacy</div>
        <div>P.O. Box 3431</div>
        <div>Portland, OR 97208</div>
      </div>
      <div>
        <div>PDX Privacy endorses the principles</div>
        <div>
          of the
          <router-link to="/allies">Electronic Frontier Alliance</router-link>
        </div>
      </div>
    </div>
    <div class="copyright">&copy; PDXPrivacy {{ year }}</div>
  </div>
</template>

<script>
export default {
  data: function() {
    let date = new Date();
    return {
      year: date.getFullYear()
    };
  }
};
</script>

<style>
#footer {
  background-color: var(--secondary-bg-color);
  color: var(--secondary-txt-color);
}

#footer a {
  color: white;
}

.footer-flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.footer-flex > div {
  padding: 10px;
  margin: 10px;
}

.copyright {
  position: relative;
  bottom: 0;
  float: right;
  font-size: 0.7em;
  margin: 10px;
}

#contact-icons {
  display: flex;
  justify-content: space-around;
}

#contact-icons > a {
  margin: 0 20px 15px;
}
</style>
