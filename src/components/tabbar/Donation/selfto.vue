<template>
 <div>    
     <el-row type="flex" justify="center">
        <el-form ref="loginForm" :model="self">
              <el-form-item>
                  <label>快递公司</label>
                <select v-model="self.Oddcom" class="mui-input-clear mui-input" placeholder="未选择">
            <option value="0" selected>请选择快递公司</option>
            <option value="百世汇通">百世汇通</option>
            <option value="EMS">EMS</option>
             <option value="申通快递">申通快递</option>
            <option value="顺丰速运">顺丰速运</option>
             <option value="天天快递">天天快递</option>
            <option value="邮政快递">邮政快递</option>
             <option value="圆通快递">圆通快递</option>
            <option value="韵达快递">韵达快递</option>
             <option value="中通快递">中通快递</option>
                 </select>
            </el-form-item> 
            <el-form-item>
                  <label>快递单号</label>
                <input v-model="self.OddNumbers" type="text" placeholder="请输入快递单号">
            </el-form-item> 
            <el-form-item>
                <label>联系电话</label>
                <input v-model="self.phone" type="text" placeholder="请输入联系电话">
            </el-form-item>
            <el-form-item>
                <input v-show="null" v-model="self.nickName" type="text">
            </el-form-item> 
            <el-form-item>
                <input v-show="null" v-model="self.name" type="text">
            </el-form-item>
            <div>
				<button type="button" @click="register" class="mui-btn mui-btn-block mui-btn-primary">提交</button>
			</div>
        </el-form>
    </el-row>
 </div>
</template>


<script>
import Distpicker from'./v-distpicker/src/Distpicker.vue'
import { Toast } from "mint-ui";
export default {
    data(){
        return{
            self:{},
            self:{Oddcom:'0'}//默认省市县
        }
    },
     computed: {
            user () {
                return this.$store.state.user
            }
        },
    name:"demo",
    components: { Distpicker },
        methods:{
             register() {
                 if(this.self.Oddcom!='0'){
                  this.$refs.loginForm.model.name=this.$store.state.user.name
            this.$refs.loginForm.model.nickName=this.$store.state.user.nickName
            this.$refs.loginForm.model.emaiol=this.$store.state.user.email
                 console.log(this.$refs.loginForm.model)
                 console.log(this.self.body+'5')
         this.$refs.loginForm.validate((valid) => {
        if (valid) {
            console.log(valid+'2')
           this.$ajax.post('http://localhost:3000/self/selfto', this.self).then((res) => {
                if (res.data) {
                  
                        Toast('提交成功，我们将很快处理您的订单');
                        this.$router.replace('/donation')
                } else {
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
}
else{
     Toast('请将信息输入完整再提交');
}
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
.mui-btn-block{
    margin-bottom: 0px;
}

</style>