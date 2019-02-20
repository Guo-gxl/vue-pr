<template>
<div class="mui-page-content">
				<div>
					<div class="mui-scroll">
                        <br>
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell mui-media">
								<a class="mui-navigate-right">
									<img class="mui-media-object mui-pull-left head-img" id="head-img" src="">
									<div class="mui-media-body">
										 {{user.nickName}}
										<p class='mui-ellipsis'  v-if="user">账号:{{user.name}}</p>
									</div>
								</a>
							</li>
						</ul>
                        <br>
                        <br>
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell">
								<a class="mui-navigate-right">账号与安全</a>
							</li>
						</ul>
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell">
								<a class="mui-navigate-right">身份信息</a>
							</li>
						</ul>
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell">
								<a class="mui-navigate-right">关于易捐 <i class="mui-pull-right update">V3.1.0</i></a>
							</li>
						</ul>
                        <br>
                        <br>
						<ul class="mui-table-view">
							<li class="mui-table-view-cell" style="text-align: center;">
								<a @click="login">退出登录</a>
							</li>
						</ul>
					</div>
				</div>
    </div>
</template>

<script>
    export default {
        methods: {
            login () {
                this.$store.state.isLogin='0'
                this.$router.replace('/login')
            },
            logout () {
                this.$store.dispatch('logout').then(() => {
                    this.$router.replace('/login')
                })
            }
        },
        computed: {
            user () {
                return this.$store.state.user
            }
        }
    }
</script>
<style lang="scss" scoped>
</style>
