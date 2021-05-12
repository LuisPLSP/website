<template>
  <div id="app">

    <banner></banner>

    <introcourses></introcourses>

    <allcourses></allcourses>

    <contact></contact>

    <!-- <teaser></teaser> -->
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import Introcourses from "../components/Introcourses.vue";
import Allcourses from "../components/Allcourses.vue";
import Contact from "../components/Contact.vue";
//import Teaser from "../components/Teaser.vue";

export default {
  name: "Courses",
  components: {
    Banner,
    Introcourses,
    Allcourses,
    Contact
   // Teaser
  }
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
