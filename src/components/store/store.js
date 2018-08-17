import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    filter_string: "",
    portfolio: {
      funds: 10000,
      stocks: [
        {
          name: "BMW",
          quantity: 0,
          price: 110,
          shift: 0
        },
        {
          name: "Google",
          quantity: 0,
          price: 200,
          shift: 0
        },
        {
          name: "Apple",
          quantity: 0,
          price: 350,
          shift: 0
        },
        {
          name: "Twitter",
          quantity: 0,
          price: 8,
          shift: 0
        }
      ]
    }
  },
  getters: {
    funds: state => {
      return Math.round(state.portfolio.funds * 100) / 100;
    },
    getStock: state => {
      return index => {
        return state.portfolio.stocks[index];
      };
    },
    stocks: state => {
      return state.portfolio.stocks;
    },
    filterString: state => {
      return state.filter_string;
    },
    filteredStocks: state => {
      let filtered_array = state.portfolio.stocks.filter(element => {
        return element.name.match(state.filter_string);
      });
      console.log(filtered_array);
      return filtered_array;
    }
  },
  mutations: {
    alterFunds: (state, payload) => {
      state.portfolio.funds += payload;
    },
    alterStocks: (state, payload) => {
      let targetStock = state.portfolio.stocks[payload.id];
      if (payload.buying) {
        targetStock.quantity += parseInt(payload.quantity, 10);
      } else {
        targetStock.quantity -= parseInt(payload.quantity, 10);
      }
    },
    fluctuateMarket: state => {
      state.portfolio.stocks.forEach(stock => {
        let flux = Math.random() * 0.5 + 0.8;
        let rawChange = stock.price * flux;
        let roundedVal = Math.round(rawChange * 100) / 100;
        stock.shift =
          Math.round(((roundedVal - stock.price) / roundedVal) * 1000) / 1 / 10;
        stock.price = roundedVal;
      });
    },
    updateFilterString: (state, payload) => {
      state.filterString = payload;
    }
  },
  actions: {
    alterFunds: ({ commit }, payload) => {
      commit("alterFunds", payload);
    },
    alterStocks: ({ commit }, payload) => {
      commit("alterStocks", payload);
    },
    fluctuateMarket: ({ commit }, payload) => {
      commit("fluctuateMarket");
    },
    updateFilterString: ({ commit }, payload) => {
      commit("updateFilterString", payload);
    }
  }
});
