<template>
  <div class="banner">
    <img
      id="bannershock"
      src="../assets/shock-gallery-1.jpg"
      fluid
      alt="banner"
    />
  </div>
</template>
<script>
export default {
  name: "Bannershock",
};
</script>
<style lang="scss" scoped>
// Banner
.banner {
  position: relative;
}
#bannershock {
  height: 500px;
  width: 100%;
  object-fit: cover;
}
</style>
