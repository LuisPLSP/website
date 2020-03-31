<template>
  <section>
    <div id="contact-us" class="content">
      <h1 class="contact-title">Contact Us</h1>
      <b-container>
        <b-row>
          <b-col class="contact-text" cols="4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              eaque id? Exercitationem veniam quas voluptatum expedita animi
              quod dolor dicta maxime optio. Ratione reiciendis corrupti
              quisquam commodi rerum blanditiis illum!
            </p>
          </b-col>
          <b-col class="contact-form" cols="8">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
                variant="primary"
                >Submit</b-button
              >
              <b-button style="margin-left: 10px;" type="reset" variant="danger"
                >Reset</b-button
              >
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
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
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.subject = "";
      this.form.message = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
