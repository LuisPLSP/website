<template>
  <section id="contact-s2p" class="register">
    <b-container>
      <b-row class="mt-3">
        <b-col class="d-flex align-items-center justify-content-center" md="12">
          <h1 class="my-3 contact-title">{{ $t("register.title") }}</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          md="12"
          class="text-center d-flex align-items-center justify-content-center mb-3"
        >
          <h5>{{ $t("register.text") }}</h5>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12">
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
            <div class="form">{{ $t("register.participantstitle") }}</div>
            <b-form-input
              id="participants"
              type="number"
              required
              :placeholder="$t('register.participantsplaceholder')"
            ></b-form-input>
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
  name: "ContactS2P",
  data() {
    return {
      errors: [],
      form: {
        email: "",
        subject: null,
        participants: "",
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
      console.log(locale);
    },
    validateEmail(value) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.alert["email"] = "";
      } else {
        this.alert["email"] = "Invalid Email Address";
      }
    },
    checkForm: function(e) {
      if (this.email && this.message && this.subject && this.participants) {
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
  padding-top: auto;
  padding-bottom: auto;
  font-size: 2em;
  font-family: "Open-sans", sans-serif;
  font-weight: 700;
}
.form {
  margin-bottom: 0.3em;
  margin-top: 0.75em;
}
</style>
