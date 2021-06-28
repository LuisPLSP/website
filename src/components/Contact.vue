<template>
  <section class="contact">
    <b-container>
      <b-row class="mt-4">
        <b-col
          id="contact-us"
          class="d-flex align-items-center justify-content-center"
          md="12"
        >
          <h1>{{ $t("contact.title") }}</h1>
        </b-col>
      </b-row>
      <b-row class="mb-3">
        <b-col
          id="contact-us"
          style="display: flex; flex-direction: column; align-items: center;"
          md="12"
        >
          <p style="margin-bottom: 0px;">{{ $t("contact.text1") }}</p>
          <p>{{ $t("contact.text2") }}</p>
        </b-col>
      </b-row>
      <b-row class="d-flex align-items-center justify-content-center">
        <b-col md="10">
          <div
            id="contactFormEN"
            v-show="getLangEn"
            :class="{ 'd-flex': getLangEn }"
            class=" align-items-center justify-content-center"
          ></div>
          <div
            v-show="getLangPt"
            id="contactFormPT"
            :class="{ 'd-flex': getLangPt }"
            class="align-items-center justify-content-center"
          ></div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
//import Vue from "vue";
export default {
  name: "Contact",

  computed: {
    ...mapGetters(["getLangEn", "getLangPt"]),
  },

  methods: {
    ...mapActions(["index/changeLangEn", "index/changeLangPt"]),
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
  mounted() {
    const firstLocale = this.$i18n.locale;
    if (firstLocale == "en") {
      this.$store.dispatch("changeLangEn", true),
        this.$store.dispatch("changeLangPt", false);
    } else {
      this.$store.dispatch("changeLangEn", false),
        this.$store.dispatch("changeLangPt", true);
    }

    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "20187745",
          formId: "7f54eec8-73c9-4239-a670-2cf269c58211",
          target: "#contactFormEN",
        });
      }
    });
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "20187745",
          formId: "36aeb33e-b47d-4944-aa62-1b73d6b6b76d",
          target: "#contactFormPT",
        });
      }
    });
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
  text-align: left;
  padding-top: auto;
  padding-bottom: auto;
  font-size: 2em;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
}
.form {
  margin-bottom: 0.3em;
  margin-top: 0.75em;
}
</style>
