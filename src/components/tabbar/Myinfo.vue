<template>
<div>
    <router-view></router-view>

        <router-link to="/myinfo/main" v-trigger v-trigger2 v-mydirective></router-link>   
  </div>

</template>


<script>
import { Indicator } from 'mint-ui';
 export default {
     created:function () {
            this.$emit('public_header', true);
            this.$emit('public_footer', true);
            Indicator.close()
        },
   directives:{
    trigger:{
     inserted(el,binging){
        el.click()
       //$(el).trigger('click')
      }
   },
    trigger2:{
     update(el,binging){
        el.click()
       //$(el).trigger('click')
      }
   },//
   mydirective:{
        bind:function (el, binding, vnode) { //1-被绑定
            console.log("1-bind 被绑定");
            console.log("el:",el);
            console.log("binding:",binding);
            console.log("vnode:",vnode);
            el.style.color=binding.value;
        },
        inserted:function (el, binding, vnode) { //2-被插入
            console.log("2-inserted 被插入");
        },
        update:function (el, binding, vnode) { //3-更新
            console.log("3-update 更新");
        },
        componentUpdated:function (el, binding, vnode) { //4-更新完成
            console.log("4-componentUpdated 更新完成");
        },
        unbind:function (el, binding, vnode) { //5-解绑
            console.log("5-unbind 解绑");
        }
    }
}
    }

</script>


<style>


</style>