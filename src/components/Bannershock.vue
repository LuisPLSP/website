<template>
  <div class="banner" id="shock">
    <img
      id="bannershock"
      src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-1.jpg?alt=media&token=ea4280bf-6a31-44d7-acff-3bf4b1dd9571"
      fluid
      alt="banner"
    />
    <h1>{{ $t("shock.bannershock") }}</h1>
  </div>
</template>
<script>
export default {
  name: "Bannershock",
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>
<style lang="scss" scoped>
// Banner
.banner {
  position: relative;
}
h1 {
  color: white;
  font-size: 5em;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  text-shadow: 2px 2px 4px #000000;
}
#bannershock {
  height: 500px;
  width: 100%;
  object-fit: cover;
}
</style>
