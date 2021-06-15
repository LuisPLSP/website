<template>
  <b-container fluid>
    <b-navbar toggleable="sm" id="navbar" type="light">
      <b-navbar-brand :to="{ name: 'Home' }">
        <img id="logo" src="../assets/S2Plogo.png" alt="S2Plogo" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="collapse" is-nav>
        <b-navbar-nav align="end" class=" ml-auto">
          <b-nav-item size="sm" class="navbar-item" :to="{ name: 'Courses' }">{{
            $t("nav.courses")
          }}</b-nav-item>
          <!-- <b-nav-item size="sm" class="navbar-item" :to="{ name: 'MuddyMatch' }"
            >Muddy Match</b-nav-item
          > -->
          <b-nav-item
            size="sm"
            class="navbar-item"
            href="https://teespring.com/stores/steps-to-podiums-store"
            target="_blank"
            >{{ $t("nav.merchandise") }}</b-nav-item
          >
          <b-nav-item size="sm" class="navbar-item" href="/#contact-us">{{
            $t("nav.contactus")
          }}</b-nav-item>
          <b-nav-item
            size="sm"
            v-on:click="switchLocale()"
            class="navbar-item"
            >{{ displayLocale }}</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Navbar",

  computed: {
    displayLocale() {
      let other = "PT";
      if (this.$i18n.locale === "pt") {
        other = "EN";
      }
      return other;
    },
  },
  methods: {
    ...mapActions(["index/changeLangEn", "index/changeLangPt"]),
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
    switchLocale() {
      if (this.$i18n.locale === "pt") {
        this.$i18n.locale = "en";
        this.$store.dispatch("changeLangEn", true);
        this.$store.dispatch("changeLangPt", false);
        console.log("En to true, Pt to false");
      } else {
        this.$i18n.locale = "pt";
        this.$store.dispatch("changeLangEn", false);
        this.$store.dispatch("changeLangPt", true);
        console.log("Pt to true, En to false");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#logo {
  height: 30px;
}
#navbar {
  width: 100%;
  height: auto;
  display: flex;
  background: white;
}
.navbar-item {
  font-size: medium;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  //   .collapse {
  //   font-size: larger;
  // }
}
.navbar-item-language {
  font-size: medium;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  border: none;
  text-decoration: none;
  background-color: white;
  opacity: 0.5;
}
.collapse {
  background-color: white;
  width: 100%;
}
.dropdown:hover > .dropdown-menu {
  display: block;
}
</style>
