<template>
  <section class="feedback">
    <b-container>
      <b-row class="my-5">
        <b-col
          id="contact-us"
          class="my-3 d-flex align-items-center justify-content-center"
          md="6"
        >
          <h1 class="mb-5 contact-title">Feedback</h1>
          <!-- <h1 class="mb-5 contact-title">{{ $t("contact.title") }}</h1> -->
        </b-col>
        <b-col class="contact-form" md="6">
          <b-form @submit="checkForm">
            <div class="form">{{ $t("contact.emailtitle") }}</div>
            <b-form-input
              id="email"
              v-model.trim="form.email"
              type="email"
              required
              :placeholder="$t('contact.emailplaceholder')"
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
              :placeholder="$t('contact.messageplaceholder')"
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
</template>

<script>
import Vue from "vue";
export default {
  name: "Feedback",
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
        this.$t("contact.subjectoption4"),
      ];
    },
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
          this.makeToast(this.$t("contact.confirmmessage"), {
            autoHideDelay: 10000,
            title: this.$t("contact.confirmation"),
            variant: "success",
            solid: true,
          }),
          (this.form.email = ""),
          (this.form.subject = null),
          (this.form.message = "")
          //}
        )
        .catch((error) => {
          //console.log(error);
          this.makeToast("Try again later, please!", {
            autoHideDelay: 10000,
            title: error,
            variant: "warning",
            solid: true,
          });
        });
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
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
}
.form {
  margin-bottom: 0.3em;
  margin-top: 0.75em;
}
</style>
