<template>
  <section>
    <div class="title">
      <h1>Partners</h1>
    </div>
    <div class="images">
      <div class="partners">
        <a href="https://www.technical-touch.com/en-us/" target="_blank">
          <img src="../assets/TT-Logo.png" fluid alt="partner-logo"
        /></a>
      </div>
      <div>
        <a href="https://www.kroftools.com/en/" target="_blank"
          ><img src="../assets/KROFtools-Logo.png" fluid alt="partner-logo"
        /></a>
      </div>
      <div>
        <a href="https://www.polisport.com/en/off-road_501.html" target="_blank"
          ><img src="../assets/Polisport-Logo.png" fluid alt="partner-logo"
        /></a>
      </div>
      <div>
        <a href="https://www.p-tech.ee/" target="_blank">
          <img src="../assets/P-Tech-Logo.png" fluid alt="partner-logo"
        /></a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Partners",
};
</script>
<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
  margin-bottom: 2em;
}
.title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 10px auto;
  h1 {
    text-align: left;
    padding-top: auto;
    padding-bottom: auto;
    font-size: 2em;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 700;
  }
}
.images {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-right: 20px;
}
.partners {
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
img {
  max-width: 50%;
  display: block;
  margin: 0 auto;
}
</style>
