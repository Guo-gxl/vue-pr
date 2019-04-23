<template>
  <div>
    <!-- 大标题 -->
     <div> 
      <header id="header" class="mui-bar mui-bar-nav">
			<a @click="goback1" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">物流详情</h1>
		</header>  
     </div>
     <div class="mui-card" style="margin-bottom:20px">
				<ul class="mui-table-view">
					<li class="mui-table-view-cell mui-media">
						<a href="javascript:;">
							<div class="mui-media-body">
								<p class='mui-ellipsis' style="color: #333;font-size:10px">快递公司：{{this.Oddcom|filtersTextChange}}</p>
								<p class='mui-ellipsis' style="color: #333;">运单编号：{{this.OddNumbers}}</p>
							</div>
						</a>
					</li>
				</ul>
			</div>     
<div v-for="(item, key) in Showself">
      <Check-cell
      :newsDate="item"
      :key="key"
      ></Check-cell>
  </div>
  </div>

</template>

<script>
import { Toast } from "mint-ui";
import api from './../../axios/api.js'
import CheckCell from './CheckCell.vue'
let vm = {};
export default {
  data() {
    vm=this
    return {
    Showself:[],
    Oddcom:"",
    OddNumbers:"",
    
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
    components: {
    CheckCell
  },
  created() {
    
    this.Oddcom = this.$route.query.Oddcom,
    this.OddNumbers = this.$route.query.OddNumbers
    console.log(this.Oddcom+"11111")
    console.log(this.OddNumbers+"22222")
    this.getNewsInfo()
  },
  methods: {
     goback1:function(){
                this.$router.go(-1)
            },

    getNewsInfo: function() {
        console.log(this.OddNumbers+"2222231235345465346")
      this.$http.get(
          "https://kdwlcxf.market.alicloudapi.com/kdwlcx",
           {params:{type:this.Oddcom,no:this.OddNumbers},
           headers: { Authorization: 'APPCODE a5aa211e1b5c42579cd5a3c170a204ab'}
           }
           ).then(result => {
           this.Showself = result.body.result.list;      
           console.log(this.Showself+'1231321321321321')
           console.log(JSON.stringify(this.Showself)+'1231321321321321333333')
           if(JSON.stringify(this.Showself).length==2){
              Toast('查询失败');
           }
       });
    }
    
  },
};
</script>

<style lang="scss" scoped>
 .mui-card{
  margin: 0px
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
</style>
