<template>
  <section class="overviewtechsession">
    <b-container fluid="md">
      <b-row class="my-3 d-flex align-items-center justify-content-center">
        <b-col
          lg="4"
          class="d-flex align-items-center justify-content-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <b-card
            class="d-flex align-items-center justify-content-flex-start shadow-lg mb-3 mt-3 mx-2"
            tag="article"
          >
            <b-card-text>
              <h3>{{ $t("techsession.durationtitle") }}</h3>
              <p>{{ $t("techsession.durationtext") }}</p>
              <h3>{{ $t("techsession.pricetitle") }}</h3>
              <p>
                {{ $t("techsession.pricetext1") }}<br />{{
                  $t("techsession.pricetext2")
                }}
              </p>
              <h3>{{ $t("techsession.time&datetitle") }}</h3>
              <p>{{ $t("techsession.time&datetext") }}</p>
              <h3>{{ $t("techsession.locationtitle") }}</h3>
              <p>{{ $t("techsession.locationtext") }}</p>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col
          lg="6"
          style="display: flex; flex-direction: column; align-items: center; justify-content: center;"
          class="mx-3"
          ><p>
            {{ $t("techsession.text1") }}
          </p>
          <br />
          <p>
            {{ $t("techsession.text2") }}
          </p>
          <br />
          <div style="width:100%;">
            <b-button
              class="button"
              style="margin-right: auto; margin-left: 0px; width: 200px;"
              href="#registertechsession"
              >{{ $t("techsession.signup") }}</b-button
            >
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "Overviewtechsession",
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
.button {
  background-color: #067a14;
  &:hover {
    background-color: #04610f;
  }
}
</style>
