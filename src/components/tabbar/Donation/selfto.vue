<template>
 <div class="app-container">    
     <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p style="color: #333">物品需求：{{this.need}}</p>
                        <p style="color: #333">联系人：{{this.names}}</p>
                        <p style="color: #333">联系电话：{{this.phones}}</p>
                        <p style="color: #333">邮寄地址：{{this.locals}}</p>
					</div>
				</div>
        </div>
        <div class="mui-card">
     <el-row type="flex" justify="center">
        <el-form ref="loginForm" :model="self">
              <el-form-item>
                  <label>快递公司</label>
        <select v-model="self.Oddcom" style="border: 1px solid rgba(0, 0, 0, 0.2) !important" placeholder="未选择">
            <option value="0" selected>请选择快递公司</option>
            <option value="HTKY">百世汇通</option>
            <option value="EMS">EMS</option>
             <option value="STO">申通快递</option>
            <option value="SFEXPRESS">顺丰速运</option>
             <option value="TTKDEX">天天快递</option>
             <option value="YTO">圆通快递</option>
            <option value="YUNDA">韵达快递</option>
             <option value="ZTO">中通快递</option>
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
             <el-form-item>
                <input v-show="null" v-model="self.doname" type="text">
            </el-form-item> 
            <el-form-item>
                <input v-show="null" v-model="self.dophone" type="text">
            </el-form-item>
            <el-form-item>
                <input v-show="null" v-model="self.dolocal" type="text">
            </el-form-item>
             <el-form-item>
                <input v-show="null" v-model="self.doneed" type="text">
            </el-form-item>
            <div class="mui-card-footer">
				<button type="button" @click="register" class="mui-btn mui-btn-block mui-btn-primary">提交</button>
			</div>
        </el-form>
    </el-row>
    </div>
 </div>
</template>


<script>
import Distpicker from'./v-distpicker/src/Distpicker.vue'
import { Toast } from "mint-ui";
export default {
    created(){
        console.log(localStorage.getItem('local')+'222')
        console.log(localStorage.getItem('name')+'111')
        console.log(localStorage.getItem('phone')+'333')
        
    },

    data(){
        return{
            self:{},
            self:{Oddcom:'0'},//默认省市县
            locals:localStorage.getItem('local'),
            names:localStorage.getItem('name'),
            phones:localStorage.getItem('phone'),
            need:localStorage.getItem('need')
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
                     console.log(this.names+'11111')
                  this.$refs.loginForm.model.name=this.$store.state.user.name
            this.$refs.loginForm.model.nickName=this.$store.state.user.nickName
            this.$refs.loginForm.model.emaiol=this.$store.state.user.email
            this.$refs.loginForm.model.doname=this.names
            this.$refs.loginForm.model.dophone=this.phones
            this.$refs.loginForm.model.dolocal=this.locals
            this.$refs.loginForm.model.doneed=this.need
                 console.log(this.$refs.loginForm.model)
                 console.log(this.self.body+'5')
         this.$refs.loginForm.validate((valid) => {
        if (valid) {
            console.log(valid+'2')
           this.$ajax.post('http://47.103.14.235:27499/self/selfto', this.self).then((res) => {
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
    padding: 5px
}
.el-form-item {
     margin-bottom: 3px; 
}
.el-form{
    width: 96%;
}
.mui-btn-primary{
    color: #fff;
        background-color: salmon;
}

</style>