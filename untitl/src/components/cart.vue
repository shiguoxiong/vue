<template>
    <div class="selected" >
      <h1>购物清单</h1>
      <div v-show="selectProduct.length>0">
        <div class="wraper">
          <div class="shopDesc">商品信息</div>
          <div class="right">
            <div class="shopPrice">单价</div>
            <div class="shopNumber">数量</div>
            <div class="numberTotal">小计</div>
            <div class="del">操作</div>
          </div>

        </div>
        <div v-for="(item,index) in selectProduct">
          <div class="wraper">
            <div class="shopDesc">
              <img :src="item.image" alt="">
              <span class="name">{{item.name}}</span>
            </div>
            <div class="right">
              <div class="shopPrice">¥{{item.cost}}</div>
              <div>
                <div class="delNum controlNum" @click="delNum(item)">-</div>
                <div class="shopNumber " style="text-align: center">{{item.num}}</div>
                <div class="addNum controlNum" @click="add(item)">+</div>
              </div>

              <div class="numberTotal">¥{{item.cost * item.num}}</div>
              <div class="del"><a href="javascript:" @click="del(index)">删除</a></div>
            </div>

          </div>
        </div>
        <div class="product_total">
          <div class="totalNumber">共计{{totalNumber}}件商品</div>
          <div class="totalPrice">应付总额{{totlatPrice}}</div>
          <a href="javascript:" class="pay" @click="pay()">现在结算</a>
        </div>
      </div>
      <div class="noProduct" v-show="selectProduct.length==0" style="text-align: center;fontSize:20px ">暫無商品......</div>
    </div>
</template>
<script>
    export default {
        name: "",
        data() {
            return {}
        },
       computed:{
        selectProduct(){
           return this.$store.state.ProductcCount;
        },
         totalNumber(){
            var num=0;
           this.selectProduct.forEach(function (item) {
             num+=item.num
           })
           return num;
         },
         totlatPrice(){
           var totalPrice=0
           this.selectProduct.forEach(function (item) {
             totalPrice+=item.num*item.cost
           })
           return totalPrice
         }
      },
      methods:{
          del(key){
            this.$store.commit("del",key)
          },
          pay(){
            console.log(12)
            alert("支付功能尚未開通")
          },
          add(key){
            this.$store.commit('add',key)
           },
        delNum(key){
             this.$store.commit('delNum',key)

           }
      }
    }
</script>
<style >
  .selected img{
    width:60px;
    vertical-align: middle;
  }
.selected{
  margin: 100px 50px;
  border:2px solid #ccc;
  border-radius: 8px;
  padding: 10px 20px;
}
.wraper{
  overflow: hidden;
  padding: 10px 0;
  font-size: 18px;
}
.right{
  width: 40%;
  height:40px;
  line-height: 40px;
}
.right div{
  width: 25%;
}
.wraper div{
  float: left;

}

.name{
  display: inline-block;
  vertical-align: middle;

}
  .shopDesc{
    width: 60%;
  }
  .product_total{
   margin-left:700px;
    height:60px;
    padding-top:20px ;
    font-size: 18px;
  }
  .product_total div{
    display: inline-block;
    margin-left: 30px;
    margin-right: 10px;
  }
  .pay{
    display: inline-block;
    width: 100px;
    height:40px;
    font-size: 15px;
    line-height: 40px;
    text-align: center;
    background: blue;
    border-radius: 8px;
  }
  .controlNum{
    display: inline-block;
    width:20px;
    height:30px;
    border: 1px solid #ccc;
    border-radius: 30px;
    line-height: 30px;
    text-align: center;
    margin-top: 5px;
    cursor: pointer;
  }
</style>
