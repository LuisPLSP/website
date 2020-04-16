<template>
  <section class="about">
    <b-container>
      <b-row class="my-md-5">
        <b-col md="6" class="d-flex align-items-center justify-content-center">
          <h1 class="my-5 about-title">About Us</h1>
        </b-col>
        <b-col md="6" class="mb-2">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            class="about-text module"
          >
            The idea of creating Steps to Podium was born during Luis’ Erasmus
            semester in Germany. Being deprived of riding dirt bikes, he
            realized how important the sport was to him. At that time he was
            also watching a lot of YouTube videos to overcome it… so he
            understood that there was a gap of educational content made
            specifically for the Offroad community. That was how Steps to Podium
            was born. In a funny, simple, independent and straightforward way,
            without any kind of interests or endorsement, Steps to Podium wants
            to inspire, teach and help amateurs riders from around the globe.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "About"
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
  margin-bottom: 1em;
}
h1 {
  text-align: left;
  padding-top: auto;
  padding-bottom: auto;
  font-size: 2em;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}
p {
  font-size: 1.2em;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
  justify-content: center;
}
</style>
