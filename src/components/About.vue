<template>
  <section id="about" class="about">
    <b-container>
      <b-row class="my-md-5">
        <b-col md="6" class="d-flex align-items-center justify-content-center">
          <h1 class="my-5 about-title">{{ $t("about.title") }}</h1>
        </b-col>
        <b-col md="6" class="mb-2">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            class="about-text module"
          >
          {{ $t("about.text") }}
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "About",
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
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
  margin-bottom: 1em;
}
h1 {
  text-align: left;
  padding-top: auto;
  padding-bottom: auto;
  font-size: 2em;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}
p {
  font-size: 1.2em;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
  justify-content: center;
}
</style>
