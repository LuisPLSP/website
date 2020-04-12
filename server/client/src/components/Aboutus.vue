<template>
  <section class="aboutus">
    <b-container fluid="md">
      <b-row>
        <b-col
          lg="6"
          data-aos="fade"
          data-aos-duration="1500"
          class="about-me container module"
        >
          <img
            class="photo floated"
            src="../assets/S2Plogo.png"
            alt="S2Plogo"
          />
          <p>
            Luís is a Mechanical Engineer that works in Software Development
            and, most important, is a dirt bike fanatic by heart. Luís’ love for
            the sport makes him seek nothing else but the complete understanding
            of the sport, whether it’s on the bike, off the bike or about the
            bike.
          </p>
        </b-col>

        <b-col
          lg="6"
          data-aos="fade"
          data-aos-duration="2500"
          class="about-me container"
        >
          <img
            class="photo floated"
            src="../assets/S2Plogo.png"
            alt="S2Plogo"
          />
          <p>
            Lili is a Marketing expert that fell in love with the project (and
            probably Luis) and decided to help the brand grow and become global.
            She’s part of the team since the beginning, so she already knows a
            thing or two about dirt bikes, but don’t ask her too many questions.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {
  name: "Aboutus"
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
  margin-top: 1em;
  margin-bottom: 2em;
}
.about-me {
  .floated {
    float: left;
    padding: 0 1em;
  }
  p {
    font-size: 1.2em;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 400;
    justify-content: center;
  }
}
.photo {
  height: 200px;
  width: 150px;
  padding-right: 1em;
}
</style>
