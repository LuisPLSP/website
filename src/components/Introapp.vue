<template>
  <section class="introapp">
    <b-container>
      <b-row class="my-3">
        <b-col
          md="6"
          class="text-center d-flex align-items-center justify-content-center"
        >
        <h1 class="mb-5 intro-title">What is Muddy Match?</h1>
          <!-- <h1 class="mb-5 intro-title">{{ $t("introapp.title") }}</h1> -->
        </b-col>
        <b-col md="6">
          <p>
            Muddy Match is a simple mobile app that allows you to find new riding buddies, when your regular buddies can't!<br >
            You can also keep track of your rides - which can be useful when you're meeting new buddies and places to ride.
            <!-- {{ $t("introapp.text1") }}<br />
            {{ $t("introapp.text2") }} -->
          </p>
        </b-col>
        <b-col md="12">
          <p>
            Have you ever been in a situation where your schedule only let's you ride in a specific date, but somehow you don't have any of your friends available to ride with you? We have been there, and <strong>we don't want it to happen to you!</strong>
          </p>
          </b-col>
          <b-col md="12" class="pb-1 pt-4 align-items-center justify-content-center d-flex"><b-button pill size="lg" variant="success">Download app</b-button></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "Introapp",
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    }
  }
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
