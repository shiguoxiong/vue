import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    ProductcCount:[]
  },
  mutations: {
    add (state,index) {
      if(state.ProductcCount.find(item => item.id===index.id)){
          index.num++
      }else{
          Vue.set(index,'num',1)
          state.ProductcCount.push(index)
      }
     },
    del(state,index){
      console.log(index)
      state.ProductcCount.splice(index-1,1)
    },
    delNum(state,index){
      if(state.ProductcCount.find(item => item.id===index.id) && index.num!=0){
            index.num--
      }
    }
  }
})
Vue.use(iview)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
