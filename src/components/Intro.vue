<template>
  <section class="intro">
    <b-container>
      <b-row class="my-3">
        <b-col
          md="6"
          class="text-center d-flex align-items-center justify-content-center"
        >
          <h1 class="mb-5 intro-title">{{ $t("intro.title") }}</h1>
        </b-col>
        <b-col md="6">
          <p>
            {{ $t("intro.text1") }}<br />
            {{ $t("intro.text2") }}
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "Intro",
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
