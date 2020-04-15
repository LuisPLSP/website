<template>
  <section class="intro">
    <b-container>
      <b-row class="my-md-5">
        <b-col md="6" class="d-flex align-items-center justify-content-center">
          <h1 class="intro-title">What is Steps to Podium?</h1>
        </b-col>
        <b-col md="6">
          <p>
            Steps to Podium creates unique, inspiring and educational content
            about the 2-wheeled Offroad world.<br />
            With Steps to Podium you can learn how to improve your riding or
            take care of your bike, you can access bikes and gear reviews or
            even discover the engineering behind our wonderful and complex
            sport. All of this, while following Luis’ evolution as an amateur
            rider, by experiencing his trainings or adventures in the craziest
            of races! Ready to join the ride?
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "Intro"
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
  text-align: left;
  padding-top: auto;
  padding-bottom: auto;
  font-size: 2em;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}
h4 {
  font-family: "Open-sans", sans-serif;
  font-weight: 500;
}

p {
  font-size: 1.2em;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
  justify-content: center;
}
</style>
