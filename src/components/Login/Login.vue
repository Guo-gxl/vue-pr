<template>
  <div>
  <div> 
      
      <header  id="header" class="mui-bar mui-bar-nav">
			<a @click="goback1" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">登录</h1>
		</header>      
</div>

    <el-row type="flex" justify="center" class="mui-content">
        <el-form ref="loginForm" :model="user" :rules="rules" class="mui-input-group">
            <el-form-item prop="name" class="mui-input-row">
                  <label>账号</label>
                <input v-model="user.name" type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
            </el-form-item> 
            <el-form-item prop="pass" class="mui-input-row">
                <label>密码</label>
                <input v-model="user.pass" type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
            </el-form-item>
            <div class="mui-content-padded">
				<button id='login' type="button" @click="login" class="mui-btn mui-btn-block mui-btn-primary">登录</button>
				<div class="link-area"><router-link to="/res">注册账号</router-link>
				</div>
			</div>
        </el-form>
    </el-row>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
    export default {
        created:function () {
            this.$emit('public_footer', false);
            this.$emit('public_headern', false);
            this.$emit('public_header', false);
        },
        methods: {
            goback1:function(){
                this.$router.replace('/find')
                this.$emit('public_headern', true);
                this.$emit('public_footer', true);
            },
           login() {
    this.$refs.loginForm.validate((valid) => {
        if (valid) {
            this.$ajax.post('http://47.103.14.235:27499/users/validate1', this.user).then((res) => {
                if (res.data) {
                    this.$emit('public_headern', true);
                   this.$emit('public_footer', true);
                    this.$store.dispatch('login', res.data).then(() => {
                        // this.$notify({
                        //     type: 'success',
                        //     message: '欢迎你,' + res.data.nickName + '!',
                        //     duration: 1000,
                        // })
                        Toast({
                                 message: '欢迎你,' + res.data.nickName + '!',
                            });
                        this.$store.state.isLogin='100'
                        this.$router.go(-1)
                    })
                } else {
                    // this.$message({
                    //     type: 'error',
                    //     message: '用户名或密码错误',
                    //     showClose: true
                    // })
                    Toast('用户名或密码错误');
                }
            }).catch((err) => {
                this.$message({
                    type: 'error',
                    message: '网络错误，请重试',
                    showClose: true
                })
            })
        }
        else {
            return false
        }
    })
}
        },
        data () {
            return {
                user: {},
                rules: {
                    name: [
                        {required: true, message: '用户名不能为空', trigger: 'blur'}
                    ],
                    pass: [
                        {required: true, message: '密码不能为空', trigger: 'blur'}
                    ]
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
.mui-input-group {
				width: 100%;
            }
.area {
				margin: 20px auto 0px auto;
			}
			
			.mui-input-group {
				margin-top: 10px;
			}
			
			.mui-input-group:first-child {
				margin-top: 20px;
			}
			
			.mui-input-group label {
				width: 22%;
			}
			
			.mui-input-row label~input,
			.mui-input-row label~select,
			.mui-input-row label~textarea {
				width: 78%;
			}
			
			.mui-checkbox input[type=checkbox],
			.mui-radio input[type=radio] {
				top: 6px;
			}
			
			.mui-content-padded {
				margin-top: 25px;
			}
			
			.mui-btn {
                padding: 10px;
                margin:0 auto;
			}
			
			.link-area {
				display: block;
				margin-top: 25px;
				text-align: center;
			}
			
			.spliter {
				color: #bbb;
				padding: 0px 8px;
			}
			
			.oauth-area {
				position: absolute;
				bottom: 20px;
				left: 0px;
				text-align: center;
				width: 100%;
				padding: 0px;
				margin: 0px;
			}
			
			.oauth-area .oauth-btn {
				display: inline-block;
				width: 50px;
				height: 50px;
				background-size: 30px 30px;
				background-position: center center;
				background-repeat: no-repeat;
				margin: 0px 20px;
				/*-webkit-filter: grayscale(100%); */
				border: solid 1px #ddd;
				border-radius: 25px;
			}
			
			.oauth-area .oauth-btn:active {
				border: solid 1px #aaa;
			}
			
			.oauth-area .oauth-btn.disabled {
				background-color: #ddd;
            }
           .el-input{
               width: 75%
           }
    .mui-bar-tab .mui-tab-item.mui-active {
     color:salmon; 
}
.mui-bar{
	position:absolute;
}
.mui-bar-nav{
    position:absolute;
}
.mui-btn-primary{
        color: #fff;
    /* border: 1px solid #007aff; */
    background-color: salmon;
}
.mui-title {
    font-size: 19px;
    }

</style>