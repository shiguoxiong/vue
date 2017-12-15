<template>
  <div id="app">
    <div id="top">
      <router-link to="/list">电商网站示例</router-link>
      <div class="shop_cart">
        <router-link to="/car">购物车<span class="num" v-show="num>0">{{num}}</span></router-link>
      </div>
    </div>
     <div class="content">
       <router-view></router-view>
     </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      value: ''
    }
  },
  computed:{
    num(){
     return  this.$store.state.ProductcCount.length;
    }
  },
  methods:{

  }
}
</script>

<style scoped="" type="less">
#app #top {
  height:50px;
  width:100%;
  background:midnightblue;
  font-size: 16px;
  line-height:50px;
  padding: 0 20px;
  position: fixed;
  top:0;
  z-index: 999;

}
.content{
  margin-top: 50px;
}
.shop_cart{
  float: right;
  color:red;
}
  .num{
    display: inline-block;
    width: 20px;
    height:20px;
    background: red;
    border-radius: 20px;
    text-align: center;
    line-height: 20px;
    color:white;
    position: relative;
    top:-6px;
  }
</style>
