<template>
  <div id="app" class="section">
    <h1>{{ $t("coursesgeneralconditions.title") }}</h1>
    <p>
      {{ $t("coursesgeneralconditions.text1") }}
    </p>
    <p>
      {{ $t("coursesgeneralconditions.text2")
      }}<a href="https://www.stepstopodium.com/courses" target="_blank"
        >https://stepstopodium.com/Courses</a
      >{{ $t("coursesgeneralconditions.text3") }}
    </p>
    <p>
      {{ $t("coursesgeneralconditions.text4") }}
    </p>
    <p>{{ $t("coursesgeneralconditions.text5") }}</p>
    <ul>
      <li>
        <span style="text-decoration: underline;">{{
          $t("coursesgeneralconditions.text6")
        }}</span>
        {{ $t("coursesgeneralconditions.text7") }}
      </li>
      <li>
        <span style="text-decoration: underline;">{{
          $t("coursesgeneralconditions.text8")
        }}</span>
        {{ $t("coursesgeneralconditions.text9") }}
      </li>
    </ul>
    <p>
      <span style="text-decoration: underline; font-weight: 600">{{
        $t("coursesgeneralconditions.text10")
      }}</span>
      {{ $t("coursesgeneralconditions.text11") }}
    </p>
    <p>
      {{ $t("coursesgeneralconditions.text12") }}
    </p>
    <p>
      {{ $t("coursesgeneralconditions.text13") }}
      <span style="text-decoration: underline; font-weight: 600">{{
        $t("coursesgeneralconditions.text14")
      }}</span>
      {{ $t("coursesgeneralconditions.text15") }}
    </p>
    <p>
      {{ $t("coursesgeneralconditions.text16") }}
    </p>
    <p>
      {{ $t("coursesgeneralconditions.text17") }}
    </p>
    <p>
      {{ $t("coursesgeneralconditions.text18") }}
    </p>
    <p>
      {{ $t("coursesgeneralconditions.text19") }}
    </p>
  </div>
</template>

<script>
export default {
  name: "CoursesGeneralConditions",
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  // metaInfo() {
  //   return {
  //     title: this.$t("meta.coursestitle"),
  //     meta: [
  //       { name: "description", content: this.$t("meta.coursesdescription") },
  //     ],
  //   };
  // },
};
</script>

<style lang="scss" scoped>
.section {
  margin: 2% 10% 5% 10%;

  h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }
}
</style>
