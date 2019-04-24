<template>
 <div>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in list">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.img">
						<div class="mui-media-body">
						<p>	{{item.name}}</p>
							{{item.con}}
						</div>
					</a>
				</li>
			</ul>
      <br>
         <div class="mse">请输入评论内容</div>
       <div class="add">
      <textarea v-model="obj.con"></textarea>
      <button class="mui-btn mui-btn-block mui-btn-primary" @click="addList">添加</button>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
data() {
    id: this.$route.params.id
    return {
      list: [],
      obj: {
        //将添加的数据存到obj对象中
        name: "",
        con: ""
      },
      text:"",
      // namereturn:this.$store.state.user.name

    };
  },
  computed: {
            user () {
                return this.$store.state.user
            }
        },
  created() {
     this.getData();
  },
  methods: {
    //查询列表数据
     getData() {
        this.$http.post('http://47.103.14.235:27499/find/1234/'+this.$route.params.id).then(res=>{
         console.log(res.data+"这是刚进来！！！！！！！！！！！！！！！！！！！！！！");
         this.list =res.data.comments;
       });
     },
    

    addList(){
      console.log(this.$route.params.id)               //获取文章ID
      console.log(this.$store.state.user+"dasdsadasdsa")       //获取用户数据
      if(typeof(this.$store.state.user)=='undefined'){          //如果用户没登录
        this.$notify({
          message: '您还未登录',                                 //告诉用户没登录
          duration: 3000    
          })
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
           this.list = res.data.comments;                                        //重要！！！！！！！！
         })                                                                  //重要！！！！！！！！
          }                                                                  //重要！！！！！！！！



       }


    

    // 增加列表数据
    //addList() {                                                //重要！！！！！！！！
       //console.log("****"+this.obj);
     //  console.log(this.$store.state.user+"dasdsadasdsa")    //重要！！！！！！！！
      //  text=typeof(this.$store.state.user)
      //  if(this.$store.state.user){
      //  this.obj.name=this.$store.state.user.name,
      //  this.$http
      //    .post("/listAdd", {
      //      params: {
      //        obj: this.obj
      //      }
      //    })
      //    .then(res => {
      //      // console.log("请求成功"+res.data.data);
      //      console.log(res.data+'这是res');
      //      this.list = res.data.data;
      //    })
      //    }
        //  if(typeof(this.$store.state.user)=='undefined'){                //重要！！！！！！！！
        //   this.$notify({                                                //重要！！！！！！！！
        //                     message: '您还未登录',                      //重要！！！！！！！！
        //                     duration: 3000                              //重要！！！！！！！！
        //                 })                                                //重要！！！！！！！！
        // }//重要！！！！！！！！
        // else{//重要！！！！！！！！
        //       this.tolist()//重要！！！！！！！！
        //  }},//重要！！！！！！！！
  //   },

  //   // 修改列表数据
  //   updateList() {
  //     var that = this;
  //     this.$http
  //       .post("/listUpdate", {
  //         params: {
  //           obj: this.obj
  //         }
  //       })
  //       .then(function(res) {
  //         // console.log("请求的数据"+res.data.data);
  //         console.log(res);
  //         that.list = res.data.data;
  //       });
  //   }
      //     tolist(){                                                       //重要！！！！！！！！
      //       this.obj.name=this.$store.state.user.nickName,                 //重要！！！！！！！！
      //  this.$http                                                         //重要！！！！！！！！
      //    .post("/listAdd", {                                               //重要！！！！！！！！
      //      params: {                                                        //重要！！！！！！！！
      //        obj: this.obj                                                   //重要！！！！！！！！
      //      }                                                                  //重要！！！！！！！！
      //    })                                                                  //重要！！！！！！！！
      //    .then(res => {                                                     //重要！！！！！！！！
      //      // console.log("请求成功"+res.data.data);                        //重要！！！！！！！！
      //      console.log(res.data+'这是res');                                  //重要！！！！！！！！
      //      this.list = res.data.data;                                        //重要！！！！！！！！
      //    })  //重要！！！！！！！！
      //     }//重要！！！！！！！！
    
   
};
</script>

<style lang="scss" scoped>
.mui-media-object{
    width: 42px;
    height: 42px;
}
.mse{
  margin-left:3%;
}
  textarea {
    font-size: 14px;
    height: 150px;
    width: 94%;
    margin-left:3%;
    
  }
  .mui-table-view{
     width: 94%;
    margin-left:3%;
    background-color: transparent
  }
  .mui-btn-block{
    padding: 20px 0;
    margin-bottom: 0px;
     width: 94%;
    margin-left:3%;
}


li{border: none}
p{word-break:normal;
white-space:pre-warp;
word-wrap:break-word;
}
</style>
