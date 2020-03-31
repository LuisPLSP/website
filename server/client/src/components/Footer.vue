<template>
  <footer fluid>
    <b-container fluid>
      <b-row class="text-center" align-h="between">
        <b-col cols="2">
          <img
            style="height: 38px;"
            id="logo"
            class="logo-footer"
            src="./assets/S2Plogo.png"
            alt="S2Plogo"
          />
        </b-col>
        <b-col cols="2">
          <b-button href="#navbar">Top</b-button>
        </b-col>
        <b-col cols="2">
          <b-row align-h="end">
            <b-col cols="4">
              <b-link
                class="social-media"
                href="https://www.youtube.com/stepstopodium/"
                ><i class="fab fa-youtube fa-2x"></i
              ></b-link>
            </b-col>
            <b-col cols="4">
              <b-link
                class="social-media"
                href="https://www.instagram.com/stepstopodium/"
                ><i class="fab fa-instagram fa-2x"></i
              ></b-link>
            </b-col>
            <b-col cols="4">
              <b-link
                class="social-media"
                href="https://www.facebook.com/stepstopodium/"
                ><i class="fab fa-facebook-square fa-2x"></i
              ></b-link>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>
<style lang="scss" scoped>
// Footer
footer {
  background: rgb(196, 196, 196);
  padding-top: 1em;
  padding-bottom: 1em;
  height: 70px;
  .logo-footer {
    align-items: center;
  }
  .social-media {
    color: none;
  }
}
</style>
