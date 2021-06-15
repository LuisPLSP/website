<template>
  <div class="banner">
    <img
      id="bannertechsession"
      src="../assets/bannerForks.jpg"
      fluid
      alt="banner"
    />
  </div>
</template>
<script>
export default {
  name: "Bannertechsession",
};
</script>
<style lang="scss" scoped>
// Banner
.banner {
  position: relative;
}
#bannertechsession {
  height: 500px;
  width: 100%;
  object-fit: cover;
}
</style>
