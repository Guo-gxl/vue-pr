<template>
    <div>
<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/find">
				<span class="mui-icon mui-icon-extra mui-icon-extra-order"></span>
				<span class="mui-tab-label">需求</span>
			</router-link>
			<router-link class="mui-tab-item" to="/hello">
				<span class="mui-icon mui-icon-extra mui-icon-extra-find"></span>
				<span class="mui-tab-label">资讯</span>
			</router-link>
			<router-link class="mui-tab-item" to="/donation">
				<span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
				<span class="mui-tab-label">捐赠</span>
			</router-link>
			<router-link class="mui-tab-item" to="/message">
				<span class="mui-icon mui-icon-extra mui-icon-extra-topic"></span>
				<span class="mui-tab-label">捐赠订单</span>
			</router-link>
			<router-link class="mui-tab-item" to="/myinfo">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>        
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
//按需导入toust
export default{
}
</script>

<style lang="scss" scoped>
.mui-bar-tab{
	z-index: 9999;
}
img{
	width: 100%;
	height: 100%;
}
.v-enter{
	opacity: 0;
	transform: translateX(100%)
	}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease
}
.mui-col-xs-4 {
    width: 25%;
}

</style>





