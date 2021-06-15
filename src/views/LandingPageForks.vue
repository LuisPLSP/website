<template>
  <div id="app">
    <bannerforks></bannerforks>
    <overviewforks></overviewforks>
    <detailsforkscourse></detailsforkscourse>
    <testimonialsforks></testimonialsforks>
    <registercourse></registercourse>
  </div>
</template>

<script>
import Bannerforks from "../components/Bannerforks.vue";
import Overviewforks from "../components/Overviewforks.vue";
import Detailsforkscourse from "../components/Detailsforkscourse.vue";
import Testimonialsforks from "../components/Testimonialsforks.vue";
import Registercourse from "../components/Registercourse.vue";

export default {
  name: "Frontforkscourse",
  components: {
    Bannerforks,
    Overviewforks,
    Detailsforkscourse,
    Testimonialsforks,
    Registercourse,
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
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
