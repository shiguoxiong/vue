<template>
  <div id="model">
    <div class="login" v-show="!showResert">
      <h1>用户登录</h1>
      <form action="http://localhost:8081/?#/list">
        <div class="form_label">
          <label for="">用户名：</label>
          <input type="text" v-model="name"/>
        </div>
        <div class="form_label">
          <label for="">密&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
          <input type="password" v-model="password"/>
        </div>
        <input type="submit" value="登录" class="submit">
        <a href="javascript:" style="margin-left: 20px" @click="showResert12()">没有账号,点击注册</a>
      </form>
    </div>
    <div class="resert" v-show="showResert">
      <h1>用户注册</h1>
      <form action="">
        <div class="form_label">
         <label for="">用户名：</label>
          <input type="text"/>
        </div>
        <div class="form_label">
          <label for="">密&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
          <input type="password"/>
        </div>
        <input type="submit" value="注册" class="submit">
        <a href="javascript:" style="margin-left: 20px" @click="back12()">已有账号,返回登录!!!</a>
      </form>
    </div>
  </div>

</template>
<script>
  import time from '../assets/time.js'
    export default {
        name: "login",
        data() {
            return {
              showResert:false,
              name:'',
              password:''
            }
        },
        methods:{
          showResert12(){
            this.showResert=true
        },
          back12(){
            this.showResert=false
          }
      },
        mounted(){
          console.log(time)
        }

    }
</script>
<style>
#model{

  background: #ccc;
  position: relative;

}
  .login{
    position: absolute;
    top:50%;
    left:50%;
    transform: translateX(-250px);
    width: 500px;
    height:300px;
    border:2px solid #ccc;
    margin: 40px auto;

  }
.resert{
  position: absolute;
  top:50%;
  left:50%;
  transform: translateX(-250px);
  width: 500px;
  height:300px;
  border:2px solid #ccc;
  margin: 40px auto;

}
    form{
      width: 100%;
      padding: 10px 10px;
    }
    h1{
      margin-left: 200px;
    }
  .form_label{
      height:40px;
      padding: 5px 10px;
    margin-left: 100px;
    }
.form_label input{
  width: 200px;
}
  .submit{
    width: 50px;
    height:20px;
    margin: 20px 0px 0 200px;
  }

</style>
