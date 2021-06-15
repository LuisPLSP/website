<template>
  <div id="app">
    <banner></banner>

    <intro></intro>

    <videos></videos>

    <about></about>

    <aboutus></aboutus>

    <contact></contact>

    <partners></partners>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import Intro from "../components/Intro.vue";
import Videos from "../components/Videos.vue";
import About from "../components/About.vue";
import Aboutus from "../components/Aboutus.vue";
import Contact from "../components/Contact.vue";
import Partners from "../components/Partners.vue";

export default {
  name: "Home",
  components: {
    Banner,
    Intro,
    Videos,
    About,
    Aboutus,
    Contact,
    Partners,
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
  metaInfo() {
    return {
      title: this.$t("meta.maintitle"),
      meta: [{ name: "description", content: this.$t("meta.maindescription") }],
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
