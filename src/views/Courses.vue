<template>
  <div id="app">
    <bannersuspensions></bannersuspensions>

    <introcourses></introcourses>

    <allcourses></allcourses>

    <testimonialsforks></testimonialsforks>

    <testimonialsvideo></testimonialsvideo>

    <partners-courses></partners-courses>
  </div>
</template>

<script>
import Bannersuspensions from "../components/Bannersuspensions.vue";
import Introcourses from "../components/Introcourses.vue";
import Allcourses from "../components/Allcourses.vue";
import Testimonialsforks from "../components/Testimonialsforks.vue";
import Testimonialsvideo from "../components/Testimonialsvideo.vue";
import PartnersCourses from "../components/PartnersCourses.vue";

export default {
  name: "Courses",
  components: {
    Bannersuspensions,
    Introcourses,
    Allcourses,
    Testimonialsforks,
    Testimonialsvideo,
    PartnersCourses,
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
      title: this.$t("meta.coursestitle"),
      meta: [
        { name: "description", content: this.$t("meta.coursesdescription") },
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
</style>
