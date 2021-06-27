<template>
  <section id="videos" class="videos">
    <b-container class="embed">
      <b-row class="my-md-4">
        <b-col md="6" data-aos="fade-up" data-aos-duration="200" class="module"
          ><b-card
            class="shadow-lg"
            :title="$t('videos.offroadengineered.title')"
          >
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/dRekn0iRiRs"
              allowfullscreens
            ></b-embed>
            <b-card-text style="margin-top: 10px;">
              {{ $t("videos.offroadengineered.text") }}
            </b-card-text>

            <b-button
              href="https://www.youtube.com/watch?v=p88nLIZ4QYg&list=PLHSgGy8X-DgWVWBw-yR10u0tFgi8qQAG8"
              target="_blank"
              class="button"
              >{{ $t("videos.watchmore") }}</b-button
            >
          </b-card>
        </b-col>
        <b-col md="6" data-aos="fade-up" data-aos-duration="300" class="module"
          ><b-card class="shadow-lg" :title="$t('videos.how-tos.title')">
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/KPWzyBh6iN4"
              allowfullscreens
            ></b-embed>
            <b-card-text style="margin-top: 10px;">
              {{ $t("videos.how-tos.text") }}
            </b-card-text>

            <b-button
              href="https://www.youtube.com/watch?v=bjWCacKgx20&list=PLHSgGy8X-DgWDosqmcL1MrC9GHl8FUvBU&index=12"
              target="_blank"
              class="button"
              >{{ $t("videos.watchmore") }}</b-button
            >
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" data-aos="fade-up" data-aos-duration="200" class="module"
          ><b-card class="shadow-lg" :title="$t('videos.reviews.title')">
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/qL8ZkjNCNsg"
              allowfullscreens
            ></b-embed>
            <b-card-text style="margin-top: 10px;">
              {{ $t("videos.reviews.text") }}
            </b-card-text>

            <b-button
              href="https://www.youtube.com/watch?v=WCxFQXSimfk&list=PLHSgGy8X-DgXb9ikFBfyijEyjTP5ZvTSL&index=9"
              target="_blank"
              class="button"
              >{{ $t("videos.watchmore") }}</b-button
            >
          </b-card>
        </b-col>
        <b-col md="6" data-aos="fade-up" data-aos-duration="300" class="module">
          <b-card class="shadow-lg" :title="$t('videos.behindthescenes.title')">
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/piw6AWByQu0"
              allowfullscreens
            ></b-embed>
            <b-card-text style="margin-top: 10px;">
              {{ $t("videos.behindthescenes.text") }}
            </b-card-text>

            <b-button
              href="https://www.youtube.com/watch?v=qcBd63dva1Y&list=PLHSgGy8X-DgVHB44FAgFRCJbHn-19tgUk"
              target="_blank"
              class="button"
              >{{ $t("videos.watchmore") }}</b-button
            >
          </b-card>
        </b-col>
      </b-row>
      <b-row class="my-md-5" v-show="!isHidden">
        <b-col md="6" class="module" data-aos="fade-up" data-aos-duration="200">
          <b-card class="shadow-lg" :title="$t('videos.races.title')">
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/3TWD9xUAxRc"
              allowfullscreens
            ></b-embed>
            <b-card-text style="margin-top: 10px;">
              {{ $t("videos.races.text") }}
            </b-card-text>

            <b-button
              href="https://www.youtube.com/watch?v=KJhGZ5AnAxA&list=PLHSgGy8X-DgXrFE_SCm3WuAN-y9FDysOl"
              target="_blank"
              class="button"
              >{{ $t("videos.watchmore") }}</b-button
            >
          </b-card>
        </b-col>
        <b-col md="6" class="module" data-aos="fade-up" data-aos-duration="200">
          <b-card class="shadow-lg" :title="$t('videos.interviews.title')">
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/fSPpY9XHPWo"
              allowfullscreens
            ></b-embed>
            <b-card-text style="margin-top: 10px;">
              {{ $t("videos.interviews.text") }}
            </b-card-text>

            <b-button
              href="https://www.youtube.com/watch?v=fSPpY9XHPWo&list=PLHSgGy8X-DgVTtxRqI3b7ODqV8rcHVy08"
              target="_blank"
              class="button"
              >{{ $t("videos.watchmore") }}</b-button
            >
          </b-card>
        </b-col>
      </b-row>

      <b-row v-if="isHidden" class="justify-content-center mt-5">
        <b-col
          md="6"
          data-aos="fade-up"
          data-aos-duration="300"
          class="d-flex align-items-center"
        >
          <b-button
            block
            v-on:click="isHidden = !isHidden"
            class="outline-button"
            >{{ $t("videos.loadmore") }}</b-button
          >
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {
  name: "Videos",
  data() {
    return {
      isHidden: true,
    };
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
.button {
  width: 150px;
  background-color: #067a14;
  &:hover {
    background-color: #04610f;
  }
}
.outline-button {
  background-color: transparent;
  color: black;
  &:hover {
    background-color: #067a14;
  }
}
</style>
