<template>
  <section class="detailstechsession">
    <b-container fluid="md">
      <b-row class="d-flex align-items-center justify-content-center">
        <b-col md="10">
          <div class="accordion" role="tablist">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="button" block v-b-toggle.accordion-1>{{
                  $t("techsession.accordionbooktitle")
                }}</b-button>
              </b-card-header>
              <b-collapse
                id="accordion-1"
                visible
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <p>{{ $t("techsession.accordionbooktext1") }}</p>
                    <ol>
                      <li>
                        {{ $t("techsession.accordionbookstep1") }}
                      </li>
                      <li>
                        {{ $t("techsession.accordionbookstep2") }}
                      </li>
                      <li>
                        {{ $t("techsession.accordionbookstep3") }}
                      </li>
                    </ol>
                    <p>
                      {{ $t("techsession.accordionbooktext2")
                      }}<a>{{ $t("techsession.accordionbookemail") }}</a
                      >.
                    </p>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="button" block v-b-toggle.accordion-2
                  >{{ $t("techsession.accordiontimetitle") }}
                </b-button>
              </b-card-header>
              <b-collapse
                id="accordion-2"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <p>{{ $t("techsession.accordiontimetext1") }}</p>
                    <p>
                      {{ $t("techsession.accordiontimetext2") }}
                    </p>
                    <p>
                      {{ $t("techsession.accordiontimetext3") }}
                    </p>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "Detailstechsession",
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
