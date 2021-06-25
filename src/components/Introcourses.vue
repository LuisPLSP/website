<template>
  <section class="intro">
    <b-container>
      <b-row>
        <b-col class="intro-text my-4" lg="6">
          <p style="text-align: left;">
            {{ $t("courses.text1") }}
          </p>
          <p style="text-align: left;">
            {{ $t("courses.text2") }}
          </p>
        </b-col>

        <b-col lg="6" class="my-3" align-v="center">
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/G2qiWOHQoPY"
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
  font-family: "Roboto Condensed", sans-serif;
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
