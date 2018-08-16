import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    portfolio: {
      funds: 1000,
      stocks: [
        {
          name: "BMW",
          quantity: 0,
          price: 110
        },
        {
          name: "Google",
          quantity: 0,
          price: 200
        },
        {
          name: "Apple",
          quantity: 0,
          price: 350
        },
        {
          name: "Twitter",
          quantity: 0,
          price: 8
        }
      ]
    }
  },
  getters: {
    funds: state => {
      return state.portfolio.funds;
    },
    getStock: state => {
      return index => {
        return state.portfolio.stocks[index];
      };
    }
  },
  mutations: {
    alterFunds: (state, payload) => {
      state.portfolio.funds += payload;
    },
    alterStocks: (state, payload) => {
      let targetStock = state.portfolio.stocks[payload.id];
      let totalCost = targetStock.price * payload.quantity;

      if (payload.buying) {
        if (totalCost <= this.funds) targetStock.quantity += payload.quantity;
        this.alterFunds(state, -totalCost);
      } else {
        if (targetStock.quantity >= payload.quantity) {
          targetStock.quantity += payload.quantity;
          this.alterFunds(state, totalCost);
        }
      }
    }
  },
  actions: {
    alterFunds: ({ commit }, payload) => {
      commit("alterFunds", payload);
    }
  }
});
