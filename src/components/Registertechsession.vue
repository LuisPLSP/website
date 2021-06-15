<template>
  <section id="registertechsession" class="register">
    <b-container>
      <b-row class="mt-3">
        <b-col class="d-flex align-items-center justify-content-center" md="12">
          <h1 class="my-3 contact-title">{{ $t("register.title") }}</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          md="12"
          class="text-center d-flex align-items-center justify-content-center mb-3"
        >
          <h5>{{ $t("register.text") }}</h5>
        </b-col>
      </b-row>
      <b-row class="d-flex align-items-center justify-content-center">
        <b-col md="10">
          <div
            id="registerTechSessEN"
            v-show="getLangEn"
            :class="{ 'd-flex': getLangEn }"
            class=" align-items-center justify-content-center"
          ></div>
          <div
            v-show="getLangPt"
            id="registerTechSessPT"
            :class="{ 'd-flex': getLangPt }"
            class="align-items-center justify-content-center"
          ></div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
//import Vue from "vue";
export default {
  name: "Registercourse",

  computed: {
    ...mapGetters(["getLangEn", "getLangPt"]),
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      console.log(locale);
    },
  },
  mounted() {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "20187745",
          formId: "f7a6b137-9dad-4b59-8e02-fb9dc83fda5d",
          target: "#registerTechSessEN",
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
          formId: "22c1849a-8903-4685-826a-e4095c99b093",
          target: "#registerTechSessPT",
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
  padding-top: auto;
  padding-bottom: auto;
  font-size: 2em;
  font-family: "Open-sans", sans-serif;
  font-weight: 700;
}
.form {
  margin-bottom: 0.3em;
  margin-top: 0.75em;
}
</style>
