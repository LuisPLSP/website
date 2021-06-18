<template>
  <div class="banner">
    <img
      id="bannershock"
      src="https://firebasestorage.googleapis.com/v0/b/steps-to-podium-website-d4f43.appspot.com/o/rearshockcourse%2Fshock-gallery-1.jpg?alt=media&token=ea4280bf-6a31-44d7-acff-3bf4b1dd9571"
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
