<template>
 <div>
    <div class="add">
      <textarea v-model="obj.content"></textarea>
      <button @click="addList">添加</button>
    </div>
    <ul>
      <li v-for="item in list">
        {{item.name}}:{{item.content}}
      </li>
    </ul>
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
       text=typeof(this.$store.state.user)
       console.log(text+"5456456456456456")
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
         if(text=='undefined'){
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
            this.obj.name=this.$store.state.user.name,
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
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
