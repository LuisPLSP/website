<template>
  <div id="app">

    <banner></banner>

    <videos></videos>

    <intro></intro>

    <contact></contact>

    <aboutus></aboutus>

    <about></about>

  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import Intro from "../components/Intro.vue";
import Videos from "../components/Videos.vue";
import About from "../components/About.vue";
import Aboutus from "../components/Aboutus.vue";
import Contact from "../components/Contact.vue";

export default {
  name: "TheApp",
  components: {
    Banner,
    Intro,
    Videos,
    About,
    Aboutus,
    Contact
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

