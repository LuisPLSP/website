<template>
  <section id="allcourses" class="allcourses">
    <b-container class="embed">
      <b-row class="my-3">
        <b-col
          md="12"
          class="text-center d-flex align-items-center justify-content-center"
        >
          <h1 class="mb-5 intro-title">{{ $t("courses.allcourses") }}</h1>
        </b-col>
      </b-row>
      <b-row class="my-md-5" align-h="around">
        <b-col lg="5" data-aos="fade-up" data-aos-duration="1000" class="module"
          ><b-card
            style="position: relative;"
            class="shadow-lg"
            :img-src="require('../assets/frontForkCourse.jpg')"
            img-alt="Front fork course"
            overlay
          >
            <b-button
              class="btn-to-course"
              href="/forkscourse"
              target="_blank"
              >{{ $t("courses.watchmore") }}</b-button
            >
          </b-card>
        </b-col>
        <b-col lg="5" data-aos="fade-up" data-aos-duration="1500" class="module"
          ><b-card
            style="position: relative;"
            class="shadow-lg"
            :img-src="require('../assets/bannershock.jpg')"
            img-alt="Front fork course"
            overlay
          >
            <b-button
              class="btn-to-course"
              href="/shockcourse"
              target="_blank"
              >{{ $t("courses.watchmore") }}</b-button
            >
          </b-card>
        </b-col> </b-row
      ><b-row class="mb-md-5" align-h="around">
        <b-col lg="5" data-aos="fade-up" data-aos-duration="1000" class="module"
          ><b-card
            style="position: relative;"
            class="shadow-lg"
            :img-src="require('../assets/frontForkCourse.jpg')"
            img-alt="Front fork course"
            overlay
          >
            <b-button
              class="btn-to-course"
              href="/techsession"
              target="_blank"
              >{{ $t("courses.watchmore") }}</b-button
            >
          </b-card>
        </b-col>
        <b-col lg="5" data-aos="fade-up" data-aos-duration="1500" class="module"
          ><b-card
            class="shadow-lg"
            :img-src="require('../assets/frontForkCourse.jpg')"
            img-alt="Front fork course"
            overlay
          >
            <b-button disabled class="btn-to-course" href="#" target="_blank">{{
              $t("courses.comingsoon")
            }}</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {
  name: "Allcourses",
  data() {
    return {};
  },
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
.btn-to-course {
  position: absolute;
  left: 30%;
  right: 30%;
  top: 75%;
  background-color: #067a14;
  &:hover {
    background-color: #04610f;
  }
  &:focus {
    background-color: #04610f;
  }
}
</style>
