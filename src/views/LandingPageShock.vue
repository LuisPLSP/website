<template>
  <div id="app">
    <bannershock></bannershock>
    <overviewshock></overviewshock>
    <detailsshockcourse></detailsshockcourse>
    <testimonialsshock></testimonialsshock>
    <registercourse></registercourse>
  </div>
</template>

<script>
import Bannershock from "../components/Bannershock.vue";
import Overviewshock from "../components/Overviewshock.vue";
import Detailsshockcourse from "../components/Detailsshockcourse.vue";
import Testimonialsshock from "../components/Testimonialsshock.vue";
import Registercourse from "../components/Registercourse.vue";

export default {
  name: "Shockcourse",
  components: {
    Bannershock,
    Overviewshock,
    Detailsshockcourse,
    Testimonialsshock,
    Registercourse,
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
  metaInfo() {
    return {
      title: this.$t("meta.shockcoursestitle"),
      meta: [
        {
          name: "description",
          content: this.$t("meta.shockcoursesdescription"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  margin-bottom: 2em;
}
h1 {
  text-align: left;
  padding-top: auto;
  padding-bottom: auto;
  font-size: 2em;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}
.form {
  margin-bottom: 0.3em;
  margin-top: 0.75em;
}
</style>
