<template>
  <section class="videos">
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
              A series of educational videos that explain, in a simple and
              animated way, the engineering behind the dirt bikes we ride and
              the sport itself.
            </b-card-text>

            <b-button
              href="https://www.youtube.com/watch?v=p88nLIZ4QYg&list=PLHSgGy8X-DgWVWBw-yR10u0tFgi8qQAG8"
              variant="primary"
              >Watch more</b-button
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
              Not everything needs to be complex. We have some very simple tips
              and tricks on how to take care of your bike or even for you to
              become a better rider.
            </b-card-text>

            <b-button
              href="https://www.youtube.com/watch?v=Tqg4juGzrPo&list=PLHSgGy8X-DgWDosqmcL1MrC9GHl8FUvBU"
              variant="primary"
              >Watch more</b-button
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
              Looking for to buy new gear or parts? Here you’ll find a
              down-to-earth perspective on a bunch of products, so you can do a
              well-though and informed purchase.
            </b-card-text>

            <b-button
              href="https://www.youtube.com/watch?v=UkVHY90Ast4&list=PLHSgGy8X-DgXb9ikFBfyijEyjTP5ZvTSL"
              variant="primary"
              >Watch more</b-button
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
              One of the best things about riding… is racing. You can follow the
              adventures of the S2P team and discover more about the Portuguese
              racing environment!
            </b-card-text>

            <b-button
              href="https://www.youtube.com/watch?v=KJhGZ5AnAxA&list=PLHSgGy8X-DgXrFE_SCm3WuAN-y9FDysOl"
              variant="primary"
              >Watch more</b-button
            >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {
  name: "Videos",
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
