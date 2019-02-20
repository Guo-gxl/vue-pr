<template>
 <div class="img1">
   <br>
   <br>
          <router-link to="/self"><button type="button" class="mui-btn mui-btn-block">快递员上门</button></router-link>
   <br>
   <br>
           <router-link to="/selfto"><button type="button" class="mui-btn mui-btn-block">已自行寄出</button></router-link>
    <br>
   <br> <br>
   <br> <br>
   <br> <br>
   <br> <br>
   <br> <br>
   <br><br>
   <br><br>
   <br><br>
   <br>
 </div>
</template>


<script>
export default {
        created:function () {
            this.$emit('public_header', true);
            this.$emit('public_headern', false);
			this.$emit('public_footer', true);
			
    },
    updated:function () {
            this.$emit('public_header', true);
            this.$emit('public_headern', false);
			this.$emit('public_footer', true);
			
    },
    
		
			
			
		
		
        
}

</script>


<style lang='scss' scope>
.mui-col-xs-5{
	width: 50%;
	float: right;
}
.mui-btn-block{
padding: 50px 0;
}
 .img1{
    width: auto;
    height: auto;
    background: url('../../../img/donation.jpg') center;
    background-size:auto;
  }
</style>