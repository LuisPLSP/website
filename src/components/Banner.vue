<template>
  <div class="banner">
    <img id="banner" src="../assets/youtubecover-2018.jpg" fluid alt="banner" />
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
