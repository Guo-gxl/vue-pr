<template>
    <div  class="app-container">
		
        <!-- 顶部header区域 -->
		
		 <app-header v-if="header_show"></app-header>
		 <app-headern v-if="headern_show"></app-headern>	
		 
<!-- <header v-if="tabType" id="header" class="mui-bar mui-bar-nav">
			<a @click="goback" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">易捐</h1>
		</header>
		-->


       <transition name="app" mode="out-in">
        <!-- 中间放router-view 区域-->
         <keep-alive include="Hello,Find">
        <router-view v-on:public_headern="public_headern" v-on:public_header="public_header" v-on:public_footer="public_footer"></router-view>
         </keep-alive>
		</transition>
        <!-- 底部tabbar区域 -->
<app-footer v-if="footer_show"></app-footer>
    </div>
</template>
<script>
import Header from'./components/public/Header.vue'
import Footer from'./components/public/Footer.vue'
import Headern from './components/public/Headern.vue'

import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';
//按需导入toust
export default{
// 	methods:{
//   goback:function(){
//   this.$router.go(-1)
//   }
  

//   },
//   watch:{
// 	   $router(e){
// 	   if (e.name=='Message') {
// 	 	  this.tabType=true
// 	   }else{
// 	 	  this.tabType=false
// 	   }
// 	   }
//   }
//}
name: 'App',
  data(){
      return {
		  header_show:true,
		   footer_show:true,
		   headern_show:true,
 
      }
  },
  components: {
		'app-header':Header,
		 'app-footer':Footer,
		 'app-headern':Headern
  },
  beforeRouteEnter(to, from, next) {
    console.log(to, from, next)
      if (to.name == 'Newsinfo') { // 这个name是下一级页面的路由name
      to.meta.keepAlive = false; // 设置为true说明你是返回到这个页面，而不是通过跳转从其他页面进入到这个页面
      }
      next()
	},
	
  methods:{
      //是否显示头部
      public_header:function (bool) {
		this.header_show = bool;
		},
		//是否显示底部
      public_footer:function (bool) {
          this.footer_show = bool;
	  },
	    public_headern:function (bool) {
          this.headern_show = bool;
      }

      
  }
}


   


</script>

<style lang="scss">
.app-container{
    padding-top: 40px;
	padding-bottom: 50px;
	overflow-x:hidden;
}
img{
	width: 100%;
	height: 100%;
}
.app-enter{
	opacity: 0;
	transform: translateX(100%)
	}
.app-leave-to{
	opacity: 0;
	transform: translateX(-100%);
}
.app-enter-active,{
	transition: all 0.1ms ease-in	
}
.app-leave-active{
	transition: all 0.4s linear
}
.mui-col-xs-4 {
    width: 25%;
}
.mui-bar-tab .mui-tab-item.mui-active {
    color:salmon;
}
a {
    text-decoration: none;
    color: salmon;
}
.mui-btn-primary,{
	border: 0px solid;
	color: #fff;
        background-color: salmon;
}


.mui-segmented-control{
     border-color: salmon; 
}


</style>





