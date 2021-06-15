<template>
  <section class="overviewforks">
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
              <h3>{{ $t("forks.time&date") }}</h3>
              <p>{{ $t("forks.time&date1") }}</p>
              <h3>{{ $t("forks.location") }}</h3>
              <p>{{ $t("forks.location1") }}</p>
              <h3>{{ $t("forks.duration") }}</h3>
              <p>{{ $t("forks.duration1") }}</p>
              <h3>{{ $t("forks.maxparticipants") }}</h3>
              <p>{{ $t("forks.maxparticipants1") }}</p>
              <h3>{{ $t("forks.price") }}</h3>
              <p>{{ $t("forks.price1") }}</p>
            </b-card-text>
            <b-button float="right" href="#register" variant="primary">{{
              $t("forks.signup")
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
              img-src="../assets/forks-gallery-1.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="../assets/forks-gallery-2.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="../assets/forks-gallery-3.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="../assets/forks-gallery-4.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="../assets/forks-gallery-5.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="../assets/forks-gallery-6.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="../assets/forks-gallery-7.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="../assets/forks-gallery-8.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="../assets/forks-gallery-9.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="../assets/forks-gallery-10.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="../assets/forks-gallery-12.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="../assets/forks-gallery-13.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="../assets/forks-gallery-14.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="../assets/forks-gallery-15.jpg"
            ></b-carousel-slide>
          </b-carousel>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "Overviewforks",
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
