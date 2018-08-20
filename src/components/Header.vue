<template>
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <router-link class="navbar-brand" to="/">Stock Trader</router-link>
    </div>

    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
        <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
        <li><a>Current Funds: {{funds | currency}}</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a @click="fluctuateMarket" style="cursor : pointer">End Day</a></li>
        <li class="dropdown" :class="{open: dropdown_open}"  @click="dropdown_open = !dropdown_open">
          <a 
          href="#" 
          class="dropdown-toggle" 
          data-toggle="dropdown" 
          role="button" 
          aria-haspopup="true" 
          aria-expanded="false"
         
          >Save & Load <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#" @click="save_stocks">Save</a></li>
            <li><a href="#" @click="load_stocks">Load</a></li>
          </ul>
        </li>
      </ul>
      <input type="text" v-model="f_string" placeholder="Filter Stocks..."/>
      
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>

<script>
import { mapGetters } from "vuex";
import {mapActions} from 'vuex';
import axios from 'axios';

export default {

  data(){
    return{
      dropdown_open: false
    }
  },
  computed: {
    ...mapGetters(["funds"]),
    f_string:{
      get(){
        return this.$store.state.filter_string;
      }, 
      set(value){
        this.$store.state.filter_string = value;
      }

    }
  },
  methods: {
  ...mapActions([
    'fluctuateMarket'
  ]),
    save_stocks(){
    axios.put('/stocks.json',this.$store.state.portfolio)
    .then(res=>console.log(res))
    .catch(err=>{console.log(err)});
    },
    load_stocks(){
    axios.get('/stocks.json')
    .then(res=>{
      this.$store.state.portfolio = res.data;
      console.log(res);
      })
    .catch(err=>{console.log(err)});
    }
  }

};
</script>

<style scoped>
input{
   width: 100%;
    padding: 5px;
    margin: 5px 10px 10px 5px;
    border-radius: 5px;
    border: 1px #ccc solid;
}

input:focus{
  outline-width: 0px;
}
</style>
