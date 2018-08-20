<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-warning">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{myStock.name}}
          <small>
          {{myStock.price | currency}} - 
            <small>
              {{myStock.shift>0 ? 'UP' : 'DOWN'}}: {{myStock.shift}}
            </small>
          </small>
          <small class="pull-right">(Currently Owned: {{myStock.quantity}})</small>
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
          class="btn btn-warning" 
          @click="sellStock"
          :disabled="!canSell"
          >Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  props: ["stock","index"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions(["alterFunds","alterStocks"]),
    sellStock() {
      this.alterFunds(this.stock.price * this.quantity);
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      let pLoad = {
        id: this.index,
        quantity: this.quantity,
        buying: false
      }

      this.alterStocks(pLoad);
      console.log(this.$store.state.portfolio.stocks);
      this.quantity = 0;
    }
  },
  computed: {
    ...mapGetters(["funds"]),
    canSell() {
      //if We can sell return true
      if(this.myStock.quantity >= this.quantity && this.quantity > 0){
        return true;
      }else{
        return false;
      }
    },
    totalCost() {
      return this.quantity * this.stock.price;
    },
    myStock() {
      return this.$store.getters.filteredStocks[this.index];
    }
  }
};
</script>

<style>
</style>
