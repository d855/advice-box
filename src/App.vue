<template>
    <AdviceBox></AdviceBox>
</template>

<script>
import AdviceBox from "@/components/AdviceBox";

export default {
  name: 'App',
  components: {
      AdviceBox
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Manrope', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>