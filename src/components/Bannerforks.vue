<template>
  <div class="banner">
    <img
      id="bannerforks"
      src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2FbannerForks.jpg?alt=media&token=28daea59-dd1f-4b49-834b-7181bd20376e"
      fluid
      alt="banner"
    />
    <h1>{{ $t("forks.bannerforks") }}</h1>
  </div>
</template>
<script>
export default {
  name: "Bannerforks",
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
  //font-size: 5em;
  font-size: 5vw;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  text-shadow: 2px 2px 4px #000000;
}
#bannerforks {
  height: 500px;
  width: 100%;
  object-fit: cover;
}
</style>
