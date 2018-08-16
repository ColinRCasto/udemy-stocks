<template>
  <div class="container">
    <stock-head />
    <div class="row">
      <div class="col-xs-12">
        <router-view />
      </div>
    </div>
    
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    "stock-head": Header
  }
};
</script>

<style>
  body{
    padding: 30px;
  }
</style>
