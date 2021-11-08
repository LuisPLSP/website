<template>
  <section class="overviewshock">
    <b-container fluid="md">
      <b-row class="my-3 d-flex align-items-center justify-content-center">
        <b-col
          lg="4"
          class="d-flex align-items-center justify-content-center"
          data-aos="fade-up"
          data-aos-duration="300"
        >
          <b-card class="shadow-lg mb-3 mt-3" tag="article">
            <b-card-text>
              <h3>{{ $t("shock.time&date") }}</h3>
              <p>{{ $t("shock.time&date1") }}</p>
              <h3>{{ $t("shock.location") }}</h3>
              <p v-show="getCardDetails.location === 'zero'">
                {{ $t("shock.location0") }}
              </p>
              <p v-show="getCardDetails.location === 'one'">
                {{ $t("shock.location1") }}
              </p>
              <p v-show="getCardDetails.location === 'two'">
                {{ $t("shock.location2") }}
              </p>
              <p v-show="getCardDetails.location === 'three'">
                {{ $t("shock.location3") }}
              </p>
              <h3>{{ $t("shock.duration") }}</h3>
              <p>{{ $t("shock.duration1") }}</p>
              <h3>{{ $t("shock.maxparticipants") }}</h3>
              <p>{{ $t("shock.maxparticipants1") }}</p>
              <h3>{{ $t("shock.price") }}</h3>
              <p v-show="getCardDetails.price === 'regular'">
                {{ $t("shock.price1") }}
              </p>
              <p v-show="getCardDetails.price === 'high'">
                {{ $t("shock.price2") }}
              </p>
              <p v-show="getCardDetails.price === 'higher'">
                {{ $t("shock.price3") }}
              </p>
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
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-n2.jpg?alt=media&token=065585e3-f61b-4c25-b42e-be0eb356b6fb"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-n3.jpg?alt=media&token=def8662b-b758-4c1c-8c87-ab5ad63ced43"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-n4.jpg?alt=media&token=702701c9-5156-492f-8305-fa72701f0a92"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-n5.jpg?alt=media&token=88229ffc-5aed-4a4d-b141-a1935f66719b"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-n6.jpg?alt=media&token=a1d260a7-7231-461b-9d0d-fd94977361d6"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-n7.jpg?alt=media&token=05d6e74b-5c61-47d4-8d63-b3069ad7de3a"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-n8.jpg?alt=media&token=917f6ff1-21b2-4c5a-9b97-b1de37e05919"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-n9.jpg?alt=media&token=c9f9dbb2-f906-49dd-8a90-841293a73af3"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-n10.jpg?alt=media&token=0dd17dfd-e082-4588-9d95-ef53eebe25dc"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-n11.jpg?alt=media&token=cfad207f-b423-4f65-8c94-9307e08693dc"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-n13.jpg?alt=media&token=31f8d408-d520-45b0-8333-fd2e38858ddf"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-n14.jpg?alt=media&token=14a86697-b7e3-4cb1-9b28-fb422cef4a26"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-n15.jpg?alt=media&token=c8b8c06b-68b4-45b2-8715-510b154efd0c"
            ></b-carousel-slide>
          </b-carousel>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Overviewshock",
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
  computed: {
    ...mapGetters(["getCardDetails"]),
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
  font-family: "Roboto Condensed", sans-serif;
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
