<template>
  <section class="featuresapp">
    <b-container>
      <b-row class="my-3">
        <b-col
          md="12"
          class="text-center d-flex align-items-center justify-content-center"
        >
          <h1 class="mb-5 intro-title">Features</h1>
          <!-- <h1 class="mb-5 intro-title">{{ $t("introapp.title") }}</h1> -->
        </b-col>
        <b-col
        
          md="4"
          data-aos="fade-up"
          data-aos-duration="1000"
          class="module"
        >
          <p>
            Muddy Match is a simple mobile app that allows you to find new
            riding buddies, when your regular buddies can't!<br />
            You can also keep track of your rides - which can be useful when
            you're meeting new buddies and places to ride!
            <!-- {{ $t("introapp.text1") }}<br />
            {{ $t("introapp.text2") }} -->
          </p>
          <b-button v-b-modal.feature-1 variant="primary"
            >How it works</b-button
          >
        </b-col>
        <b-col
          md="4"
          data-aos="fade-up"
          data-aos-duration="1000"
          class="module"
        >
          <p>
            Have you ever been in a situation where your schedule only let's you
            ride in a specific date, but somehow you don't have any of your
            friends available to ride with you? We have been there, and
            <strong>we don't want it to happen to you!</strong>
          </p>
          <b-button v-b-modal.feature-2 variant="primary"
            >How it works</b-button
          >
        </b-col>
        <b-col
          md="4"
          data-aos="fade-up"
          data-aos-duration="1000"
          class="module"
        >
          <p>
            Have you ever been in a situation where your schedule only let's you
            ride in a specific date, but somehow you don't have any of your
            friends available to ride with you? We have been there, and
            <strong>we don't want it to happen to you!</strong>
          </p>
          <b-button v-b-modal.feature-3 variant="primary"
            >How it works</b-button
          >
        </b-col>
      </b-row>
    </b-container>
    <b-modal ok-only id="feature-1" title="Feature 1">
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube.com/embed/piw6AWByQu0"
        allowfullscreens
      ></b-embed>
      <p class="my-4">Hello from modal!</p>
    </b-modal>
    <b-modal ok-only id="feature-2" title="Feature 2">
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube.com/embed/piw6AWByQu0"
        allowfullscreens
      ></b-embed>
      <p class="my-4">Hello from modal!</p>
    </b-modal>
    <b-modal ok-only id="feature-3" title="Feature 3">
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube.com/embed/piw6AWByQu0"
        allowfullscreens
      ></b-embed>
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </section>
</template>

<script>
export default {
  name: "Introapp",
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

h1 {
  padding-top: auto;
  padding-bottom: auto;
  font-size: 2em;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}
h4 {
  font-family: "Open-sans", sans-serif;
  font-weight: 500;
}

p {
  font-size: 1.2em;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
  justify-content: center;
}
</style>
