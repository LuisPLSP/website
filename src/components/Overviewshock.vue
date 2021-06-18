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
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/courses%2Fbannershock.jpg?alt=media&token=3a77329e-c86a-4633-a70c-5fc25860aefd"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-2.jpg?alt=media&token=37b17f29-eb0c-4ecd-b43d-e03f31a0efd1"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-3.jpg?alt=media&token=944b2fdc-6b65-44a8-97e1-f58d8580f588"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-4.jpg?alt=media&token=1daa63a7-1247-4002-b8b9-b62247b02d31"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-5.jpg?alt=media&token=03a849e0-7393-450b-8211-6aeab9d01c07"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-6.jpg?alt=media&token=7319f05c-a110-4b09-9f78-bdddb97c7ffe"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-7.jpg?alt=media&token=22e22ba5-49b6-4e65-8379-bc741ea11948"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-8.jpg?alt=media&token=a1ea4c60-0710-4ab9-93f3-1fa4bfbe9122"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-9.jpg?alt=media&token=15258949-10a2-4582-a710-7753100f9324"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-10.jpg?alt=media&token=334fb056-4408-4332-bfa6-593c5dbb0219"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-11.jpg?alt=media&token=648f8c65-024f-451b-8120-b95bb9b8d793"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-13.jpg?alt=media&token=dd7fac82-4cf3-4c01-a5fb-afa226e8a2d3"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-14.jpg?alt=media&token=fbd1af7f-9125-4153-b76e-b4a5343a556c"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-15.jpg?alt=media&token=477ec778-57f5-40e0-a278-c5f7fbf79170"
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
