<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <!-- START NAVBAR -->
    <container fluid>
      <b-navbar id="navbar" type="light">
        <b-navbar-brand href="#">
          <img id="logo" src="./assets/S2Plogo.png" alt="S2Plogo" />
        </b-navbar-brand>
        <b-navbar-nav id="navbar" align="end" class="ml-auto">
          <b-nav-item size="sm" class="navbar-item" href="#about"
            >About</b-nav-item
          >
          <b-nav-item size="sm" class="navbar-item" href="#contact-us"
            >Contact us</b-nav-item
          >
        </b-navbar-nav>
      </b-navbar>
    </container>
    <!-- END NAVBAR -->
    <!-- START BANNER -->
    <div>
      <img
        id="banner"
        src="./assets/youtubecover-2018.jpg"
        fluid
        alt="banner"
      />
    </div>
    <!-- END BANNER -->
    <!-- START INTRO -->
    <section>
      <b-container>
        <b-row class="my-md-5">
          <b-col
            md="6"
            class="d-flex align-items-center justify-content-center"
          >
            <h1 class="intro-title">What is Steps to Podium?</h1>
          </b-col>
          <b-col md="6">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus saepe provident odit repudiandae laudantium obcaecati
              unde blanditiis veniam. Sit explicabo ullam suscipit. Architecto
              quod excepturi corporis error ab deleniti ipsa, tempora facere
              quaerat expedita porro beatae consequuntur similique in odit!
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- END INTRO -->
    <!-- START VIDEOS -->
    <section id="videos">
      <b-container class="embed">
        <b-row class="my-md-5">
          <b-col
            md="6"
            data-aos="fade-up"
            data-aos-duration="1000"
            class="module"
            ><b-card class="shadow-lg" title="Offroad Engineered">
              <b-embed
                type="iframe"
                aspect="16by9"
                src="https://www.youtube.com/embed/_v9gnC5PiWk"
                allowfullscreens
              ></b-embed>
              <b-card-text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                aspernatur dolorum ullam quam saepe debitis et accusantium.
                Maiores, totam quas.
              </b-card-text>

              <b-button href="#" variant="primary">Watch more</b-button>
            </b-card>
          </b-col>
          <b-col
            md="6"
            data-aos="fade-up"
            data-aos-duration="1500"
            class="module"
            ><b-card class="shadow-lg" title="How-to's">
              <b-embed
                type="iframe"
                aspect="16by9"
                src="https://www.youtube.com/embed/KPWzyBh6iN4"
                allowfullscreens
              ></b-embed>
              <b-card-text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                aspernatur dolorum ullam quam saepe debitis et accusantium.
                Maiores, totam quas.
              </b-card-text>

              <b-button href="#" variant="primary">Watch more</b-button>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            md="6"
            data-aos="fade-up"
            data-aos-duration="1000"
            class="module"
            ><b-card class="shadow-lg" title="Reviews">
              <b-embed
                type="iframe"
                aspect="16by9"
                src="https://www.youtube.com/embed/_s0HnK6e4tY"
                allowfullscreens
              ></b-embed>
              <b-card-text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                aspernatur dolorum ullam quam saepe debitis et accusantium.
                Maiores, totam quas.
              </b-card-text>

              <b-button href="#" variant="primary">Watch more</b-button>
            </b-card>
          </b-col>
          <b-col
            md="6"
            data-aos="fade-up"
            data-aos-duration="1500"
            class="module"
            ><b-card class="shadow-lg" title="Races">
              <b-embed
                type="iframe"
                aspect="16by9"
                src="https://www.youtube.com/embed/3TWD9xUAxRc"
                allowfullscreens
              ></b-embed>
              <b-card-text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                aspernatur dolorum ullam quam saepe debitis et accusantium.
                Maiores, totam quas.
              </b-card-text>

              <b-button href="#" variant="primary">Watch more</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- END VIDEOS -->
    <!-- START ABOUT -->
    <section id="about">
      <b-container>
        <b-row class="my-md-5">
          <b-col
            md="6"
            class="d-flex align-items-center justify-content-center"
          >
            <h1 class="about-title">About Us</h1>
          </b-col>
          <b-col md="6">
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              class="about-text module"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis quis veritatis voluptas, doloribus voluptates in vero
              deserunt! Sapiente commodi similique fugiat consequatur quasi
              facere dignissimos adipisci quisquam fuga officia rerum, tenetur
              minus quaerat id quo qui corrupti! Accusamus esse quibusdam rem
              praesentium quasi, commodi amet voluptate dolore optio?
              Necessitatibus cum quia reiciendis ad! Iure laudantium quas
              voluptates fuga quam enim, iste, dolorum eum nemo inventore totam
              accusantium! Sit corporis ab officiis non, voluptates dolorem
              ducimus deserunt ratione iusto fuga, mollitia adipisci expedita
              saepe numquam rem omnis reiciendis reprehenderit tenetur
              praesentium sunt! Hic unde inventore ipsum vero velit earum eos
              veniam!
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- END ABOUT -->
    <!-- START ABOUT US -->
    <section>
      <b-container fluid="md">
        <b-row no-gutters>
          <b-col
            md="6"
            data-aos="fade"
            data-aos-duration="1000"
            class="about-me container module"
          >
            <img
              class="photo floated"
              src="./assets/S2Plogo.png"
              alt="S2Plogo"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              soluta asperiores facere iste fugiat. Ad, tempore debitis
              temporibus veritatis culpa velit consequuntur officia sit?
              Obcaecati dolor voluptate dolores harum ea!
            </p>
          </b-col>

          <b-col
            md="6"
            data-aos="fade"
            data-aos-duration="1000"
            class="about-me container"
          >
            <img
              class="photo floated"
              src="./assets/S2Plogo.png"
              alt="S2Plogo"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              soluta asperiores facere iste fugiat. Ad, tempore debitis
              temporibus veritatis culpa velit consequuntur officia sit?
              Obcaecati dolor voluptate dolores harum ea!
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- END ABOUT US -->
    <!-- START CONTACT US -->
    <section>
      <b-container>
        <b-row class="my-md-5">
          <b-col
            id="contact-us"
            class="d-flex align-items-center justify-content-center"
            md="6"
          >
            <h1 class="contact-title">Contact Us</h1>
            {{ msg }}
          </b-col>
          <b-col class="contact-form" md="6">
            <b-form
              method="POST"
              action="send"
              @submit="onSubmit"
              @reset="onReset"
              v-if="show"
            >
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Subject:"
                label-for="input-2"
              >
                <b-form-select
                  id="input-2"
                  v-model="form.subject"
                  :options="subject"
                  required
                ></b-form-select>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Message:"
                label-for="input-3"
              >
                <b-form-textarea
                  id="input-3"
                  v-model="form.message"
                  required
                  placeholder="Message"
                ></b-form-textarea>
              </b-form-group>
              <b-button
                style="margin-right: 10px;"
                type="submit"
                variant="success"
                >Submit</b-button
              >
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- END CONTACT US -->
    <!-- START FOOTER -->
    <footer fluid>
      <b-container fluid>
        <b-row class="text-center justify-content-around">
          <b-col md="2">
            <img
              style="height: 38px;"
              id="logo"
              class="logo-footer"
              src="./assets/S2Plogo.png"
              alt="S2Plogo"
            />
            <p>
              Developed by<br />
              Luis Peixoto
            </p>
          </b-col>
          <b-col md="2">
            <b-nav vertical>
              <a style="color: white;" href="#banner">The project</a>
              <a style="color: white;" href="#videos">Videos</a>
              <a style="color: white;" href="#about">About us</a>
            </b-nav>
          </b-col>
          <b-col md="3">
            <b-nav vertical>
              <a style="color: white;" v-b-modal.privacy>Privacy Policy</a>
              <a style="color: white;" v-b-modal.terms>Terms and Conditions</a>
              <b-modal ok-only id="privacy" title="Privacy Policy">
                <p class="my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, laboriosam maxime vero porro voluptas provident
                  rem tenetur debitis, mollitia nobis exercitationem et hic
                  minima a veritatis voluptatibus quibusdam voluptates
                  blanditiis beatae necessitatibus tempora vitae? Corrupti magni
                  mollitia nulla a dolorem fugit numquam nisi minima ipsa
                  molestiae nemo officia doloremque, libero beatae id earum
                  quibusdam reprehenderit corporis veritatis dolor? Sint cum
                  consectetur praesentium molestias et corrupti veritatis
                  exercitationem facere mollitia saepe blanditiis est quis quam
                  harum dolores laborum voluptatibus beatae, in explicabo
                  deserunt quia atque alias. Consequatur, culpa quam eveniet sit
                  debitis sed, dolorem nam ratione tempore quasi nemo, illo
                  inventore?
                </p>
              </b-modal>
              <b-modal ok-only id="terms" title="Terms and Conditions">
                <p class="my-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                  placeat vel reiciendis fuga eveniet, eius illo eaque quibusdam
                  nemo nobis saepe harum consequuntur dolorum iusto commodi
                  praesentium ipsum doloribus assumenda quam voluptates aut
                  sequi! Dolorum mollitia magnam ratione quaerat ipsam alias
                  ducimus facere eveniet? Cumque placeat natus exercitationem
                  similique? Praesentium velit veritatis, perferendis pariatur
                  cum incidunt odio tempora officiis sequi accusantium nostrum
                  tenetur temporibus error esse eum. Voluptatem laboriosam
                  necessitatibus saepe eaque, eum ad sequi officia neque
                  assumenda atque architecto blanditiis iusto, beatae fugiat
                  iste eligendi sed sint totam autem maiores ipsum vero!
                  Blanditiis incidunt ipsa ipsum veniam, illo saepe.
                </p>
              </b-modal>
            </b-nav>
          </b-col>
          <b-col md="2">
            <b-row class="justify-content-center">
              <b-col>
                <p>Follow us on Social Media</p>
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
    <!-- END FOOTER -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      form: {
        email: "",
        subject: null,
        message: ""
      },
      subject: [
        { text: "--Select One--", value: null },
        "Collaboration",
        "Business Inquire",
        "Social Media",
        "Other"
      ],
      show: true
    };
  },
  watch: {
    email(value) {
      // binding this to the data value in the email input
      this.email = value;
      this.validateEmail(value);
    }
  },
  methods: {
    validateEmail(value) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.msg["email"] = "";
      } else {
        this.msg["email"] = "Invalid Email Address";
      }
    }
  },
  onSubmit(evt) {
    evt.preventDefault();
    alert(JSON.stringify(this.form));
  }
};
</script>

<style lang="scss" scoped>
// Navbar
#logo {
  height: 30px;
}
#navbar {
  width: 100%;
  height: 50px;
  display: flex;
  background: white;
}
.navbar-item {
  font-size: medium;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
}
// Banner
#banner {
  height: 500px;
  width: 100%;
  object-fit: cover;
}
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

// Intro
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

//About
.about-me {
  .floated {
    float: left;
    padding: 0 1em;
  }
  p {
    font-size: large;
  }
  .photo {
    height: 200px;
    width: 150px;
    padding-right: 1em;
  }
}
// Footer
footer {
  background: rgb(51, 51, 51);
  padding-top: 1em;
  padding-bottom: 1em;
  //height: 70px;
  color: white;
  .logo-footer {
    align-items: center;
  }
  p {
    font-size: 0.75em;
  }
  a {
    color: white;
    padding-bottom: 1em;
  }
}
</style>
