<template>

		 
			<div class="mui-card">
				<div class="mui-card-content" >
					<img :src="needDate.pic" alt="" width="100%"/>
				</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p style="color: #333;font-size:18px;font-weight:bold;">物品需求：{{needDate.need}}</p>
						<p>{{needDate.title}}</p>
                        <p></p>
                        <p style="color: #333">联系人：{{needDate.name}}</p>
                        <p style="color: #333">联系电话：{{needDate.phone}}</p>
                        <p style="color: #333">邮寄地址：{{needDate.local}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
					<a class="mui-card-link" style="color: #333;">{{needDate.name}}  {{needDate.phone}}</a>
                    <router-link to='/donation' @click.native="sent">
					<a class="mui-card-link">立即捐助</a>
                    </router-link>
				</div>
        </div>
			
			
			
			
</template>
 
<script>
export default {
  name: 'NeedCell',
  props: {
    needDate: Object
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    // jumpPage: function () {
    //   window.location.href = '/#/find/newsinfo/'+this.newsDate.id
    // }
    sent:function(){
        console.log('ojbk')
        console.log(this.needDate.local+'888888')
        console.log(this.needDate.name+'77777')
        console.log(this.needDate.phone+'66666')
        localStorage.setItem('local', this.needDate.local);
        localStorage.setItem('name', this.needDate.name);
        localStorage.setItem('phone', this.needDate.phone);
        localStorage.setItem('need', this.needDate.need);

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
a {
    color:salmon;
}
</style>