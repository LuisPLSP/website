<template>
  <section id="videos" class="videos">
    <b-container class="embed">
      <b-row class="my-md-5">
        <b-col md="6" data-aos="fade-up" data-aos-duration="1000" class="module"
          ><b-card class="shadow-lg" title="Offroad Engineered">
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/_v9gnC5PiWk"
              allowfullscreens
            ></b-embed>
            <b-card-text style="margin-top: 10px;">
              {{ $t("videos.offroadengineered.text") }}
              <!-- A series of educational and informative videos that explain in a
              simple and animated way, the engineering behind the dirt bikes we
              ride and the sport itself. -->
            </b-card-text>

            <b-button
              href="https://www.youtube.com/watch?v=p88nLIZ4QYg&list=PLHSgGy8X-DgWVWBw-yR10u0tFgi8qQAG8"
              target="_blank"
              variant="primary"
              >{{ $t("videos.watchmore") }}</b-button
            >
          </b-card>
        </b-col>
        <b-col md="6" data-aos="fade-up" data-aos-duration="1500" class="module"
          ><b-card class="shadow-lg" title="How-to's">
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/KPWzyBh6iN4"
              allowfullscreens
            ></b-embed>
            <b-card-text style="margin-top: 10px;">
              {{ $t("videos.how-tos.text") }}
              <!-- Not everything needs to be complex. We have some very simple tips
              and tricks on how to take care of your bike or even for you to
              become a better rider. -->
            </b-card-text>

            <b-button
              href="https://www.youtube.com/watch?v=Tqg4juGzrPo&list=PLHSgGy8X-DgWDosqmcL1MrC9GHl8FUvBU"
              target="_blank"
              variant="primary"
              >{{ $t("videos.watchmore") }}</b-button
            >
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" data-aos="fade-up" data-aos-duration="1000" class="module"
          ><b-card class="shadow-lg" title="Reviews">
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/_s0HnK6e4tY"
              allowfullscreens
            ></b-embed>
            <b-card-text style="margin-top: 10px;">
              {{ $t("videos.reviews.text") }}
              <!-- Looking for to buy new gear or parts? Here you’ll find a
              down-to-earth perspective on a bunch of products, so you can do a
              well-though and informed purchase. -->
            </b-card-text>

            <b-button
              href="https://www.youtube.com/watch?v=UkVHY90Ast4&list=PLHSgGy8X-DgXb9ikFBfyijEyjTP5ZvTSL"
              target="_blank"
              variant="primary"
              >{{ $t("videos.watchmore") }}</b-button
            >
          </b-card>
        </b-col>
        <b-col md="6" data-aos="fade-up" data-aos-duration="1500" class="module"
          ><b-card class="shadow-lg" title="Races">
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/3TWD9xUAxRc"
              allowfullscreens
            ></b-embed>
            <b-card-text style="margin-top: 10px;">
              {{ $t("videos.races.text") }}
              <!-- One of the best things about riding… is racing. You can follow the
              adventures of the S2P team and discover more about the Portuguese
              racing environment! -->
            </b-card-text>

            <b-button
              href="https://www.youtube.com/watch?v=KJhGZ5AnAxA&list=PLHSgGy8X-DgXrFE_SCm3WuAN-y9FDysOl"
              target="_blank"
              variant="primary"
              >{{ $t("videos.watchmore") }}</b-button
            >
          </b-card>
        </b-col>
      </b-row>
      <b-row class="my-md-5" v-show="!isHidden">
        <b-col
          md="6"
          class="module"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <b-card class="shadow-lg" title="Behind the Scenes">
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/qcBd63dva1Y"
              allowfullscreens
            ></b-embed>
            <b-card-text style="margin-top: 10px;">
              {{ $t("videos.behindthescenes.text") }}
              <!-- In this segment, we'll tell you the story of your favorite Offroad
              brands and where they are headed, by interviewing people from
              inside the company. -->
            </b-card-text>

            <b-button
              href="https://www.youtube.com/watch?v=qcBd63dva1Y&list=PLHSgGy8X-DgVHB44FAgFRCJbHn-19tgUk"
              target="_blank"
              variant="primary"
              >{{ $t("videos.watchmore") }}</b-button
            >
          </b-card>
        </b-col>
        <b-col
          md="6"
          class="module"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <b-card class="shadow-lg" title="Interviews">
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/fSPpY9XHPWo"
              allowfullscreens
            ></b-embed>
            <b-card-text style="margin-top: 10px;">
              {{ $t("videos.interviews.text") }}
              <!-- Steps to Podium allows Luis to have a deeper insight on the
              Offroad world by having interesting chats and interviews with key
              people from the Offroad community. -->
            </b-card-text>

            <b-button
              href="https://www.youtube.com/watch?v=fSPpY9XHPWo&list=PLHSgGy8X-DgVTtxRqI3b7ODqV8rcHVy08"
              target="_blank"
              variant="primary"
              >{{ $t("videos.watchmore") }}</b-button
            >
          </b-card>
        </b-col>
      </b-row>

      <b-row v-if="isHidden" class="justify-content-center mt-5">
        <b-col
          md="6"
          data-aos="fade-up"
          data-aos-duration="1500"
          class="d-flex align-items-center"
        >
          <b-button
            block
            v-on:click="isHidden = !isHidden"
            variant="outline-primary"
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
      isHidden: true
    };
  }
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
</style>
