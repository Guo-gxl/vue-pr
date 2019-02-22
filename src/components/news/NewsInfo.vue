<template>
  <div class="app-container">
    <!-- 大标题 -->
     <div> 
      <header id="header" class="mui-bar mui-bar-nav">
			<a @click="goback1" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">新闻</h1>
		</header>        
</div>
<div v-for="newsinfo3 in newsinfo2">
    <h3 class="title">{{ newsinfo3.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newsinfo3.date}}</span>
      <span>作者：{{ newsinfo3.author_name }}</span>
    </p>
              <img :src="newsinfo3.pic" alt="" width="100%"/>
    <hr>

    <!-- 内容区域 -->
     <div v-html="newsinfo3.content"></div> 
</div>
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
      newsinfo: {},// 新闻对象
      newsinfo2: {},
    };
  },
  created() {
    this.getNewsInfo();
    //  this.listMe(this.jsons123);
    
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
// this.$http.get("http://localhost:3000/find/123").then(result => {
//         console.log(result.body[this.$route.params.id]);
//            this.newsinfo = result.body;
//            var aaa=this.$route.params.id  
//             this.newsinfo=JSON.parse(this.newsinfo).filter(function(a){
//                   if(a.id==aaa)
//                        return a;
                      
//                  });; 
//            console.log(this.newsinfo+'这是newsinfo')
//            console.log(JSON.stringify(this.newsinfo)+'这是result.body[this.$route.params.id]');          
       
    

      this.$http.get("http://localhost:3000/find/123").then(result => {
        
          //  this.newsinfo = result.body[this.$route.params.id];
           console.log(this.newsinfo+'这是newsinfo')
           this.newsinfo = result.body;
           this.newsinfo=JSON.stringify(this.newsinfo)
           var aaa=this.$route.params.id  
           this.newsinfo2=JSON.parse(this.newsinfo).filter(function(a){
                 if(a.id==aaa)
                      return a;
                      
                });; 
           console.log(JSON.stringify(this.newsinfo2)+'最终！！！');          



      //  this.$http.get("http://localhost:3000/find/123").then(result => {
      //    this.jsons123 = JSON.stringify(result.body)// 转成JSON格式
      //     console.log(this.jsons123+'ddddd')             //打印json的result.body
      //     var aaa=this.$route.params.id                 //浏览器传递的id传值
      //     this.newsinfo = JSON.parse(this.jsons123).filter(function(a){
      //           if(a.id==aaa)
      //                 return a;
      //          });;             //筛选id正确的json，并且转换成对象！
      //     console.log(this.newsinfo+"最终表格！！！！111111111")          
      //     // this.newsinfo = JSON.stringify(this.newsinfo)            //newsinfo对象转换json
      //     // console.log(this.newsinfo+"最终表格！！！！22222222")
      //     // this.newsinfo = result.body[this.$route.params.id];  //将获取到的json对象放到newsinfo
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
