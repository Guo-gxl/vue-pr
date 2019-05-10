<template>
<div class="mui-page-content">
				<div>
					<div class="mui-scroll">
                        <br>
						
						<ul class="mui-table-view mui-table-view-chevron" >
							<li class="mui-table-view-cell mui-media">
								<a class="mui-navigate-right">
									<img class="mui-media-object mui-pull-left head-img" :src="user.avatar" v-show="ava">
									<img class="mui-media-object mui-pull-left head-img" src="./../../img/tou.png" v-show="defa">
									<div class="mui-media-body">
										 {{user.nickName}}
										<p class='mui-ellipsis'  v-if="user">账号:{{user.name}}</p>
									</div>
								</a>
							</li>
						</ul>
						
                        <br>
                        <br>
						<router-link to="/selfinfo">
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell">
								<a class="mui-navigate-right">账号与安全</a>
							</li>
						</ul>
						</router-link>
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell">
								<a class="mui-navigate-right">关于 <i class="mui-pull-right update">V1.0.0</i></a>
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
				<router-view></router-view>
				<app-footer v-if="footer_show"></app-footer>
    </div>
</template>

<script>
import Footer from'../../components/public/Footer.vue'
    export default {
		data(){
			return{
			  ava:false,
			  defa:true,
			   header_show:true,
		   footer_show:true,
		   headern_show:true,
			}
		},
		components: {
		 'app-footer':Footer,
        },
        methods: {
            login () {
                this.$store.state.isLogin='0'
				this.$router.replace('/login')
				delete(this.$store.state.user)
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
		},
		created(){
			    this.$http.post("http://47.103.14.235:27499/users/main",
         {
				 name:this.$store.state.user.name,
				 nickName:this.$store.state.user.nickName
         }).then(result => {
        console.log(result.body+'!!!!!!'); 
       })
			console.log(JSON.stringify(this.$store.state.user)+"这是user！！！")
			if(typeof(this.$store.state.user.avatar)=='undefined'){
				this.ava=false,
				this.defa=true
			}
			else{
				this.ava=true,
				this.defa=false
			}
			console.log(this.$store.state.user.avatar+"这是更改后！！！user！！！")
		}
    }
</script>
<style lang="scss" scoped>
.mui-page-content{
	background-color: aqua;
}
</style>
