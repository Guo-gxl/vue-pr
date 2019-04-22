<template>
<div>
	<div> 
      <header  id="header" class="mui-bar mui-bar-nav">
			<a @click="goback1" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<button class="mui-pull-right butt" @click="changenick">更改</button>
            <h1 class="mui-title">设置昵称</h1>
	</header>      
    </div>
    <div  class="self-container">
            旧密码<input type="password" v-model="opass">
			新密码<input type="password" v-model="npass">
            再次输入<input type="password" v-model="tnpass">
    </div>
</div>
</template>
<script>
import { Toast } from "mint-ui";
    export default {
		data(){
			return{
               opass:"",
               npass:"",
               tnpass:""
			}
		},
        methods: {
             goback1:function(){
                this.$router.replace('/selfinfo')
                this.$emit('public_headern', true);
                this.$emit('public_footer', true);
            },
            changenick()
            {    
                if(this.opass==this.$store.state.user.pass){

                

                if(this.npass==this.tnpass){
                console.log(this.nickname+"这是nickname")
                console.log(this.$store.state.user.name+"这是name！！！！")
                this.$http.post('http://47.103.14.235:27499/users/cgpass', {
                     name:this.$store.state.user.name,
                     opass:this.opass,
                     npass:this.npass
                }).then(result => {
                    if(result=='null'){ 
                        Toast({
                                 message: '更改失败',
                            });}
                            else{
                    console.log(JSON.stringify(result.data)+'这是返回！！！！')
                     Toast({
                                 message: '更改成功!',
                            });
                    this.$store.dispatch('login', result.data)
                        this.$router.replace('selfinfo')
                        }
                    })
                            }
                            else{
                                Toast({
                                 message: '请保证两次输入的密码一致！',
                                    });
                            }
                    }else{
                        Toast({
                                 message: '请输入正确的密码',
                                    });
                    }
        }
        },
        computed: {
            user () {
                return this.$store.state.user
            }
		},
		created(){
        
    }}

</script>
<style lang="scss" scoped>
.self-container{
    padding-top: 20px;
}
.butt{
    margin-top: 5px;
}
</style>
