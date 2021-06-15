<template>
  <section class="overviewshock">
    <b-container fluid="md">
      <b-row class="my-3 d-flex align-items-center justify-content-center">
        <b-col
          lg="4"
          class="d-flex align-items-center justify-content-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <b-card class="shadow-lg mb-3 mt-3" tag="article">
            <b-card-text>
              <h3>{{ $t("shock.time&date") }}</h3>
              <p>{{ $t("shock.time&date1") }}</p>
              <h3>{{ $t("shock.location") }}</h3>
              <p>{{ $t("shock.location1") }}</p>
              <h3>{{ $t("shock.duration") }}</h3>
              <p>{{ $t("shock.duration1") }}</p>
              <h3>{{ $t("shock.maxparticipants") }}</h3>
              <p>{{ $t("shock.maxparticipants1") }}</p>
              <h3>{{ $t("shock.price") }}</h3>
              <p>{{ $t("shock.price1") }}</p>
            </b-card-text>
            <b-button float="right" href="#register" variant="primary">{{
              $t("shock.signup")
            }}</b-button>
          </b-card>
        </b-col>
        <b-col lg="8">
          <b-carousel
            id="carousel-fade"
            fade
            indicators
            img-width="1024"
            img-height="480"
          >
            <b-carousel-slide
              img-src="../assets/bannershock.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="../assets/shock-gallery-2.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="../assets/shock-gallery-3.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="../assets/shock-gallery-4.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="../assets/shock-gallery-5.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="../assets/shock-gallery-6.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="../assets/shock-gallery-7.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="../assets/shock-gallery-8.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="../assets/shock-gallery-9.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="../assets/shock-gallery-10.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="../assets/shock-gallery-11.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="../assets/shock-gallery-13.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="../assets/shock-gallery-14.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="../assets/shock-gallery-15.jpg"
            ></b-carousel-slide>
          </b-carousel>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "Overviewshock",
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
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

h3 {
  padding-top: auto;
  margin-bottom: 5px;
  padding-right: 10px;
  font-size: 1.25rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}

p {
  font-size: 1.2rem;
  margin-bottom: 12px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
  padding-bottom: 5px;
}
</style>
