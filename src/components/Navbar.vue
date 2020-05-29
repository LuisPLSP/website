<template>
  <b-container fluid>
    <b-navbar id="navbar" type="light">
      <b-navbar-brand>
        <img id="logo" src="../assets/S2Plogo.png" alt="S2Plogo" />
      </b-navbar-brand>
      <b-navbar-nav id="navbar" align="end" class="ml-auto">
        <b-nav-item size="sm" class="navbar-item" href="#about"
          >About</b-nav-item
        >
        <b-nav-item size="sm" class="navbar-item" href="https://teespring.com/stores/steps-to-podiums-store" target="_blank"
          >Merchandise</b-nav-item
        >
        <b-nav-item size="sm" class="navbar-item" href="#contact-us"
          >Contact us</b-nav-item
        >
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
  @media only screen and (max-width: 375px) {
  font-size: smaller;
}}
</style>
