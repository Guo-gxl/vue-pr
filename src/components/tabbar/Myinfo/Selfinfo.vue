<template>
<div class="self-container">
	<div> 
      <header  id="header" class="mui-bar mui-bar-nav">
			<a @click="goback1" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">帐号信息</h1>
	</header>      
    </div>
    <div  class="self-container">
			<div class="mui-page-content">
				<div class="mui-scroll-wrapper">
					<div class="mui-scroll">
						<ul class="mui-table-view">
							<li class="mui-table-view-cell">
								<a>头像
									 <!-- <img class="mui-pull-right" style="width:15%" :src="user.avatar">    -->
                                     <router-link to="/touxiang">
									<img class="mui-pull-right" style="width:15%" :src="user.avatar" v-show="ava">
									<img class="mui-pull-right" style="width:15%" src="./../../../img/tou.png" v-show="defa">
									</router-link> 
							</a>
							</li>
							<li class="mui-table-view-cell">
								<a>账号<span class="mui-pull-right">{{user.name}}</span></a>
							</li>
							<li class="mui-table-view-cell">
								<a>昵称
									 <router-link to="/cgname">
									<span class="mui-pull-right">{{user.nickName}}</span>
									</router-link>
									</a>
							</li>
						</ul>
						<ul class="mui-table-view">
                            <li class="mui-table-view-cell">
								<a>性别<span class="mui-pull-right" >{{user.sex}}</span></a>
							</li>
							<li class="mui-table-view-cell">
								<a>手机号
                                     <router-link to="/cgphone">
                                     <span class="mui-pull-right">{{user.phone}}</span>
                                     </router-link>
                                      </a>
							</li>
							<li class="mui-table-view-cell">
								<a>邮箱地址
									 <router-link to="/cgemail">
									<span class="mui-pull-right">{{user.email}}</span>
									</router-link>
									</a>
							</li>
						</ul>
						<ul class="mui-table-view">
                            <li class="mui-table-view-cell">
								<router-link to="/cgpass">
								<a>更改密码</a>
								</router-link>
							</li>
							<li class="mui-table-view-cell">
								<a>手机号
                                     <router-link to="/cgphone">
                                     <span class="mui-pull-right">{{user.phone}}</span>
                                     </router-link>
                                      </a>
							</li>
							<li class="mui-table-view-cell">
								<a>邮箱地址
									 <router-link to="/cgemail">
									<span class="mui-pull-right">{{user.email}}</span>
									</router-link>
									</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
</div>
</template>
<script>
    export default {
		data(){
			return{
                  ava:false,
			  defa:true
			}
		},
        methods: {
             goback1:function(){
                this.$router.replace('/myinfo/main')
                this.$emit('public_headern', true);
                this.$emit('public_footer', true);
            },
           
        },
        computed: {
            user () {
                return this.$store.state.user
            }
		},
		created(){
             this.$emit('public_headern', false);
                this.$emit('public_footer', false);
                this.$emit('public_header', false);
                if(typeof(this.$store.state.user.avatar)=='undefined'){
				this.ava=false,
				this.defa=true
			}
			else{
				this.ava=true,
				this.defa=false
			}
		
    }
    }
</script>
<style lang="scss" scoped>
.self-container{
  min-height:680px; 

}
.mui-scroll-wrapper{
    position: inherit;
}
			.mui-page .mui-table-view:first-child {
				margin-top: 20px;
			}
			.mui-page .mui-table-view:last-child {
				margin-bottom: 40px;
			}
			.mui-table-view {
				margin-top: 30px;
			}
			
			.mui-table-view span.mui-pull-right {
				color: #999;
			}
			.mui-table-view-divider {
				background-color: #efeff4;
				font-size: 14px;
			}
			.mui-table-view-divider:before,
			.mui-table-view-divider:after {
				height: 0;
			}
            li{
                border: 0px
            }
	
			
</style>
