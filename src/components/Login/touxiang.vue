<template>
<div>
<header id="header" class="mui-bar mui-bar-nav">
			<a @click="goback1" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">更改头像</h1>
		</header>  
  <div class="mui-content">
 <img class="img" src="./../../img/tou.png" @click="myimg" v-show="defa">
 <img class="img" :src="avatar" @click="myimg" v-show="ava">
    <input type="file" ref="filElem" v-show="null" @change="upimg" />
    
     <div class="mui-content-padded">
         <button class="mui-btn mui-btn-block mui-btn-primary" @click="btn" >上传</button>
	</div>
  </div>
    </div>  
</template>

<script>
import { Indicator } from 'mint-ui';

import { Toast } from "mint-ui";
export default {
  data() {
    return {
        avatar:'',
        ava:false,
	    defa:true
    };
  },
  created() {
       this.avatar=this.$store.state.user.avatar
        this.$emit('public_footer', false);
            this.$emit('public_headern', false);
            this.$emit('public_header', false);
            	console.log(this.$store.state.user.avatar+"这是user！！！")
			if(typeof(this.$store.state.user.avatar)=='undefined'){
				this.ava=false,
				this.defa=true
			}
			else{
				this.ava=true,
				this.defa=false
            }
            console.log(this.ava),
            console.log(this.defa)
			console.log(this.$store.state.user.avatar+"这是更改后！！！user！！！")
		
  },
  computed: {
            user () {
                return this.$store.state.user
            }
        },
  methods: {
      myimg(){
         this.$refs.filElem.dispatchEvent(new MouseEvent('click'))
      },
       goback1:function(){
                this.$router.replace('/selfinfo')
                this.$emit('public_headern', true);
                this.$emit('public_footer', true);
            },
 upimg(e) {
       const _self = this;
       var files = e.target.files[0];
       if (!e || !window.FileReader) return; // 看支持不支持FileReader
       let reader = new FileReader();
       let size=files.size
        if(size>3145728){
                alert('请选择3M以内的图片！');
                return false;
            }
       reader.readAsDataURL(files); // 这里是最关键的一步，转换就在这里
       reader.onloadend = function() {
          //  这个时候_self.avatar中存的就是编码过后的图片了
         _self.avatar = this.result;

       };
       this.ava=true,
		this.defa=false
     },
  
     btn(){
       Indicator.open('加载中')
         this.$http.post("http://47.103.14.235:27499/users/avatar",
         {
                 name:this.$store.state.user.name,
                 avatar:this.avatar
         }).then(result => {
        console.log(result.body+'!!!!!!');
        Indicator.close()
         Toast({
                                 message: '上传成功',
                            });
        this.$router.replace('/selfinfo')     
           
       });
       this.$store.state.user.avatar=this.avatar
     }
  
}
}



</script>

<style lang="scss" scoped>
.img{
    width: 94%;
  margin-left:3%;
}
.mui-btn-primary{
    color: #fff;
        background-color: salmon;
}
.mui-btn-block{
    margin-bottom: 0px;
    padding: 5px
}
</style>
