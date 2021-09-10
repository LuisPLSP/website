<template>
  <div id="app">
    <bannertechsession></bannertechsession>
    <overviewtechsession></overviewtechsession>
    <detailstechsession></detailstechsession>
    <registertechsession></registertechsession>
    <testimonialstechsession></testimonialstechsession>
  </div>
</template>

<script>
import Bannertechsession from "../components/Bannertechsession.vue";
import Overviewtechsession from "../components/Overviewtechsession.vue";
import Detailstechsession from "../components/Detailstechsession.vue";
import Registertechsession from "../components/Registertechsession.vue";
import Testimonialstechsession from "../components/Testimonialstechsession.vue";

export default {
  name: "Techsession",
  components: {
    Bannertechsession,
    Overviewtechsession,
    Detailstechsession,
    Registertechsession,
    Testimonialstechsession,
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  metaInfo() {
    return {
      title: this.$t("meta.forkscoursestitle"),
      meta: [
        {
          name: "description",
          content: this.$t("meta.forkscoursesdescription"),
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
