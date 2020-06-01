<template>
  <b-container fluid>
    <b-navbar id="navbar" type="light">
      <b-navbar-brand>
        <img id="logo" src="../assets/S2Plogo.png" alt="S2Plogo" />
      </b-navbar-brand>
      <b-navbar-nav id="navbar" align="end" class="ml-auto">
        <b-nav-item size="sm" class="navbar-item" href="#about"
          >{{ $t("nav.about") }}</b-nav-item
        >
        <b-nav-item
          size="sm"
          class="navbar-item"
          href="https://teespring.com/stores/steps-to-podiums-store"
          target="_blank"
          >{{ $t("nav.merchandise") }}</b-nav-item
        >
        <b-nav-item size="sm" class="navbar-item" href="#contact-us"
          >{{ $t("nav.contactus") }}</b-nav-item
        >
        <select v-model="$i18n.locale" class="navbar-item-language">
      <option value="en">English</option>
      <option value="pt">Português</option>
    </select>
        
        <!-- <b-nav-item
        {{$i18n.locale}
          size="sm"
          class="navbar-item"
          v-for="(lang, i) in langs"
          :key="`lang-${i}`"
          :value="lang"
          >{{ lang }}</b-nav-item
        > -->
      </b-navbar-nav>
    </b-navbar>
  </b-container>
</template>

<script>

export default {
  name: "Navbar"
};
</script>

<style lang="scss" scoped>
#logo {
  height: 30px;
  @media only screen and (max-width: 375px) {
    height: 20px;
  }
}
#navbar {
  width: 100%;
  height: 50px;
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
  @media only screen and (max-width: 430px) {
    font-size: x-small;
  }
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
  @media only screen and (max-width: 430px) {
    font-size: x-small;
  }
}
</style>
