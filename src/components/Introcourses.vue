<template>
  <section class="intro">
    <b-container>
      <b-row class="my-4">
        <b-col lg="6" class="d-flex">
          <h1 class=" intro-title" style="text-align: left;">
            What to expect from these Courses?
          </h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="intro-text my-3" lg="6">
          <p style="text-align: left;">
            There is something that most suspension workshops
            <strong>don't tell you:</strong>
            <br />
            You can do a lot of adjustments to your suspensions before having to
            "revalve" them. The goal of these courses is simply to learn to
            understand what your suspensions are doing and learn how to adjust
            them for your liking and riding.
          </p>
          <p style="text-align: left; font-style: italic;">
            Money spent in knowledge and education only values over time. On
            parts, the opposite happens.
          </p>
        </b-col>

        <b-col lg="6" class="my-3" align-v="center">
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/dRekn0iRiRs"
            allowfullscreens
          ></b-embed>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "Introcourses",
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
