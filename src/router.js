import VueRouter from 'vue-router'




//导入对应组件

import Find from './components/tabbar/Find.vue'
import Message from './components/tabbar/Message.vue'
import Donation from './components/tabbar/Donation.vue'
import Myinfo from './components/tabbar/Myinfo.vue'
import Newslist from './components/news/Newslist.vue'
import Newsinfo from './components/news/Newsinfo.vue'
import Hello from './components/Hello.vue'
// import NewsCell from './components/NewsCell.vue'
import Test from './components/test.vue'
import Main from './components/Login/Main.vue'
import Login from './components/Login/Login.vue'
import Resgister from './components/Login/reg.vue'
import toLogin from './components/tabbar/Donation/toLogin.vue'
import Donationindex from './components/tabbar/Donation/index.vue'
import Self from './components/tabbar/Donation/self.vue'
import Selfto from './components/tabbar/Donation/selfto.vue'




//创建路由对象
var router = new VueRouter({
      routes: [ //配置路由规则
            {
                  path: '/',
                  redirect: "/find",
                  name:Find
            },
            {
                  path: '/find',
                  component: Find
            },
            {
                  path: '/message',
                  component: Message,
                  name:Message
            },
            {
                  path: '/donation',
                  component: Donation,
                  name:Donation,
                   children:[
                         {
                              path: 'main',
                               name: 'Main',
                               component: Main,
                                meta:{auth1:true},
                             },
                             {
                               path: 'tologin',
                                name: 'tologin',
                                component: toLogin,
                              },
                              {
                                    path:'index',
                                    name:'Donationindex',
                                    component:Donationindex
                              }

                  ],
            },
            {
                  path: '/myinfo',
                  component: Myinfo,
                  name:Myinfo,
                  children:[
                         {
                              path: 'main',
                               name: 'Main',
                               component: Main,
                               meta:{auth:true},
                             },

                  ],
                  
            },
            {
                  path: '/find/newslist',
                  component: Newslist
            },
            {
                  path: '/hello/newsinfo/:id',
                  component: Newsinfo
            },
            {
                  path: '/hello',
                  component: Hello,
                  // meta: {
                  //       keepAlive: true // 需要被缓存
                  //   }
            },
            {
                  path: '/test',
                  component: Test
            },
            {
                      path:'/res',
                      component:Resgister
            },
            //     {
            //       path: '/main',
            //       name: 'Main',
            //       component: Main,
            //     },
            //     {
            //       path: '/login',
            //       name: 'Login',
            //       component: Login,
            //     },
            {
                  path: '/login',
                  name: 'Login',
                  component: Login,
            },
            {
                  path: '/self',
                  name: 'Self',
                  component: Self,
            } ,
             {
                  path: '/selfto',
                  name: 'Selfto',
                  component: Selfto,
            }


      ],
      linkActiveClass: 'mui-active'
})
//把路由对象暴露出去
export default router