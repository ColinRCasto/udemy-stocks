<template>
<div>
  <h1>Home Component</h1>
  <button @click="axTest">Axios Test</button> <button 
  @click="$store.dispatch('fluctuateMarket')">Shift Market</button>
  <ul v-for="(value,key,index) in data" :key="index">{{key}}
     <li v-for="(value,key,index) in value" :key="index"> 
        {{key}} -- {{value}}
        <p v-for="(letter,index) in value" :key="index">
          {{letter}} -- {{index}}
        </p>
     </li>
  </ul>
</div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      data:''
    }
  },
 methods:{
   axTest(){
    axios.get('/test.json')
    .then(res=>{this.data= res.data})
    .catch(err=>{console.log(err)});
   }
 }
};
</script>

<style>
</style>
