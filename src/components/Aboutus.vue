<template>
  <section class="aboutus">
    <b-container fluid="md">
      <b-row>
        <b-col
          lg="6"
          data-aos="fade"
          data-aos-duration="1000"
          class="mb-3 about-me container module"
        >
          <img
            class="photo-luis floated"
            style="padding-top: 0.5em;"
            src="../assets/foto-XL-finish-website.jpg"
            alt="S2Plogo"
          />
          <p>
            {{ $t("aboutus.luis") }}
            <b-link
              style="color: light-blue;"
              href="https://www.linkedin.com/in/luis-peixoto-1969aa6a/"
              ><i class="fab fa-linkedin"></i
            ></b-link>
          </p>
        </b-col>

        <b-col
          lg="6"
          data-aos="fade"
          data-aos-duration="2000"
          class="about-me container"
        >
          <img
            class="photo-lili floated"
            style="padding-top: 0.5em;"
            src="../assets/foto-Lili-website.jpg"
            alt="S2Plogo"
          />
          <p>{{ $t("aboutus.lili") }}
            <b-link
              style="color: light-blue;"
              href="https://www.linkedin.com/in/lilianammpinho/"
              ><i class="fab fa-linkedin"></i
            ></b-link>
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {
  name: "Aboutus"
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
  margin-top: 1em;
  margin-bottom: 2em;
}
.about-me {
  .floated {
    float: left;
    padding: 0 1em;
  }
  p {
    font-size: 1.2em;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 400;
    justify-content: center;
  }
}
.photo-luis {
  object-fit: cover;
  height: 220px;
  width: 210px;
  padding-right: 1em;
  object-position: 75% 0;
}
.photo-lili {
  object-fit: cover;
  height: 220px;
  width: 210px;
  padding-right: 1em;
  object-position: 60% 0;
}
</style>
