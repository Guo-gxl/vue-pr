<template>
 <div>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in list">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="./../../img/tou.png">
						<div class="mui-media-body">
							{{item.name}}
							<p>{{item.content}}</p>
						</div>
					</a>
				</li>
			</ul>
      <br>
         <div class="mse">请输入评论内容</div>
       <div class="add">
      <textarea v-model="obj.content"></textarea>
      <button class="mui-btn mui-btn-block mui-btn-primary" @click="addList">添加</button>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
data() {
    return {
      list: [],
      obj: {
        //将添加的数据存到obj对象中
        id: "",
        name: "",
        content: ""
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
    // 查询列表数据
    getData() {
      this.$http.get("/list").then(res => {
        console.log(res);
        this.list = res.data.data;
      });
    },

    // 删除列表数据
    deleteList(id) {
      this.$http
        .post("/list", {
          params: {
            id: id
          }
        })
        .then(res => {
          console.log(res);
          this.list = res.data.data;
        });
    },

    // 增加列表数据
    addList() {
       //console.log("****"+this.obj);
       console.log(this.$store.state.user+"dasdsadasdsa")
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
         if(typeof(this.$store.state.user)=='undefined'){
          this.$notify({
                            message: '您还未登录',
                            duration: 3000
                        })
        }
        else{
              this.tolist()
         }},
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
          tolist(){
            this.obj.name=this.$store.state.user.nickName,
       this.$http
         .post("/listAdd", {
           params: {
             obj: this.obj
           }
         })
         .then(res => {
           // console.log("请求成功"+res.data.data);
           console.log(res.data+'这是res');
           this.list = res.data.data;
         })
          }
    
   }
};
</script>

<style lang="scss" scoped>
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
