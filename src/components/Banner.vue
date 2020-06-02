<template>
  <div class="banner">
    <img
      id="banner"
      src="../assets/websitecover-2018.png"
      fluid
      alt="banner"
    />
  </div>
</template>
<script>
export default {
  name: "Banner"
};
</script>
<style lang="scss" scoped>
// Banner
#banner {
  height: 500px;
  width: 100%;
  object-fit: cover;
}
</style>
