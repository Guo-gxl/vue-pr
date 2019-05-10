<template>
  
      <div class="Hello-container">
    
    <div v-for="(item, key) in Showself">
      <Self-cell
      :newsDate="item"
      :key="key"
      v-on:success="success()"
      ></Self-cell>
    </div>
  </div>
  

</template>


<script>
import api from './../../axios/api.js'
import SelfCell from './SelfCell.vue'
 
export default{
  name: 'index',
  data () {
    return {
      Showself: [],
    }
  },
  components: {
    SelfCell
  },
  computed: {
            user () {
                return this.$store.state.user
            }
        },
created() {
  this.setSelfApi();
            this.$emit('public_header', true);
            this.$emit('public_footer', true);
        },
methods:{
  success(){
        this.setSelfApi()
     },
      setSelfApi: function() {
      // api.JH_news('/news/index')
      // .then(res => {
      //   console.log(res);
      //   this.newsListShow = res.articles;
      // });
      console.log(this.$store.state.user.name+'这是帐号！！！！')
       this.$http.post("http://47.103.14.235:27499/self/showself",{
         
                  name:this.$store.state.user.name
         
       }).then(result => {
        console.log(result.body+'这是hello的result！！！！');
           this.Showself = result.body;
           console.log(this.Showself+'这是news')
       });
    },
        }
        }

</script>


<style scoped>
.Hello-container{
min-height: 580px;
}



</style>