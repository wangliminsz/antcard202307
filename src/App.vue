<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HelloLiff msg="Welcome to Line Liff Page"/>

  <router-view></router-view>
</template>

<script>
import HelloLiff from './components/HelloLiff.vue'

export default {
  name: 'App',
  components: {
    HelloLiff
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
