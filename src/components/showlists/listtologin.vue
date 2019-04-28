<template>
<div class="app-container">
  <span>请先登录</span>
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
        created:function () {
            this.$emit('public_header', true);
            this.$emit('public_footer', true);
        },
}

</script>


<style lang="scss" scoped>
.app-container{
    padding-top: 40px;
	padding-bottom: 50px;
	overflow-x:hidden;
  margin: 0 auto;
   text-align:center;
}
.mui-content{
  width: 50%;
  height: 20%;
  margin: 0 auto;
   text-align:center;
}
.mui-btn{
  width: 50%;
  height: 20%;
}


</style>