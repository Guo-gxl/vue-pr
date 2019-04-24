<template>
 <div>
  <div> 
      <header id="header" class="mui-bar mui-bar-nav">
			<a @click="gobacktologin" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">注册账号</h1>
		</header>        
</div>
    <el-row type="flex" justify="center" class="mui-content">
        <el-form ref="loginForm" :model="user" :rules="rules" class="mui-input-group">
            <el-form-item class="mui-input-row">
                  <label>账号</label>
                <input v-model="user.name" type="text" required="required" class="mui-input-clear mui-input" placeholder="请输入账号">
            </el-form-item> 
            <el-form-item class="mui-input-row">
                <label>密码</label>
                <input v-model="user.pass" type="password" required="required" class="mui-input-clear mui-input" placeholder="请输入密码">
            </el-form-item>
            <el-form-item class="mui-input-row">
                <label>性别</label>
                <!-- <input v-model="user.sex" type="text" required="required" class="mui-input-clear mui-input" placeholder="请输入账号"> -->
        <select v-model="user.sex" class="mui-input-clear mui-input" placeholder="未选择">
            <option value="0" selected>请选择性别</option>
            <option value="男">男</option>
            <option value="女">女</option>
        </select>
            </el-form-item>
            <el-form-item class="mui-input-row">
                  <label>昵称</label>
                <input v-model="user.nickName" type="text" required="required" class="mui-input-clear mui-input" placeholder="请输入昵称">
            </el-form-item>
             <el-form-item class="mui-input-row">
                  <label>手机号</label>
                <input v-model="user.phone" type="text" required="required" class="mui-input-clear mui-input" placeholder="请输入手机号">
            </el-form-item>  
             <el-form-item class="mui-input-row">
                <label>邮箱</label>
                <input v-model="user.email" type="email" required="required" class="mui-input-clear mui-input" placeholder="请输入邮箱">
            </el-form-item>
            <div class="mui-content-padded">
				<button type="button" @click="register" class="mui-btn mui-btn-block mui-btn-primary">注册</button>
				<div class="link-area"><router-link to="/login">登录</router-link>
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
            this.$emit('public_header', false);
            this.$emit('public_footer', false);
            this.$emit('public_headern', false);
        },
        methods: {
            gobacktologin(){
             this.$router.replace('/login')
            },
    register() {
               
    this.$refs.loginForm.validate((valid) => {
        if (valid) {
            if(this.user.sex!='0'){
            this.$ajax.post('http://47.103.14.235:27499/users/validate', this.user).then((res) => {
                if (res.data) {
                    this.$store.dispatch('login', res.data).then(() => {
                        // this.$notify({
                        //     type: 'success',
                        //     message: '注册成功，请登录',
                        //     duration: 1000
                        // })
                        Toast('注册成功，请登录');
                        this.$router.replace('login')
                    })
                } else {
                    // this.$message({
                    //     type: 'error',
                    //     message: '请输入注册信息',
                    //     showClose: true
                    // })
                     Toast('请将信息输入完整再提交');
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
            Toast('请将信息输入完整再提交');
        }
        
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
                },
                 user:{sex:'0'}//默认
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
           .mui-title {
    font-size: 19px;
    }
    .mui-btn-primary{
    color: #fff;
        background-color: salmon;
}
</style>