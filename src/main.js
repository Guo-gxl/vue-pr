// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//入口文件
import Vue from "vue"
import store from './vuex'
import Vuex from 'vuex'
Vue.use(Vuex);

//导入路由包
import Router from 'vue-router'
Vue.use(Router)

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入axios
import axios from 'axios'
Vue.prototype.$ajax= axios


//导入ElementUI，用.babelrc解决bug
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//导入mui样式
// import './lib/mui/css/mui.min.css'
import './lib/mui/css/mui.css'
import'./lib/mui/css/icons-extra.css'
import'./lib/mui/fonts/mui-icons-extra.ttf'

//按需导入mint-ui组件
import{Header,Swipe, SwipeItem,Navbar, TabItem, TabContainer, TabContainerItem}from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

//导入vouter.js
import router from './router/index'

//导入地区选择器   重要！！！！！！！！解决地址选择器无法通过modules使用！！！！
import Distpicker from'./components/tabbar/Donation/v-distpicker/src/Distpicker.vue'
Vue.component('v-distpicker', Distpicker)

import app from'./App.vue'
//引入mockjs
require('./mock.js')

 var state = {
     isLogin:0,     //初始时候给一个 isLogin=0 表示用户未登录
   };
  
   const mutations = {
    changeLogin(state,data){
       state.isLogin = data;
     }
  
   };

   router.beforeEach((to,from,next) => {   

     if(to.matched.some( re => re.meta.auth)){  
      console.log(store.state.isLogin)
     // 对路由进行验证     
     if(store.state.isLogin=='100') {
          // 已经登陆       
     next()   // 正常跳转到你设置好的页面     
     }
     else{       
     // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
     next({path:'/login'})
     } 
     　　}
     else{ 
     　　　　　　next() 
     　　} 
     })

       router.beforeEach((to,from,next) => {   

        if(to.matched.some( m => m.meta.auth1)){  
        console.log(store.state.isLogin)
        // 对路由进行验证     
        if(store.state.isLogin=='100') {
             // 已经登陆       
        next({path:'/donation/index'})   // 正常跳转到你设置好的页面     
        }
        else{       
        // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
        next({path:'/donation/tologin'})
        } 
        　　}
        else{ 
        　　　　　　next() 
        　　} 
        })

        router.beforeEach((to,from,next) => {   

          if(to.matched.some( rm => rm.meta.auth2)){  
          console.log(store.state.isLogin)
          // 对路由进行验证     
          if(store.state.isLogin=='100') {
               // 已经登陆       
          next({path:'/message'})
              // 正常跳转到你设置好的页面     
          }
          else{       
          // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
          next({path:'/donation/tologin'})
          } 
          　　}
          else{ 
          　　　　　　next() 
          　　} 
          })


        

    // router.beforeEach((to,from,next) => {   
    //     console.log(m.meta.auth) 
    //     if(to.matched.some( m => m.meta.auth)){  
    //         console.log(store.state.isLogin)   
        
    //     // 对路由进行验证     
    //     if(store.state.isLogin=='100') { // 已经登陆       
    //     next()   // 正常跳转到你设置好的页面     
    //     }
    //     else{       
        
    //     // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
        
    //     　　 　　　　next({path:'/login' })
    //      　　　　　} 
    //     　　　　}else{ 
    //     　　　　　　next() 
    //     　　} 
    //     })


var vm=new Vue({
el:'#app',
render: c=>c(app),
router,//挂载路由对象
store,
})