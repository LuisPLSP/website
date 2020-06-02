<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <!-- START NAVBAR -->
    <navbar></navbar>
    <!-- END NAVBAR -->
    <!-- START BANNER -->
    <banner></banner>
    <!-- END BANNER -->
    <!-- START INTRO -->
    <intro></intro>
    <!-- END INTRO -->
    <!-- START VIDEOS -->
    <videos></videos>
    <!-- END VIDEOS -->
    <!-- START ABOUT -->
    <about></about>
    <!-- END ABOUT -->
    <!-- START ABOUT US -->
    <aboutus></aboutus>
    <!-- END ABOUT US -->
    <!-- START CONTACT US -->
    <!-- <contact></contact> -->
    <section class="contact">
      <b-container>
        <b-row class="my-md-5">
          <b-col
            id="contact-us"
            class="my-3 d-flex align-items-center justify-content-center"
            md="6"
          >
            <h1 class="mb-5 contact-title">{{ $t("contact.title") }}</h1>
          </b-col>
          <b-col class="contact-form" md="6">
            <b-form @submit="checkForm">
              <div class="form">{{ $t("contact.emailtitle") }}</div>
              <b-form-input
                id="email"
                v-model.trim="form.email"
                type="email"
                required
                placeholder="Email"
              ></b-form-input>
              <div class="form">{{ $t("contact.subjecttitle") }}</div>
              <b-form-select
                id="subject"
                v-model="form.subject"
                :options="subject"
                required
              ></b-form-select>

              <div class="form">{{ $t("contact.messagetitle") }}</div>
              <b-form-textarea
                id="message"
                v-model.trim="form.message"
                required
                placeholder="Message"
              ></b-form-textarea>
              <b-button
                class="form"
                style="margin-right: 10px;"
                type="submit"
                variant="success"
                >{{ $t("contact.submit") }}</b-button
              >
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- END CONTACT US -->
    <!-- START FOOTER-->
    <bottom></bottom>
    <!-- END FOOTER -->
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "./components/Navbar.vue";
import Banner from "./components/Banner.vue";
import Intro from "./components/Intro.vue";
import Videos from "./components/Videos.vue";
import About from "./components/About.vue";
import Aboutus from "./components/Aboutus.vue";
//import Contact from "./components/Contact.vue";
import Bottom from "./components/Footer.vue";
//import i18n from "@/i18n";

export default {
  name: "App",
  components: {
    Navbar,
    Banner,
    Intro,
    Videos,
    About,
    Aboutus,
    Bottom,
    //Contact
  },
  data() {
    return {
      errors: [],
      form: {
        email: "",
        subject: null,
        message: "",
      },
      msg: "",
      show: true,
    };
  },
  computed: {
    subject() {
      return [
        { text: this.$t("contact.subjectoption"), value: null },
        this.$t("contact.subjectoption1"),
        this.$t("contact.subjectoption2"),
        this.$t("contact.subjectoption3"),
        this.$t("contact.subjectoption4")
      ]
    }
  },
  watch: {
    email(value) {
      this.email = value;
      this.validateEmail(value);
    },
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
    validateEmail(value) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.alert["email"] = "";
      } else {
        this.alert["email"] = "Invalid Email Address";
      }
    },
    checkForm: function(e) {
      if (this.email && this.message && this.subject) {
        return true;
      }
      e.preventDefault();
      Vue.axios
        .post(
          "https://us-central1-steps-to-podium-website-d4f43.cloudfunctions.net/emailMessage",
          {
            email: this.form.email,
            subject: this.form.subject,
            message: this.form.message,
          }
        )
        .then(
          //res => {
          //console.log(res);
          this.makeToast("Your email has been sent!", {
            autoHideDelay: 10000,
            title: "Email confirmation",
            variant: "success",
            solid: true,
          }),
          (this.form.email = ""),
          (this.form.subject = null),
          (this.form.message = "")
          //}
        );
      // .catch(
      //   error => {
      //   this.makeToast("Try again later, please!", {
      //     autoHideDelay: 10000,
      //     title: "An error occurred",
      //     variant: "warning",
      //     solid: true
      //   })
      //   }
      //   );
    },
    makeToast(message, options) {
      this.$bvToast.toast(message, options);
    },
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
h1 {
  text-align: left;
  padding-top: auto;
  padding-bottom: auto;
  font-size: 2em;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}
.form {
  margin-bottom: 0.3em;
  margin-top: 0.75em;
}
</style>
