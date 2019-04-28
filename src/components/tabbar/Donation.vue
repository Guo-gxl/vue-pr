<template>
<div>
    <router-view></router-view>
        <router-link to="/donation/main" v-trigger v-trigger2></router-link>
       
  </div>

</template>


<script>
import { Indicator } from 'mint-ui';
 export default {
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
            var data2 = localStorage.getItem('local');
            
            console.log(localStorage.getItem('local')+'131231321321')
            Indicator.close()
        },
    }

</script>


<style>


</style>