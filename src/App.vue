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
            class="d-flex align-items-center justify-content-center"
            md="6"
          >
            <h1 class="contact-title">Contact Us</h1>
          </b-col>
          <b-col class="contact-form" md="6">
            <b-form @submit="checkForm">
              <b-form-group id="email" label="Email address:" label-for="email">
                <b-form-input
                  id="email"
                  v-model.trim="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>
              <b-form-group id="subject" label="Subject:" label-for="subject">
                <b-form-select
                  id="subject"
                  v-model="form.subject"
                  :options="subject"
                  required
                ></b-form-select>
              </b-form-group>

              <b-form-group id="message" label="Message:" label-for="message">
                <b-form-textarea
                  id="message"
                  v-model.trim="form.message"
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

export default {
  name: "App",
  components: {
    Navbar,
    Banner,
    Intro,
    Videos,
    About,
    Aboutus,
    Bottom
    //Contact
  },

  data() {
    return {
      errors: [],
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
      msg: "",
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
      console.log("Sending request...");
      Vue.axios
        .post("http://localhost:3000/sendEmail", {
          email: this.form.email,
          subject: this.form.subject,
          message: this.form.message
        })
        .then(res => {
          //this.msg = res.data.msg;
          //this.$bvToast.toast(res.data.msg);
          this.makeToast(res.data.msg, {
            autoHideDelay: 10000,
            title: "Email confirmation",
            variant: "success",
            solid: true
          });
          this.form.email = "";
          this.form.subject = null;
          this.form.message = "";
        });
    },
    makeToast(message, options) {
      this.$bvToast.toast(message, options);
    }
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
h1 {
  text-align: left;
  padding-top: auto;
  padding-bottom: auto;
  font-size: 2em;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}
</style>
