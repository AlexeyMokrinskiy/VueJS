<template>
  <div id="app">
    <HeaderComp/>
    <FooterComp/>
  </div>
</template>

<script>
import FooterComp from './components/blocks/FooterComp.vue'
import HeaderComp from './components/blocks/HeaderComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp
  },
  created () {
   this.$router.push({ name: 'home' });
  }
}
</script>

<style lang="scss">
#app {
  font-family: Jost, sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.center {
  width: 1200px;
  margin: 0 auto;
}

a {
  text-decoration: none;
}
</style>
