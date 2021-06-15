<template>
  <section id="testimonialsshock" class="testimonials">
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
          <div class="p-5 bg-white rounded">
            <!-- Bootstrap carousel-->
            <div
              class="carousel slide"
              id="carouselExampleIndicators"
              data-ride="carousel"
            >
              <!-- Bootstrap inner [slides]-->
              <div class="carousel-inner px-5 pb-2">
                <!-- Carousel slide-->
                <div class="carousel-item active">
                  <div class="media">
                    <div class="media-body mx-5">
                      <blockquote class="blockquote border-0 p-0">
                        <p class="font-italic lead">
                          <i class="fa fa-quote-left mr-3 text-success"></i
                          >{{ $t("courses.testimonial6")
                          }}<i class="fa fa-quote-right ml-3 text-success"></i>
                        </p>
                        <footer class="blockquote-footer">
                          {{ $t("courses.testimonialperson6") }}
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <!-- Carousel slide-->
                <div class="carousel-item">
                  <div class="media">
                    <div class="media-body mx-5">
                      <blockquote class="blockquote border-0 p-0">
                        <p class="font-italic lead">
                          <i class="fa fa-quote-left mr-3 text-success"></i
                          >{{ $t("courses.testimonial3")
                          }}<i class="fa fa-quote-right ml-3 text-success"></i>
                        </p>
                        <footer class="blockquote-footer">
                          {{ $t("courses.testimonialperson3") }}
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <!-- Carousel slide-->
                <div class="carousel-item">
                  <div class="media">
                    <div class="media-body mx-5">
                      <blockquote class="blockquote border-0 p-0">
                        <p class="font-italic lead">
                          <i class="fa fa-quote-left mr-3 text-success"></i
                          >{{ $t("courses.testimonial7")
                          }}<i class="fa fa-quote-right ml-3 text-success"></i>
                        </p>
                        <footer class="blockquote-footer">
                          {{ $t("courses.testimonialperson7") }}
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
    </b-container>
  </section>
</template>
<script>
export default {
  name: "Testimonialsshock",
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
