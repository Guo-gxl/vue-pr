<template>

		 <router-link :to="'/newsinfo/' + this.newsDate.id">
			<div class="mui-card">
				<div class="mui-card-content" >
					<img :src="newsDate.pic" alt="" width="100%"/>
				</div>
				<!-- <div class="mui-card-content"> -->
					<div class="mui-card-content-inner">
						<p style="color: #333;font-size:18px">{{newsDate.title}}</p>
            <p>{{newsDate.date | getYMD}}    {{newsDate.author_name}}</p>
						
					</div>
				<!-- </div> -->
        </div>
        </router-link>
  
			
			
			
</template>
 
<script>
export default {
  name: 'NewsCell',
  props: {
    newsDate: Object
  },
  data () {
    return {
    }
  },
  computed: {
  },
   beforeRouteEnter(to, from, next) {
    console.log(to, from, next)
      if (to.name == 'Newsinfo') { // 这个name是下一级页面的路由name
      to.meta.keepAlive = false; // 设置为true说明你是返回到这个页面，而不是通过跳转从其他页面进入到这个页面
      }
      next()
    },
  methods: {
    jumpPage: function () {
      window.location.href = '/#/find/newsinfo/'+this.newsDate.id
    }
  }
}
</script>
 
<style scoped>
.mui-card{
  margin: 0px;
  margin-bottom: 10px
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