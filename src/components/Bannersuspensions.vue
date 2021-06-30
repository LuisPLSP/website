<template>
  <div class="banner">
    <img
      id="bannercourses"
      src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/courses%2FbannerCourses2.jpg?alt=media&token=285956b4-b122-4f4d-86d0-856c89550327"
      fluid
      alt="banner"
    />
    <h1>{{ $t("courses.coursestitle") }}</h1>
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
h1 {
  color: white;
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
