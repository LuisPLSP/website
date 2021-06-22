<template>
  <div class="banner">
    <img
      id="bannertechsession"
      src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/courses%2Fbanner-techsession.jpg?alt=media&token=52bc2c08-71d5-4a82-9a5a-2cceff70d485"
      fluid
      alt="banner"
    />
    <h1>{{ $t("techsession.bannertechsession") }}</h1>
  </div>
</template>
<script>
export default {
  name: "Bannertechsession",
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
#bannertechsession {
  height: 500px;
  width: 100%;
  object-fit: cover;
}
</style>
