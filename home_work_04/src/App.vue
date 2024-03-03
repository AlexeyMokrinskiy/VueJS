<template>
  <ProductDetailsComponent></ProductDetailsComponent>
</template>

<script>

import ProductDetailsComponent from './components/ProductDetailsComponent.vue';

export default {
  name: 'App',
  components: {
    ProductDetailsComponent
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
p {
  text-align: left;
}
</style>
