<template>
  <section id="testimonialstechsessions" class="testimonials">
    <b-container>
      <b-row class="mt-3">
        <b-col
          md="12"
          class="text-center d-flex align-items-center justify-content-center"
        >
          <h1 class="my-3 intro-title">{{ $t("courses.testimonials") }}</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          md="12"
          class="text-center d-flex align-items-center justify-content-center"
        >
          <h5>{{ $t("courses.texttestimonials") }}</h5>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="12" class="col-xl-10 mx-auto">
          <div class="py-3 px-1 bg-white rounded">
            <!-- Bootstrap carousel-->
            <div
              class="carousel slide"
              id="carouselExampleIndicators"
              data-ride="carousel"
            >
              <!-- Bootstrap inner [slides]-->
              <div class="carousel-inner px-2 pb-2">
                <!-- Carousel slide KEEP COMMENTED-->
                <div class="carousel-item active">
                  <div class="media">
                    <div class="media-body mx-5">
                      <blockquote class="blockquote border-0 p-0">
                        <p class="font-italic lead">
                          <i class="fa fa-quote-left mr-3 text-success"></i
                          >{{ $t("courses.testimonial8")
                          }}<i class="fa fa-quote-right ml-3 text-success"></i>
                        </p>
                        <footer class="blockquote-footer">
                          {{ $t("courses.testimonialperson8") }}
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <!-- Carousel slide KEEP COMMENTED-->
                <div class="carousel-item">
                  <div class="media">
                    <div class="media-body mx-5">
                      <blockquote class="blockquote border-0 p-0">
                        <p class="font-italic lead">
                          <i class="fa fa-quote-left mr-3 text-success"></i
                          >{{ $t("courses.testimonial2")
                          }}<i class="fa fa-quote-right ml-3 text-success"></i>
                        </p>
                        <footer class="blockquote-footer">
                          {{ $t("courses.testimonialperson2") }}
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <!-- Carousel slide KEEP COMMENTED-->
                <div class="carousel-item">
                  <div class="media">
                    <div class="media-body mx-5">
                      <blockquote class="blockquote border-0 p-0">
                        <p class="font-italic lead">
                          <i class="fa fa-quote-left mr-3 text-success"></i
                          >{{ $t("courses.testimonial5")
                          }}<i class="fa fa-quote-right ml-3 text-success"></i>
                        </p>
                        <footer class="blockquote-footer">
                          {{ $t("courses.testimonialperson5") }}
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>

                <!-- Bootstrap controls [dots]-->
                <a
                  class="carousel-control-prev width-auto"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <i class="fa fa-angle-left text-dark text-lg"></i>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next width-auto"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <i class="fa fa-angle-right text-dark text-lg"></i>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <!-- <b-row  class="justify-content-center mb-5">
        <b-col
          md="6"
          data-aos="fade-up"
          data-aos-duration="3000"
          class="d-flex align-items-center"
        >
          <b-button
            block
            variant="outline-primary"
            >{{ $t("videos.loadmore") }}</b-button
          >
        </b-col>
      </b-row> -->
    </b-container>
  </section>
</template>
<script>
export default {
  name: "Testimonialstechsession",
  data() {
    return {};
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
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
body {
  background: linear-gradient(to left, #51cc48, #39df9c);
  min-height: 100vh;
}

.width-auto {
  width: auto;
}

.text-lg {
  font-size: 2rem;
}

.carousel-indicators li {
  border: none;
  background: #ccc;
}

.carousel-indicators li.active {
  background: #28a745;
}
</style>
