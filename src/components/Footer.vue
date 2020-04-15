<template>
  <footer class="bottom" fluid>
    <b-container fluid>
      <b-row class="text-center justify-content-around">
        <b-col class="align-content-start" md="3">
          <img
            style="height: 80px;"
            id="logo"
            class="logo-footer"
            src="../assets/S2Plogo.png"
            alt="S2Plogo"
          />
          <p style="font-size: 0.65em;">
            Developed by Luis Peixoto
          </p>
        </b-col>
        <b-col md="2">
          <b-nav vertical>
            <a class="adjust" style="color: white;" href="#banner"
              >The project</a
            >
            <a class="adjust" style="color: white;" href="#videos">Videos</a>
            <a class="adjust" style="color: white;" href="#about">About us</a>
          </b-nav>
        </b-col>
        <b-col md="3">
          <b-nav vertical>
            <a class="adjust" style="color: white;" v-b-modal.privacy
              >Privacy Policy</a
            >
            <a class="adjust" style="color: white;" v-b-modal.terms
              >Terms and Conditions</a
            >
            <b-modal ok-only id="privacy" title="Privacy Policy">
              <p class="my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, laboriosam maxime vero porro voluptas provident rem
                tenetur debitis, mollitia nobis exercitationem et hic minima a
                veritatis voluptatibus quibusdam voluptates blanditiis beatae
                necessitatibus tempora vitae? Corrupti magni mollitia nulla a
                dolorem fugit numquam nisi minima ipsa molestiae nemo officia
                doloremque, libero beatae id earum quibusdam reprehenderit
                corporis veritatis dolor? Sint cum consectetur praesentium
                molestias et corrupti veritatis exercitationem facere mollitia
                saepe blanditiis est quis quam harum dolores laborum
                voluptatibus beatae, in explicabo deserunt quia atque alias.
                Consequatur, culpa quam eveniet sit debitis sed, dolorem nam
                ratione tempore quasi nemo, illo inventore?
              </p>
            </b-modal>
            <b-modal ok-only id="terms" title="Terms and Conditions">
              <p class="my-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                placeat vel reiciendis fuga eveniet, eius illo eaque quibusdam
                nemo nobis saepe harum consequuntur dolorum iusto commodi
                praesentium ipsum doloribus assumenda quam voluptates aut sequi!
                Dolorum mollitia magnam ratione quaerat ipsam alias ducimus
                facere eveniet? Cumque placeat natus exercitationem similique?
                Praesentium velit veritatis, perferendis pariatur cum incidunt
                odio tempora officiis sequi accusantium nostrum tenetur
                temporibus error esse eum. Voluptatem laboriosam necessitatibus
                saepe eaque, eum ad sequi officia neque assumenda atque
                architecto blanditiis iusto, beatae fugiat iste eligendi sed
                sint totam autem maiores ipsum vero! Blanditiis incidunt ipsa
                ageipsum veniam, illo saepe.
              </p>
            </b-modal>
          </b-nav>
        </b-col>
        <b-col md="2">
          <b-row>
            <b-col class="text-md-left">
              <a style="font-weight: bold;">Follow us</a>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="4">
              <b-link
                class="social-media"
                style="color: white;"
                href="https://www.youtube.com/stepstopodium/"
                ><i class="fab fa-youtube fa-2x"></i
              ></b-link>
            </b-col>
            <b-col md="4">
              <b-link
                class="social-media"
                style="color: white;"
                href="https://www.instagram.com/stepstopodium/"
                ><i class="fab fa-instagram fa-2x"></i
              ></b-link>
            </b-col>
            <b-col md="4">
              <b-link
                class="social-media"
                style="color: white;"
                href="https://www.facebook.com/stepstopodium/"
                ><i class="fab fa-facebook-square fa-2x"></i
              ></b-link>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>
<script>
export default {
  name: "Bottom"
};
</script>
<style lang="scss" scoped>
// Footer
footer {
  background: rgb(51, 51, 51);
  padding-top: 2em;
  padding-bottom: 2em;
  //height: 70px;
  color: white;
  .logo-footer {
    align-items: center;
  }
  p {
    font-size: 0.85em;
  }

  a {
    color: white;
    padding-bottom: 1em;
    font-size: 0.85em;
    align-self: start;
  }
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .adjust {
    align-self: auto;
  }
}
</style>
