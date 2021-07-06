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
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-1.jpg?alt=media&token=5c2f6017-2e69-4155-834c-b90665d9b80a"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-2.jpg?alt=media&token=907047d4-d160-4873-bf9a-1f49ce97c514"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-3.jpg?alt=media&token=fa4c41ff-c633-4fc0-9d20-fb33ba35eeda"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-4.jpg?alt=media&token=424758f1-dc81-43b8-a0e5-42d7fc33627c"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-5.jpg?alt=media&token=3e64404f-37c7-44f6-b135-1a7c826d7a11"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-6.jpg?alt=media&token=13837566-1db6-4cf4-8152-c8a98581132b"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-7.jpg?alt=media&token=edbacc71-17b5-4624-a933-4f4073210485"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-8.jpg?alt=media&token=45f86179-a8df-4934-8011-b3f3adc5f0ab"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-9.jpg?alt=media&token=f26ef277-ed30-4356-9094-ad052aa84d39"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-10.jpg?alt=media&token=3053e3ff-8e86-40ec-ae7b-745d675fca79"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-12.jpg?alt=media&token=b9c62f77-6a7f-4675-b2c4-b1144ac7e725"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-13.jpg?alt=media&token=17568a91-e788-4369-be1a-6a554896e5a5"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-14.jpg?alt=media&token=ae52456b-4172-4d29-8998-2ead6f961b98"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/frontforkscourse%2Fforks-gallery-15.jpg?alt=media&token=0a04c67c-7fb0-4079-b00e-665876caf89d"
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
