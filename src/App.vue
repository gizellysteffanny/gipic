<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss">

html, body, #app {
  height: 100;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #080D2B;
  color: #fff;
  max-width: 1024px;
  margin: 40px auto;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
}
</style>
