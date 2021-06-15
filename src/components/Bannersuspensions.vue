<template>
  <div class="banner">
    <img
      id="bannercourses"
      src="../assets/bannerSuspensionCourses.jpg"
      fluid
      alt="banner"
    />
    <b-button size="lg" class="btn-to-course" href="#allcourses"
      >{{ $t("courses.explorecourses") }}
    </b-button>
  </div>
</template>
<script>
export default {
  name: "Bannersuspensions",
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
#bannercourses {
  height: 500px;
  width: 100%;
  object-fit: cover;
}
.btn-to-course {
  width: 200px;
  position: absolute;
  margin-right: auto;
  margin-left: auto;
  left: 0;
  right: 0;
  top: 80%;
  bottom: auto;
  background-color: #067a14;
  &:hover {
    background-color: #04610f;
  }
}
</style>
