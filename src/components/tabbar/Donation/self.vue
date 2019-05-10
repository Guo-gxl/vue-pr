<template>
 <div>
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
            <label>所在地区</label>
            <v-distpicker @selected="sel">
            </v-distpicker>
            </el-form-item>
            <el-form-item>
                <input v-show="null" v-model="self.citydata" type="text">
            </el-form-item> 
            <el-form-item>
                  <label>详细地址</label>
                  <textarea v-model="self.tolocal" placeholder="请输入详细地址信息"></textarea>
                <!-- <input v-model="self.tolocal" type="text" class="localtext" placeholder="请输入详细地址信息"> -->
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
import { Toast } from "mint-ui";
import Distpicker from'./v-distpicker/src/Distpicker.vue'
export default {
    data(){
        return{
            self:{},
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
            
             sel: function(data) {
           this.citydata = data.province.value + data.city.value + data.area.value;
           
            console.log(this.citydata +'1');
            this.$refs.loginForm.model.citydata=this.citydata
            this.$refs.loginForm.model.name=this.$store.state.user.name
            this.$refs.loginForm.model.nickName=this.$store.state.user.nickName
             this.$refs.loginForm.model.doname=this.names
            this.$refs.loginForm.model.dophone=this.phones
            this.$refs.loginForm.model.dolocal=this.locals
            this.$refs.loginForm.model.doneed=this.need


             },

             register() {
                 console.log(this.$refs.loginForm.model)
                 console.log(this.self.body+'5')
         this.$refs.loginForm.validate((valid) => {
        if (valid) {
            console.log(valid+'2')
           this.$ajax.post('http://47.103.14.235:27499/self/vali', this.self).then((res) => {
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
    margin-bottom: 0px;
    padding: 5px
}
.localtext{
    height: 150px;
}
.distpicker-address-wrapper select{
    width: 80%;
}
.el-form{
    width: 96%;
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
.el-form-item {
     margin-bottom: 3px; 
}
.mui-btn-primary{
    color: #fff;
        background-color: salmon;
}
select {
        font-size: 14px;
    height: auto;
    margin-top: 1px;
    /* border: 0 !important; */
    background-color: #fff;
}

</style>