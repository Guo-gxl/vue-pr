<template>
  <div class="Hello-container">
    <div> 
      <header id="header" class="mui-bar mui-bar-nav">
			<a @click="goback1" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">慈善新闻</h1>
		</header>        
</div>
    <div v-for="(item, key) in newsListShow">
      <news-cell
      :newsDate="item"
      :key="key"
      ></news-cell>
    </div>
  </div>
</template>
 
<script>
import api from './../axios/api.js'
import NewsCell from './NewsCell.vue'
 
export default {
  name: 'index',
  data () {
    return {
      newsListShow: [],
    }
  },
  components: {
    NewsCell
  },
  created() {
    this.setNewsApi();
    
     this.$emit('public_footer', false);
            this.$emit('public_headern', false);
            this.$emit('public_header', false);
  },
  methods:{
     goback1:function(){
                this.$router.replace('/find')
                this.$emit('public_headern', true);
                this.$emit('public_footer', true);
            },
    setNewsApi: function() {
      // api.JH_news('/news/index')
      // .then(res => {
      //   console.log(res);
      //   this.newsListShow = res.articles;
      // });
       this.$http.get("http://localhost:3000/find/123").then(result => {
        console.log(result.body+'这是hello的result！！！！');
           this.newsListShow = result.body;
           console.log(this.newsListShow+'这是news')
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
  padding-top: 5px;
	padding-bottom: 50px;
	overflow-x:hidden;
}
</style>