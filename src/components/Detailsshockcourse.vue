<template>
  <section class="detailsshockcourse">
    <b-container fluid="md">
      <b-row class="my-3 d-flex align-items-center justify-content-center">
        <b-col lg="10">
          <b-card no-body>
            <b-tabs card>
              <b-tab :title="$t('shock.tabthecourse')" active>
                <b-card-text>
                  <p>{{ $t("shock.textthecourse1") }}</p>
                  <p>{{ $t("shock.textthecourse2") }}</p>
                  <h4>{{ $t("shock.whatyouwilllearn") }}</h4>
                  <ul>
                    <li>{{ $t("shock.whatyouwilllearn1") }}</li>
                    <li>{{ $t("shock.whatyouwilllearn2") }}</li>
                    <li>{{ $t("shock.whatyouwilllearn3") }}</li>
                    <li>{{ $t("shock.whatyouwilllearn4") }}</li>
                  </ul>
                  <h4>{{ $t("shock.extras") }}</h4>
                  <ul>
                    <li>{{ $t("shock.textextras1") }}</li>
                    <li>{{ $t("shock.textextras2") }}</li>
                    <li>{{ $t("shock.textextras3") }}</li>
                    <li>{{ $t("shock.textextras4") }}</li>
                    <li>{{ $t("shock.textextras5") }}</li>
                  </ul>
                  <h4>{{ $t("shock.requirements") }}</h4>
                  <p>{{ $t("shock.textrequirements1") }}</p>
                  <p>{{ $t("shock.textrequirements2") }}</p>
                </b-card-text>
              </b-tab>
              <b-tab :title="$t('shock.tabisthisforme')">
                <b-card-text>
                  <p>{{ $t("shock.textisthisforme1") }}</p>
                  <p>{{ $t("shock.textisthisforme2") }}</p>
                  <h4>{{ $t("shock.weekendwarrior") }}</h4>
                  <p>{{ $t("shock.textweekendwarrior") }}</p>
                  <h4>{{ $t("shock.amateurpro") }}</h4>
                  <p>{{ $t("shock.textamateurpro1") }}</p>
                  <p>{{ $t("shock.textamateurpro2") }}</p></b-card-text
                >
              </b-tab>
              <b-tab :title="$t('shock.tabsigningup')">
                <b-card-text>
                  <p>{{ $t("shock.textsigningup1") }}</p>
                  <p>{{ $t("shock.textsigningup2") }}</p>
                  <p>{{ $t("shock.textsigningup3") }}</p>
                  <p>{{ $t("shock.textsigningup4") }}</p></b-card-text
                >
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "Detailsshockcourse",
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

h2 {
  padding-top: auto;
  padding-bottom: auto;
  font-size: 1.75em;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}
h4 {
  font-family: "Open-sans", sans-serif;
  font-weight: 500;
  padding-top: 10px;
}

p {
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 300;
}
ul {
  margin-top: 15px;
}
</style>
