<template>
  <div class="app2-container">
    <!-- 大标题 -->
     <div> 
      <header id="header" class="mui-bar mui-bar-nav">
			<a @click="goback1" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">{{ this.list.title }}</h1>
		</header>        
</div>
<div>
    	<div class="mui-card" v-show="ab">
				<div class="mui-card-content" >
					<img :src="this.list.pic" alt="" width="100%"/>
				</div>
				<!-- <div class="mui-card-content"> -->
					<div class="mui-card-content-inner">
            <p style="color: #333;font-size:20px">{{ this.list.title }}</p>
            <p>{{ this.list.date}}</p>
            <p>{{ this.list.author_name }}</p>
						<p style="color: #333;font-size:16px;" v-html="this.list.content"></p>
						<p style="color: #333;"></p>
					</div>
				<!-- </div> -->
				<div class="mui-card-footer">
					<p style="margin-bottom: 0px;color: #333;font-size:16px;">评论：</p>
				</div>
        </div>
    <!-- 评论子组件区域 -->
      <!-- <comment-box></comment-box> -->
      <div v-show="ab">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in list2">
						<img class="mui-media-object mui-pull-left" :src="item.img">
						<div class="mui-media-body">
						<p>{{item.name}}</p>
						<p style="color: #333;">{{item.con}}</p>
						</div>
				</li>
			</ul>
      <br>
         <div class="mse">请输入评论内容</div>
       <div class="add">
      <textarea v-model="obj.con"></textarea>
      <button class="mui-btn mui-btn-block mui-btn-primary" @click="addList">添加</button>
    </div>
  </div>
</div>
  </div>
</template>

<script>
// 1. 导入 评论子组件
import { Indicator } from 'mint-ui';
 import comment from "../subcomponents/comment.vue";
 import { Toast } from "mint-ui";
import api from '../../axios/api.js'
export default {
  name:"NewsInfo",
  data() {
    id: this.$route.params.id
    return {
      //  id: this.$route.params.id, // 将 URL 地址中传递过来的 Id值，挂载到 data上，方便以后调用
      newsinfo: {},// 新闻对象
      newsinfo2: {},
      list:{},
      list2: [],
      obj: {
        //将添加的数据存到obj对象中
        name: "",
        con: ""
      },
      text:"",
      // namereturn:this.$store.state.user.name
      ab:false
    };
  },
  created() {
    // this.getNewsInfo();
    //  this.listMe(this.jsons123);
    this.getData()
    console.log(this.list+'333222')
    Indicator.open('加载中');
     this.$emit('public_footer', false);
  },
  beforeRouteEnter(to, from, next) {
    console.log(to, from, next)
      if (to.name == 'Newsinfo') { // 这个name是下一级页面的路由name
      to.meta.keepAlive = false; // 设置为true说明你是返回到这个页面，而不是通过跳转从其他页面进入到这个页面
      }
      next()
    },
  computed: {
            user () {
                return this.$store.state.user
            }
        },
  methods: {
     goback1:function(){
                this.$router.go(-1)
                this.$emit('public_footer', true);
            },
               getData() {
        this.$http.post('http://47.103.14.235:27499/find/1234/'+this.$route.params.id).then(res=>{
         console.log(res.data+"这是刚进来！！！！！！！！！！！！！！！！！！！！！！");
         this.list =res.data;
         this.list2 =res.data.comments;
         this.ab=true;
         Indicator.close();
       });
     },
         addList(){
           Indicator.open('加载中');
      console.log(this.$route.params.id)               //获取文章ID
      console.log(this.$store.state.user+"dasdsadasdsa")       //获取用户数据
      if(typeof(this.$store.state.user)=='undefined'){          //如果用户没登录
        Toast({
                                 message: '请先登录后再评论',
                            });
          }                 
         else{                                     //否则
               this.tolist()               //执行tolost这个函数！！！！
          }},
        tolist(){

           this.obj.name=this.$store.state.user.nickName,
           this.obj.con=this.obj.con
                            //重要！！！！！！！！
       this.$http.post('http://47.103.14.235:27499/find/123/'+this.$route.params.id, { 
                   
                 name:this.$store.state.user.nickName,
                 img:this.$store.state.user.avatar,
                 con:this.obj.con
                                                          
              })                                                                  //重要！！！！！！！！
         .then(res => {                                                     //重要！！！！！！！！
           // console.log("请求成功"+res.data.data);                        //重要！！！！！！！！
           console.log(JSON.stringify(res.data.comments)+'这是转换成JSON格式的添加后的');  
           console.log(res.data.comments+"这是没有转换的！！！！！！")                                //重要！！！！！！！！
           this.list2 = res.data.comments; 
           Indicator.close();
                Toast({
                                 message: '评论成功',
                            })                                       //重要！！！！！！！！
         })                                                                  //重要！！！！！！！！
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
       
    

      this.$http.get("http://47.103.14.235:27499/find/123").then(result => {
        
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

<style lang="scss" scoped>
.app2-container{
  padding-top: 5px
}
li{
  border:0px
}
.mui-card{
  margin: 0px;
}
.mui-media-object{
    width: 42px;
    height: 42px;
}
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
.mui-btn-primary{
    color: #fff;
        background-color: salmon;
}
.mui-btn-block {
    left:2%;
    font-size: 18px;
    display: block;
    width: 96%;
    margin-bottom: 10px;
}
.mui-title{
  font-size: 16px
}
</style>
