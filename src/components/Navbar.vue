<template>
  <div fluid>
    <b-navbar id="navbar">
      <b-navbar-nav class="mx-auto">
        <b-nav-item class="navbar-item" href="#">
          <img id="logo" src="./assets/S2Plogo.png" alt="S2Plogo" />
        </b-nav-item>
        <b-nav-item class="navbar-item" href="#about" v-on:click="show"
          >About</b-nav-item
        >
        <b-nav-item class="navbar-item" href="#contact-us"
          >Contact us</b-nav-item
        >
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss" scoped>
#logo {
  height: 30px;
}
#navbar {
  width: 100%;
  height: 50px;
  display: flex;
  background: rgb(196, 196, 196);
  font-family: "Montserrat", sans-serif;
}
.navbar-item {
  font-size: x-large;
  margin-left: 40px;
  margin-right: 40px;
  display: flex;
}
</style>
