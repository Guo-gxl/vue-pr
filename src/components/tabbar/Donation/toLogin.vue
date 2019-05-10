<template>
<div class="app-container">
   <router-link class="mui-tab-item" to="/login">
				<div class="mui-content">
			<div class="mui-content-padded">
	<button type="button" class="mui-btn mui-btn-danger">
					去登录
				</button>
			</div>
				</div>
	</router-link>

  </div>

</template>


<script>
export default {
    data(){
      return {
		  header_show:true,
		   footer_show:true,
		   headern_show:true,
 
      }
  },
        created:function () {
            this.$emit('public_header', true);
            this.$emit('public_footer', true);
        },
}

</script>


<style lang="scss" scoped>
.app-container{
  margin-top: 60px;
  min-height:620px; 
}
.mui-content{
  width: 50%;
  height: 40px;
  margin: 0 auto;
   text-align:center;
}
.mui-btn{
  width: 50%;
  height: 40px;
}


</style>