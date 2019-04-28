<template>
    <div>
        <!-- 顶部header区域 -->	
        <nav>
<header id="header" class="mui-bar mui-bar-nav">
			<a @click="goback" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">易捐</h1>
		</header>
        </nav>

    </div>
</template>
<script>

import { Toast } from 'mint-ui';
//按需导入toust
export default{
	methods:{
  goback:function(){
  this.$router.go(-1)
  }
  },
  
}


</script>

<style lang="scss" scoped>

img{
	width: 100%;
	height: 100%;
}
.mui-bar{
    background-color: salmon
}


</style>
