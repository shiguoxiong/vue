<template>
    <div class="product">
      <div class="product_pic">
        <div class="img">
          <img :src="currentProduct.image" alt="">
        </div>
        <div class="product_desc">
          <h1>{{currentProduct.name}}</h1>
          <p>¥ {{currentProduct.cost}}</p>
          <div id="addCar" @click="addProduct(currentProduct)">加入购物车</div>
        </div>
      </div>

      <div>
        <h2>产品介绍</h2>

          <img v-for="n in 10" :src="'http://ordfm6aah.bkt.clouddn.com/shop/' + n + '.jpeg'">
      </div>
    </div>
</template>
<script>
  import product_data from '../assets/product.js';
    export default {
        name: "",
        data() {
            return {
                currentProduct:''
            }
        },

      //通过路由传过来的id筛选数据
        methods:{
          getProduct(){
            this.currentProduct=product_data.find(item => item.id===parseInt(this.$route.params.id))
          },
          addProduct(currentProduct){


              this.$store.commit('add',currentProduct)


           }
        },
        mounted(){
           this.getProduct()
        }
    }
</script>
<style>
  .product{
    text-align: center;
    padding: 0 20px;
  }
  .product_pic{
    display: table;
    width: 100%;
  }
  .product_pic>.img{
    display: table-cell;
  }
  .product_pic>.img>img{
    width: 500px;
  }
  .product_pic>.product_desc{
    display: table-cell;
    vertical-align: middle;
  }
  .shop{
    display: inline-block;
    width: 300px;
    background: blue;
    font-size: 18px;
  }
  #addCar{
    width: 200px;
    height:40px;
    background: blue;
    margin: 10px auto;
    font-size: 18px;
    line-height: 40px;
    color:white;
    border-radius: 5px;
    cursor: pointer;
  }

</style>
