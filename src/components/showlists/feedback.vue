<template>
<div class="mui-card">
<header id="header" class="mui-bar mui-bar-nav">
			<a @click="goback1" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">捐赠反馈</h1>
</header>   
     
				<div class="mui-card-content" >
					<img src="../../img/thanks.jpg" alt="" width="100%"/>
				</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p style="color: #333;font-size:18px;font-weight:bold;">{{this.feedback}}</p>
					</div>
				</div>
        </div>

</template>

<script>
import { Toast } from "mint-ui";
import api from './../../axios/api.js'
export default {
  data() {
    return {
        feedback:"",
    };
  },
  created() {
    
this.feedback = this.$route.query.feedback
console.log(this.$route.query.feedback+"11111222")
console.log(this.feedback+"11111")
console.log(JSON.stringify(this.feedback)+'55555')
if(JSON.stringify(this.feedback)==undefined){
  this.feedback='暂时还没有收到反馈，请耐心等待'
}
  },
  methods: {
     goback1:function(){
                this.$router.go(-1)
            },
     
    
    
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
</style>
