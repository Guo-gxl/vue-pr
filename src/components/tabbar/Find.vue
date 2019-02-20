<template>
  <div>
    <h3>Find</h3>
    <mt-swipe :auto="4000">
      <!--在组件中使用v-for循环一定要使用key -->
      <mt-swipe-item  v-for="item in lunbotuList">
        <!-- <img :src="item.img"> -->
        <img :src="item.img">
      </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格到改造 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/hello">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">慈善新闻</div>
                            </router-link>
                            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/test">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">明星公益</div>
                            </router-link>
                            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/main">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">物品需求</div>
                            </router-link>
                            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/find/newslist">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">爱心榜单</div>
                            </router-link>
                            </li>
    </ul>
  </div>
</template>


<script>
import api from'C:/Users/41260/Desktop/Vue-0000/src/axios/api.js'
import { Toast } from "mint-ui";
export default {
  // props: {
  //   newsDate: Object
  // },
  created:function () {
            this.$emit('public_header', true);
            this.$emit('public_footer', true);
        },
  data() {
    return {
       lunbotuList: [],
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
     getLunbotu() {
       //获取轮播图数据
      this.$http.get("http://localhost:3000/news/val").then(result => {
        console.log(result);
           this.lunbotuList = result.body;
       });
     }
    //  setNewsApi: function() {
    //    api.JH_news('/lunbotu/index', 'type=top&key=123456')
    //   .then(res => {
    //     console.log(res);
    //     this.lunbotuList = res.lunbo;
    //   });
    // },
  }
};
</script>


<style lang="scss" scoped>
.mint-swipe {
  //轮播图的高度
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: aqua;
    }
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(1) {
      background-color: green;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
  
}
.mui-col-xs-4 {
    width: 25%;   //调整中间的导航栏宽度
}
</style>