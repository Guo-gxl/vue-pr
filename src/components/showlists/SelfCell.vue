<template>

			<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
             <p>爱心单号：{{newsDate._id}}</p>
            <p style="color: #333;">用户昵称：{{newsDate.nickName}}</p>
            <p style="color: #333;">快递公司：{{newsDate.Oddcom|filtersTextChange}}</p>
						<p style="color: #333;">快递单号：{{newsDate.OddNumbers}}</p>
            <p style="color: #333;">联系人：{{newsDate.doname}}</p>
            <p style="color: #333;">联系电话：{{newsDate.dophone}}</p>
						<p style="color: #333;">捐赠地址：{{newsDate.dolocal}}</p>
            <div class="mui-card-footer">
					       <a class="mui-card-link"></a>
                 <router-link :to="{path:'/message/showlistindex/check',query:{Oddcom:newsDate.Oddcom,OddNumbers:newsDate.OddNumbers}}">
                        <button>物流详情</button>
                        </router-link>
                        <router-view></router-view>
                         <router-link :to="{path:'/message/showlistindex/feedback',query:{feedback:newsDate.feedback}}">
                        <button>感谢信</button>
                        </router-link>
            <button @click="del">删除记录</button>
            </div>
					</div>
				</div>
        </div>
     
			
			
			
			
</template>
 
<script>
import { Toast } from "mint-ui";
let vm = {};
export default {
  name: 'SelfCell',
  props: {
    newsDate: Object
  },
  data () {
    vm=this
    return {
      arrayList: [
          {
            "code": "SFEXPRESS",
            "value": "顺丰速运"
          },
          {
            "code": "STO",
            "value": "申通快递"
          },
          {
            "code": "YTO",
            "value": "圆通快递"
          },
          {
            "code": "HTKY",
            "value": "百世汇通"
          },
          {
            "code": "EMS",
            "value": "EMS"
          },
          {
            "code": "ZTO",
            "value": "中通快递"
          },
          {
            "code": "YUNDA",
            "value": "韵达快递"
          },
          {
            "code": "TTKDEX",
            "value": "天天快递"
          },
        ],
    }
  },
      filters: {
      filtersTextChange: function (dataStr) {
        let arrayList = vm.arrayList;
        let value = '1111';
        for (let b of arrayList) {
          if (b.code == dataStr) {
            value = b.value;
            break;
          }
        }
        return value;
      }
    },

  
  computed: {
  },
  methods: {
      del(){
       console.log(this.newsDate._id+'这是要删除的id！！！')

        this.$http.post("http://47.103.14.235:27499/self/delself",{
            _id:this.newsDate._id
        }).then(result => {
        console.log(result.body+'这是result！！！！');
                Toast({
                                 message: '已删除',
                            });
                            // this.$router.go(0)
                            // this.$router.replace('/message') 
                            this.$emit('success',true);       
          
           
       });
   }
   
  }
}
</script>
 
<style scoped>
.financial-list {
  width: 100%;
  height: 200px;
  background-color: white;
  padding: 0.28rem 0;
  border-top: 5px solid #ccc;
}
 
.financial-list .collect {
  width: 92%;
  margin: 0 auto;
}
 
.financial-list .collect aside:nth-of-type(1) {
  width: 63%;
  float: left;
}
 
.financial-list .collect aside:nth-of-type(2) {
  width: 100%;
  height: 2rem;
  float: left;
  margin-left: 0.3rem;
}
 
.financial-list .collect h2 {
  width: 100%;
  height: 30px;
  font-size: 10px;
  color: #333333;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
}
 
.financial-list .collect aside:nth-of-type(2) img {
  width: 100%;
}
 
.financial-list .collect aside .Cleft {
  width: 45%;
  float: left;
  margin-top: 0.66rem;
}
 
.financial-list .collect aside .Cleft span{
  display: block;
  width: 1.4rem;
  margin-left: 0.05rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  overflow: hidden;
}
 
.financial-list .collect aside .Cright {
  width: 55%;
  float: right;
  margin-top: 0.66rem;
}
.financial-list .collect aside .Cright span{
  display: inline-block;
  margin: 0.04rem 0 0 0.05rem;
}
.financial-list .collect aside span {
  font-size: 0.2rem;
  color: #999999;
}
 
.financial-list .collect aside .Cleft img,
.financial-list .collect aside .Cright img {
  width: 0.18rem;
  height: 0.24rem;
  margin-top: 0.09rem;
}
.mui-card-content-inner{
  padding-bottom: 0px
}
</style>