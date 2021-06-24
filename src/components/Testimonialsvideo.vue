<template>
  <section id="testimonialsvideo" class="testimonials">
    <b-container>
      <b-row class="d-flex align-items-center justify-content-center">
        <b-col lg="8" class="mt-2 mb-5" align-v="center">
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/G2qiWOHQoPY"
            allowfullscreens
          ></b-embed>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {
  name: "TestimonialsVideo",
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
