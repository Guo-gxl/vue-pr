<template>
  <div class="find-container">
    <!-- <mt-swipe :auto="4000">
      <!--在组件中使用v-for循环一定要使用key -->
      <!-- <mt-swipe-item  v-for="item in lunbotuList">
        <!-- <img :src="item.img"> -->
        <!-- <img :src="item.img">
      </mt-swipe-item>
    </mt-swipe> -->

    <!-- 九宫格到改造 -->
    <!-- <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/hello">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">慈善新闻</div>
                            </router-link>
                            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/test">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">物品需求</div>
                            </router-link>
                            </li>
    </ul> -->   
      <div v-for="(item, key) in newsListShow">
      <need-cell
      :needDate="item"
      :key="key"
      ></need-cell>
      </div>
  </div>
</template>


<script>
import api from'./../../axios/api.js'
import { Toast } from "mint-ui";
import NeedCell from '../NeedCell.vue'
import { Indicator } from 'mint-ui';
export default {
  // props: {
  //   newsDate: Object
  // },
  name:"Find",
  created:function () {
            this.$emit('public_header', true);
            this.$emit('public_footer', true);
            this.setNewsApi();
            Indicator.close()
            Indicator.open('加载中')
        },
  data() {
    return {
      //  lunbotuList: [],
       newsListShow: [],
    };
  },
  components: {
    NeedCell
  },
  methods: {
    //  getLunbotu() {
    //    //获取轮播图数据
    //   this.$http.get("http://47.103.14.235:27499/news/val").then(result => {
    //     console.log(result);
    //        this.lunbotuList = result.body;
    //    });
    //  },
     setNewsApi: function() {
      // api.JH_news('/news/index')
      // .then(res => {
      //   console.log(res);
      //   this.newsListShow = res.articles;
      // });
       this.$http.get("http://47.103.14.235:27499/need/123").then(result => {
        console.log(result.body+'这是hello的result！！！！');
           this.newsListShow = result.body;
           console.log(JSON.stringify(this.newsListShow))
           console.log(this.newsListShow+'这是news')
           Indicator.close()
       });
    },
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
    width: 50%;   //调整中间的导航栏宽度
}
.mui-title {
    font-size: 19px;
    }
    .find-container{
      height: 800px;
        padding-top: 5px;
	padding-bottom: 50px;
	overflow-x:hidden;
    }
</style>