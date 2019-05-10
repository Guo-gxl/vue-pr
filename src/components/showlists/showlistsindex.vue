<template>
  
      <div class="mui-content">
			<div style="padding: 10px 10px;">
				<div class="mui-segmented-control">
            <router-link class="mui-control-item" to="/message/showlistindex/showself">
            自行捐出
            </router-link>
            <router-link class="mui-control-item" to="/message/showlistindex/showneed">
            快递上门
            </router-link>
            <router-view to="/showneed"></router-view>
            <router-view></router-view>     
				</div>
			</div>
           
      </div>
  

</template>


<script>
export default{
created:function () {
            this.$emit('public_header', true);
            this.$emit('public_footer', true);
        },
        }

</script>


<style>


</style>