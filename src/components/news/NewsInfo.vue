<template>
  <div class="app-container">
    <!-- 大标题 -->
     <div> 
      <header id="header" class="mui-bar mui-bar-nav">
			<a @click="goback1" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">新闻</h1>
		</header>        
</div>
    <h3 class="title">{{ newsinfo.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.date}}</span>
      <span>作者：{{ newsinfo.author_name }}</span>
    </p>

    <hr>

    <!-- 内容区域 -->
     <div class="content" v-html="newsinfo.content"></div> 

    <!-- 评论子组件区域 -->
      <comment-box></comment-box>
  </div>
</template>

<script>
// 1. 导入 评论子组件
 import comment from "../subcomponents/comment.vue";
import api from '../../axios/api.js'
export default {
  data() {
    id: this.$route.params.id
    return {
      //  id: this.$route.params.id, // 将 URL 地址中传递过来的 Id值，挂载到 data上，方便以后调用
      newsinfo: []// 新闻对象
    };
  },
  created() {
    this.getNewsInfo();
    
  },
  methods: {
     goback1:function(){
                this.$router.go(-1)
            },
    getNewsInfo: function() {
      // 获取新闻详情
      //  api.JH_news('/news/index')
      //  .then(result => {
      //     console.log(result.articles[this.$route.params.id]);
      //      this.newsinfo = result.articles[this.$route.params.id];
      // });
       this.$http.get("http://localhost:3000/find/123").then(result => {
        console.log(result.body[this.$route.params.id]);
           this.newsinfo = result.body[this.$route.params.id];
           console.log(this.newsinfo+'这是newsinfo')
       });
    }
    
  },
  components: {
    // 用来注册子组件的节点
     "comment-box": comment
  }
};
</script>

<style lang="scss">
.content{
  width: 94%;
  margin-left:3%;
}
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>
