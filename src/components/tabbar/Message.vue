<template>

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
           <show-need v-show="showneed1"></show-need>
           <show-self v-show="showself1"></show-self>
      
    <router-view name='showneed'></router-view>
        <router-link to="/message/main" v-trigger v-trigger2></router-link>
        	
	</div>
</div> 


</template>


<script>
import ShowNeed from '../showlists/showneed.vue'
import ShowSelf from '../showlists/showself.vue'
import { Indicator } from 'mint-ui';
 export default {
components: {
    'show-need':ShowNeed,
    'show-self':ShowSelf
  },
  data(){  
        return{
            showneed1:false,
            showself1:true, 
            activeClass: -1, // 0为默认选择第一个，-1为不选择
            classself:{'active':true},
            classneed:{'active':false}
            }
         } ,
  methods:{
 self(){
              
                  this.showself1 = true;
                  this.showneed1 = false;  
                  this.classself={'active':true}
                  this.classneed={'active':false}
              },
              need(){
              
                  this.showself1 = false;
                  this.showneed1 = true;  
                  this.classself={'active':false}
                  this.classneed={'active':true}
              }
  },
   directives:{
    trigger:{
     inserted(el){
        el.click()
       //$(el).trigger('click')
      }
   },
   trigger2:{
     update(el,binging){
        el.click()
       //$(el).trigger('click')
      }
   },//重要，解决了我的按钮按两次会消失的额bug
},
created:function () {
            this.$emit('public_header', true);
            this.$emit('public_footer', true);
            Indicator.close()
        },
    }

</script>


<style lang="scss" scoped>
.active{
    color: #fff !important;
    background-color:salmon;
    border-left: 1px solid salmon;
    border-right: 1px solid salmon;
    border-color: salmon;
}

a{
    color: salmon
}
.mui-btn-primary{
    color: #fff;
        background-color: salmon;
}
.mui-segmented-control .mui-control-item{
        color: salmon;
     border-color: salmon; 
     border-left: 1px solid salmon;
}




</style>