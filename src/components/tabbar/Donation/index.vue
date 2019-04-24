<template>
 <div class="img1">
   <div class="mui-content">
			<div style="padding: 10px 10px;">
				<div class="mui-segmented-control">
          <a class="mui-control-item" @click="self" :class="classself">
            自行捐出
            </a>
           <a class="mui-control-item" @click="need" :class="classneed">
            快递上门
            </a>
				</div>
            <self-to v-show="selfto1"></self-to>
            <need-to v-show="needto1"></need-to>
      
           <router-view name='selfto'></router-view>
    	</div>
			</div>     
  </div>
</template>


<script>
import SelfTo from './selfto.vue'
import NeedTo from './self.vue'
export default {
  created(){
    console.log(this.$route.query.local+'111')
  },
  components: {
    'self-to':SelfTo,
    'need-to':NeedTo
  },
  data(){  
        return{
            needto1:false,
            selfto1:true, 
            activeClass: -1, // 0为默认选择第一个，-1为不选择
            classself:{'active':true},
            classneed:{'active':false}
            }
         } ,
     methods:{
 self(){
              
                  this.selfto1 = true;
                  this.needto1 = false;  
                  this.classself={'active':true}
                  this.classneed={'active':false}
              },
              need(){
              
                  this.selfto1 = false;
                  this.needto1 = true;  
                  this.classself={'active':false}
                  this.classneed={'active':true}
              }
  },
    
		
			
			
		
		
        
}

</script>


<style lang='scss' scoped>
.mui-col-xs-5{
	width: 50%;
	float: right;
}
.mui-btn-block{
padding: 50px 0;
}

.active{
    color: #fff !important;
    background-color:salmon;
    border-left: 1px solid salmon;
    border-right: 1px solid salmon;
    border-color: salmon;
}
.mui-segmented-control .mui-control-item{
        color: salmon;
     border-color: salmon; 
     border-left: 1px solid salmon;
}
.mui-control-item{
  color: salmon; 
}
a{
    color: salmon
}
.mui-btn-primary{
    color: #fff;
        background-color: salmon;
}
</style>