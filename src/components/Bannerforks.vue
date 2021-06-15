<template>
  <div class="banner">
    <img id="bannerforks" src="../assets/bannerForks.jpg" fluid alt="banner" />
  </div>
</template>
<script>
export default {
  name: "Bannerforks",
};
</script>
<style lang="scss" scoped>
// Banner
.banner {
  position: relative;
}
#bannerforks{
  height: 500px;
  width: 100%;
  object-fit: cover;
}
</style>