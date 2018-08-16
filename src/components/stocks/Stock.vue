<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{stock.name}}
          <small>(Price: {{stock.price}})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input 
          type="number"
          class="form-control"
          placeholder="quantity"
          v-model="quantity" 
          />
        </div>
        <div class="pull-right">
          <button 
          class="btn btn-success" 
          @click="buyStock"
          :disabled="!canBuy"
          >Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions(["alterFunds"]),
    buyStock() {
      this.alterFunds(-this.stock.price * this.quantity);
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };

      console.log(order);
      this.quantity = 0;
    }
  },
  computed: {
    ...mapGetters(["funds"]),
    canBuy() {
      if (this.quantity <= 0 || this.totalCost > this.funds) {
        return false;
      } else {
        return true;
      }
    },
    totalCost() {
      return this.quantity * this.stock.price;
    }
  }
};
</script>

<style>
</style>
