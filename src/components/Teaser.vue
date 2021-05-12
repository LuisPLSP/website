<template>
  <section id="videos" class="videos">
    <b-container class="embed">
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube.com/embed/dRekn0iRiRs"
        allowfullscreens
      ></b-embed>
    </b-container>
  </section>
</template>
<script>
export default {
  name: "Teaser"
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
