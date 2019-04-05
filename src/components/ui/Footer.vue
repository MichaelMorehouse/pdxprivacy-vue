<template>
  <footer class="secondary-color">
    <div id="contact">
      <div class="text-centered text-bold">Contact Us</div>
      <div id="contact-icons">
        <a href="mailto:info@pdxprivacy.org" target="_blank">
          <div>ENVELOPE ICON</div>
        </a>
        <a href="https://twitter.com/pdxprivacy" target="_blank">
          <div>TWITTER ICON</div>
        </a>
      </div>
      <div>PDX Privacy</div>
      <div>P.O. Box 3431</div>
      <div>Portland, OR 97208</div>
    </div>
    <div class="copyright">&copy; PDXPrivacy {{ year }}</div>
  </footer>
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
</style>
