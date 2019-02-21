<template>
<transition>
 <div class="img1">
      <div> 
      <header id="header" class="mui-bar mui-bar-nav">
			<a @click="goback1" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">快递员上门</h1>
		</header>  
        </div> 
   <br>     
               <h1>请填写取件地址</h1>
   <br>
   <br>
     <el-row type="flex" justify="center">
        <el-form ref="loginForm" :model="self">
        <el-form-item>
            <v-distpicker @selected="sel">
            </v-distpicker>
            </el-form-item>
            <el-form-item>
                <input v-show="null" v-model="self.citydata" type="text">
            </el-form-item> 
            <el-form-item>
                  <label>详细地址</label>
                <input v-model="self.tolocal" type="text" class="localtext" placeholder="请输入详细地址信息">
            </el-form-item> 
            <el-form-item>
                <label>联系电话</label>
                <input v-model="self.phone" type="text" placeholder="请输入联系电话">
            </el-form-item>
            <el-form-item>
                <input v-show="null" v-model="self.nickName" type="textarea">
            </el-form-item> 
            <el-form-item>
                <input v-show="null" v-model="self.name" type="text">
            </el-form-item>
            <div>
				<button type="button" @click="register" class="mui-btn mui-btn-block mui-btn-primary">提交</button>
			</div>
        </el-form>
    </el-row>

   
    <br>
   <br> <br>
   <br> <br>
   <br> <br>
   <br><br>
   <br><br>
   <br><br>
 </div>
</transition>
</template>


<script>
import { Toast } from "mint-ui";
import Distpicker from'./v-distpicker/src/Distpicker.vue'
export default {
    data(){
        return{
            self:{},
        }
    },
     computed: {
            user () {
                return this.$store.state.user
            }
        },
    name:"demo",
    components: { Distpicker },
        created:function () {
            this.$emit('public_header', false);
            this.$emit('public_headern', false);
			this.$emit('public_footer', false);
			
        },
        methods:{
         goback1:function(){
                this.$router.replace('/donation/index')
                this.$emit('public_headern', true);
                this.$emit('public_footer', true);
            },
            
             sel: function(data) {
           this.citydata = data.province.value + data.city.value + data.area.value;
           
            console.log(this.citydata +'1');
            this.$refs.loginForm.model.citydata=this.citydata
            this.$refs.loginForm.model.name=this.$store.state.user.name
            this.$refs.loginForm.model.nickName=this.$store.state.user.nickName

             },

             register() {
                 console.log(this.$refs.loginForm.model)
                 console.log(this.self.body+'5')
         this.$refs.loginForm.validate((valid) => {
        if (valid) {
            console.log(valid+'2')
           this.$ajax.post('http://localhost:3000/self/vali', this.self).then((res) => {
                if (res.data) {
                    console.log(this.self+'5')
                    console.log(res.data+'3')
                    this.$store.dispatch('login', res.data).then(() => {
                        // this.$notify({
                        //     type: 'success',
                        //     message: '登记成功，我们将很快处理您的订单',
                        //     duration: 3000
                        // })
                        Toast('提交成功，我们将很快处理您的订单');
                        this.$router.replace('/donation')
                    })
                } else {
                    // this.$Toast({
                    //      type: 'error',
                    //     message: '请将信息输入完整再提交',
                    //      showClose: true

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
            return false
        }
    })
//             onChangeProvince(data) {
//       this.user.xtrysf = data.value
//     },
// onChangeCity(data) {
//       this.user.xtrycs = data.value
//             },
    //   onChangeProvince(a){
    //     console.log(a)        
    //   },
    //   onChangeCity(a){
    //     console.log(a)        
    //   },
    //   onChangeArea(a){
    //     console.log(a)  

      }      
    }
}

</script>


<style lang='scss' scoped>
.mui-col-xs-5{
	width: 50%;
	float: right;
}
.mui-btn-block{
padding: 20px 0;
    margin-bottom: 0px;
}
.localtext{
    height: 150px;
}
.distpicker-address-wrapper select{
    width: 80%;
}
.el-form{
    width: 80%;
}
 .img1{
    width: auto;
    height: auto;
    background: url('../../../img/donation.jpg') center;
    background-size:auto;
  }
  .v-enter{
	opacity: 0;
	}
.v-leave-to{
	opacity: 1;
}
.v-enter-active,{
	transition: all 1s ease
}
.v-leave-active{
	transition: all 1s ease
}
</style>