<template>
<div>
  <app-stock v-for="stock in stocks" :stock="stock"></app-stock>  
</div>
</template>

<script>
import Stock from "./Stock";

export default {
  data() {
    return {
      stocks: [
        {
          id: 0,
          name: "BMW",
          price: 110
        },
        {
          id: 1,
          name: "Google",
          price: 200
        },
        {
          id: 2,
          name: "Apple",
          price: 350
        },
        {
          id: 3,
          name: "Twitter",
          price: 8
        }
      ]
    };
  },
  components: {
    "app-stock": Stock
  }
};
</script>

<style>
</style>
