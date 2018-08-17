<template>
<div>
  <app-stock v-for="(stock,index) in filteredStocks" :stock="stock" :index="index" :key="index"></app-stock>  
</div>
</template>

<script>
import Stock from "./Stock";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["filteredStocks"]),
  components: {
    "app-stock": Stock
  }
};
</script>

<style>
</style>
