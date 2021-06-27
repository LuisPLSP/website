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
        <b-col lg="5" data-aos="fade-up" data-aos-duration="200" class="module">
          <b-card
            class="shadow-lg card"
            img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/courses%2FFrontFork-card.png?alt=media&token=c68ac30b-842f-4bad-87c9-9b01225dd873"
            img-alt="Front fork course"
            overlay
          >
            <div class="overlay-text">
              <h2>{{ $t("courses.forkscourses") }}</h2>
              <h3>
                {{ $t("courses.forksdate1") }} |
                {{ $t("courses.forkslocation1") }}
              </h3>
            </div>
            <router-link to="/frontforkscourse">
              <b-button class="btn-to-course">{{
                $t("courses.watchmore")
              }}</b-button>
            </router-link>
          </b-card>
        </b-col>
        <b-col lg="5" data-aos="fade-up" data-aos-duration="300" class="module">
          <b-card
            style="position: relative;"
            class="shadow-lg card"
            img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/courses%2FFrontFork-card.png?alt=media&token=c68ac30b-842f-4bad-87c9-9b01225dd873"
            img-alt="Front fork course"
            overlay
          >
            <div class="overlay-text">
              <h2>{{ $t("courses.forkscourses") }}</h2>
              <h3>
                {{ $t("courses.forksdate2") }} |
                {{ $t("courses.forkslocation2") }}
              </h3>
            </div>
            <router-link to="/frontforkscourse">
              <b-button class="btn-to-course">{{
                $t("courses.watchmore")
              }}</b-button>
            </router-link>
          </b-card>
        </b-col> </b-row
      ><b-row class="mb-md-5" align-h="around">
        <b-col lg="5" data-aos="fade-up" data-aos-duration="200" class="module">
          <b-card
            style="position: relative;"
            class="shadow-lg card"
            img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/courses%2FShock-card.png?alt=media&token=e9b9656c-213d-4c00-acde-fd4856e6b2fe"
            img-alt="rear shock course"
            overlay
          >
            <div class="overlay-text">
              <h2>{{ $t("courses.shockcourses") }}</h2>
              <h3>
                {{ $t("courses.shockdate1") }} |
                {{ $t("courses.shocklocation1") }}
              </h3>
            </div>
            <router-link to="/rearshockcourse">
              <b-button class="btn-to-course">{{
                $t("courses.watchmore")
              }}</b-button>
            </router-link>
          </b-card>
        </b-col>
        <b-col lg="5" data-aos="fade-up" data-aos-duration="300" class="module">
          <b-card
            class="shadow-lg card"
            img-src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/courses%2FShock-card.png?alt=media&token=e9b9656c-213d-4c00-acde-fd4856e6b2fe"
            img-alt="rear shock course"
            overlay
          >
            <div class="overlay-text">
              <h2>{{ $t("courses.shockcourses") }}</h2>
              <h3>
                {{ $t("courses.shockdate2") }} |
                {{ $t("courses.shocklocation2") }}
              </h3>
            </div>
            <b-button disabled class="btn-to-course">{{
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
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
    redirectToForks() {
      this.$router.push({ path: "/forkscourse" });
    },
    redirectToShock() {
      this.$router.push({ path: "/shockcourse/#shock" });
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

.btn-to-course {
  position: absolute;
  // left: 30%;
  // right: 30%;
  top: 75%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  background-color: #067a14;

  &:hover {
    background-color: #04610f;
  }
  &:focus {
    background-color: #04610f;
  }
}
.overlay-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  position: absolute;
  top: 45%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  h2 {
    font-size: 40px;
    font-weight: 700;
    transform: scale(1, 1.2);
    text-shadow: 2px 2px 4px #000000;
  }
  h3 {
    font-size: 20px;
    font-weight: 700;
    transform: scale(1, 1.2);
    text-shadow: 2px 2px 4px #000000;
  }
}
@media only screen and (max-width: 500px) {
  .overlay-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 700;
    position: absolute;
    top: 45%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    h2 {
      font-size: 25px;
      font-weight: 700;
      transform: scale(1, 1.2);
    }
    h3 {
      font-size: 10px;
      font-weight: 700;
      transform: scale(1, 1.2);
    }
  }
}
@media only screen and (max-width: 1200px) {
  .overlay-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 700;
    position: absolute;
    top: 45%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    h2 {
      font-size: 35px;
      font-weight: 700;
      transform: scale(1, 1.2);
    }
    h3 {
      font-size: 20px;
      font-weight: 700;
      transform: scale(1, 1.2);
    }
  }
}
</style>
