<template>
  <div class="Hello-container">
    
    <div> 
      <header id="header" class="mui-bar mui-bar-nav">
			<h1 class="mui-title">易捐</h1>
		</header>        
</div>
    <div v-for="(item, key) in newsListShow">
      <keep-alive>
      <news-cell
      :newsDate="item"
      :key="key"
      ></news-cell>
      </keep-alive>
    </div>
  </div>
</template>
 
<script>
import { Indicator } from 'mint-ui';
import api from './../axios/api.js'
import NewsCell from './NewsCell.vue'
 
export default {
  name: 'Hello',
  data () {
    return {
      newsListShow: [],
      isFirstEnter: false, //
    }
  },
   components: {
    NewsCell
  },
    
    mounted() {

    },
    activated() {
      if (!this.$route.meta.isBack || this.isFirstEnter) {
        this.initData() // 这里许要初始化dada()中的数据
        this.getDataFn() // 这里发起数据请求，（之前是放在created或者mounted中，现在只需要放在这里就好了，不需要再在created或者mounted中请求！！）
      }
      this.$route.meta.isBack = false //请求完后进行初始化
      this.isFirstEnter = false;//请求完后进行初始化
    },
    
 
  created() {
    this.setNewsApi();
     Indicator.close()
    Indicator.open('加载中')
  },
  methods:{

    setNewsApi: function() {
      // api.JH_news('/news/index')
      // .then(res => {
      //   console.log(res);
      //   this.newsListShow = res.articles;
      // });
       this.$http.get("http://47.103.14.235:27499/find/123").then(result => {
        console.log(result.body+'这是hello的result！！！！');
           this.newsListShow = result.body;
           console.log(this.newsListShow+'这是news');
           Indicator.close()
       });
    },
  }
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topNav{
  width: 100%;
  background: #ED4040;
  position: fixed;
  top:0rem;
  left: 0;
  z-index: 10;
}
.simpleNav{
  width: 100%;
  line-height: 1rem;
  overflow: hidden;
  overflow-x: auto;
  text-align: center;
  font-size: 0;
  font-family: '微软雅黑';
  white-space: nowrap;
}
.simpleNav::-webkit-scrollbar{height:0px}
.simpleNavBar{
  display: inline-block;
  width: 1.2rem;
  color:#fff;
  font-size:0.3rem;
}
.navActive{
  color: #000;
  border-bottom: 0.05rem solid #000;
}
.placeholder{
  width:100%;
  height: 1rem;
}
.Hello-container{
  height: 800px;
  padding-top: 5px;
	padding-bottom: 50px;
	overflow-x:hidden;
}
.mui-title {
    font-size: 19px;
    }
</style>