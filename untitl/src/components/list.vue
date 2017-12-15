<template>
    <div class="product_list">
      <div>
        <router-link v-for="item in productDate" :to="'/product/'+item.id">
          <img :src="item.image" alt="">
          <p>{{item.name}}</p>
          <p>{{item.cost}}</p>
        </router-link>
      </div>

      <span class="back" @click="backTop()">回到頂部</span>
    </div>
</template>
<script>
   import product_data from '../assets/product'
    export default {
        name: "",
        data() {
            return {
              productDate:product_data
            }
        },
        mounted(){

        },
        methods:{
          backTop(){
            document.documentElement.scrollTop = document.body.scrollTop =0;
          }
        }
    }
</script>
<style>
.product_list{
  width:100%;
 position: relative;
  background: #cccc;

}
.product_list a{
  display: inline-block;
  width:20%;
  text-align:center;
  height:400px;
  margin: 10px 20px;
  vertical-align: top;
  border: 4px solid #ccc;
  border-radius: 8px;

}
  img{
    width:80%;
    margin: 10px 10px 20px 10px;
  }
  p{
    margin: 10px 0;
  }
  .back{
    width: 60px;
    height:40px;
    display: inline-block;
    background: #cccccc;
    position: absolute;
    bottom: 60px;
    right:20px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
  }
</style>
