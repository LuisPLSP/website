<template>
  <section class="detailsforkscourse">
    <b-container fluid="md">
      <b-row class="my-3 d-flex align-items-center justify-content-center">
        <b-col lg="10">
          <b-card no-body>
            <b-tabs card>
              <b-tab :title="$t('forks.tabthecourse')" active>
                <b-card-text>
                  <p>{{ $t("forks.textthecourse1") }}</p>
                  <p>{{ $t("forks.textthecourse2") }}</p>
                  <h4>{{ $t("forks.whatyouwilllearn") }}</h4>
                  <ul>
                    <li>{{ $t("forks.whatyouwilllearn1") }}</li>
                    <li>{{ $t("forks.whatyouwilllearn2") }}</li>
                    <li>{{ $t("forks.whatyouwilllearn3") }}</li>
                    <li>{{ $t("forks.whatyouwilllearn4") }}</li>
                  </ul>
                  <h4>{{ $t("forks.extras") }}</h4>
                  <ul>
                    <li>{{ $t("forks.textextras1") }}</li>
                    <li>{{ $t("forks.textextras2") }}</li>
                    <li>{{ $t("forks.textextras3") }}</li>
                    <li>{{ $t("forks.textextras4") }}</li>
                    <li>{{ $t("forks.textextras5") }}</li>
                  </ul>
                  <h4>{{ $t("forks.requirements") }}</h4>
                  <p>{{ $t("forks.textrequirements1") }}</p>
                  <p>{{ $t("forks.textrequirements2") }}</p>
                </b-card-text>
              </b-tab>
              <b-tab :title="$t('forks.tabisthisforme')">
                <b-card-text>
                  <p>{{ $t("forks.textisthisforme1") }}</p>
                  <p>{{ $t("forks.textisthisforme2") }}</p>
                  <h4>{{ $t("forks.weekendwarrior") }}</h4>
                  <p>{{ $t("forks.textweekendwarrior") }}</p>
                  <h4>{{ $t("forks.amateurpro") }}</h4>
                  <p>{{ $t("forks.textamateurpro1") }}</p>
                  <p>{{ $t("forks.textamateurpro2") }}</p></b-card-text
                >
              </b-tab>
              <b-tab :title="$t('forks.tabsigningup')">
                <b-card-text>
                  <p>{{ $t("forks.textsigningup1") }}</p>
                  <p>{{ $t("forks.textsigningup2") }}</p>
                  <p>{{ $t("forks.textsigningup3") }}</p>
                  <p>{{ $t("forks.textsigningup4") }}</p></b-card-text
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
  name: "Detailsforkscourse",
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
  font-family: "Roboto Condensed", sans-serif;
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
