<template>
  <div id="app">
    <banner></banner>

    <introapp></introapp>

    <featuresapp></featuresapp>

    <feedback></feedback>

    <aboutusapp></aboutusapp>

  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import Introapp from "../components/Introapp.vue";
import Featuresapp from "../components/Featuresapp.vue";
import Aboutusapp from "../components/Aboutusapp.vue";
import Feedback from "../components/Feedback.vue";

export default {
  name: "MuddyMatch",
  components: {
    Banner,
    Introapp,
    Featuresapp,
    Aboutusapp,
    Feedback,
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
