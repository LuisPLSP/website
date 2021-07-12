<template>
  <section class="overviewforks">
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
              <h3>{{ $t("forks.time&date") }}</h3>
              <p>
                {{ $t("forks.time&date1") }}
              </p>
              <h3>{{ $t("forks.location") }}</h3>
              <p v-show="getCardDetails.location === 'one'">
                {{ $t("forks.location1") }}
              </p>
              <p v-show="getCardDetails.location === 'two'">
                {{ $t("forks.location2") }}
              </p>
              <p v-show="getCardDetails.location === 'three'">
                {{ $t("forks.location3") }}
              </p>
              <h3>{{ $t("forks.duration") }}</h3>
              <p>{{ $t("forks.duration1") }}</p>
              <h3>{{ $t("forks.maxparticipants") }}</h3>
              <p>{{ $t("forks.maxparticipants1") }}</p>
              <h3>{{ $t("forks.price") }}</h3>
              <p v-show="getCardDetails.price === 'regular'">
                {{ $t("forks.price1") }}
              </p>
              <p v-show="getCardDetails.price === 'high'">
                {{ $t("forks.price2") }}
              </p>
            </b-card-text>
            <b-button float="right" variant="primary">{{
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
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-n1.jpg?alt=media&token=f148f3e5-9dff-4d6f-ac7a-5df705b2fd75"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-n2.jpg?alt=media&token=bd8130ac-adbe-488c-844f-f3452bb1d35e"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-n3.jpg?alt=media&token=1103fd7d-1bed-4327-86e1-dda9c9a9dafa"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-n4.jpg?alt=media&token=6f3b1a6f-7f04-4c3a-afff-ba3fae623788"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-n5.jpg?alt=media&token=7a13e728-1ef3-413b-aa36-6aba1db4a023"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-n6.jpg?alt=media&token=68fa548e-5bc2-4c46-b933-371d048d1360"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-n7.jpg?alt=media&token=fa185937-86a6-4f84-b785-1dae25e9b1b9"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-n8.jpg?alt=media&token=482d6a4d-5a99-4049-b68d-c2d4da3635af"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-n9.jpg?alt=media&token=236c41d1-ef15-4830-a8f4-4e1e299d3306"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-n10.jpg?alt=media&token=f531a87c-0a68-497b-aedd-402f4a23cc44"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2FbannerTechnicalSessions.jpg?alt=media&token=542519d3-8487-4df1-9a21-6bee5a3e7715"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-n13.jpg?alt=media&token=6a9a7060-8668-433e-b9c2-be555cbe8979"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-n14.jpg?alt=media&token=3dc37539-d2c7-4741-abca-ffc5f167f26d"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-n15.jpg?alt=media&token=f401a7b9-3f88-445e-840f-565b9b42c1be"
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
  name: "Overviewforks",
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
