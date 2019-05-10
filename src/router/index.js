import Vue from 'vue'
import Router from 'vue-router'

import Find from '../components/tabbar/Find.vue'
import Message from '../components/tabbar/Message.vue'
import Donation from '../components/tabbar/Donation.vue'
import Myinfo from '../components/tabbar/Myinfo.vue'
import Newslist from '../components/news/Newslist.vue'
import Newsinfo from '../components/news/Newsinfo.vue'
import Hello from '../components/Hello.vue'
import NewsCell from '../components/NewsCell.vue'
import Test from '../components/test.vue'
import Main from '../components/Login/Main.vue'
import Login from '../components/Login/Login.vue'
import Resgister from '../components/Login/reg.vue'
import toLogin from '../components/tabbar/Donation/toLogin.vue'
import Donationindex from '../components/tabbar/Donation/index.vue'
import Self from '../components/tabbar/Donation/self.vue'
import Selfto from '../components/tabbar/Donation/selfto.vue'
import Showneed from '../components/showlists/showneed.vue'
import Showself from '../components/showlists/showself.vue'
import SelfCell from '../components/showlists/SelfCell.vue'
import Listtologin from '../components/showlists/listtologin.vue'
import Showlistindex from '../components/showlists/showlistsindex.vue'
import touxiang from '../components/Login/touxiang.vue'
import Selfinfo from '../components/tabbar/Myinfo/Selfinfo.vue'
import Cgname from '../components/tabbar/Myinfo/cgname.vue'
import Cgphone from '../components/tabbar/Myinfo/cgphone.vue'
import Cgemail from '../components/tabbar/Myinfo/cgemail.vue'
import Cgpass from '../components/Login/cgpass.vue'
import Check from '../components/showlists/Check.vue'
import feedback from '../components/showlists/feedback.vue'

Vue.use(Router)

var router = new Router({
  routes: [ //配置路由规则
        {
              path: '/',
              redirect: "/find",
              name:Find
        },
        {
              path: '/find',
              component: Find,
              
        },
        {
              path: '/message',
              component: Message,
              name:Message,
              children:[
                 {
                    path: 'main',
                    name: 'Main',
                    component: Main,
                    meta:{auth2:true},
                  },
                  {
                        path: 'listtologin',
                         name: 'listtologin',
                         component: Listtologin,
                  },
                  {
                        path: 'Check',
                         name: 'Check',
                         component:Check,
                        },
                  {
                        path: 'showlistindex',
                         name: 'showlistindex',
                         components: {
                               default:Showlistindex,
                               'showneed':Showneed,
                               'showself':Showself,
                               'Check':Check

                              
                              }
                              
                              
                        //  children:[
                        //       {
                        //             path: 'showneed',
                        //              name: 'showneed',
                        //              component: Showneed,
                        //            },
                        //            {
                        //                  path:'showself',
                        //                  name:'showself',
                        //                  component:Showself
                        //            }
                        //  ]
                  },
                  {
                        path: 'showneed',
                         name: 'showneed',
                         component: Showneed,
                       },
                       {
                             path:'showself',
                             name:'showself',
                             component:Showself
                       }
                  
              ]
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
                                components:{
                                      default:Donationindex,
                                      'self':Self,
                                        'selfto':Selfto
                              
                              }
                          },
                          {
                              path: 'self',
                               name: 'self',
                               component: Self,
                             },
                             {
                                   path:'selfto',
                                   name:'selfto',
                                   component:Selfto
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
                         {
                              path: 'selfinfo',
                               name: 'selfinfo',
                               component: Selfinfo,
                             },


              ],
              
        },
        {
              path: '/find/newslist',
              component: Newslist,
        },
        {
              path: '/newsinfo/:id',
              name:'Newsinfo',
              component: Newsinfo,
        },
        {
            path: '/message/showlistindex/check',
            component: Check
      },
      {
            path: '/message/showlistindex/feedback',
            component: feedback
      },
        {
              path: '/hello',
              component: Hello,
              name:'Hello'

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
        },
        {
            path: '/showneed',
             name: 'showneed',
             component: Showneed,
           },
           {
                 path:'/showself',
                 name:'showself',
                 component:Showself
           },
           {
            path:'/touxiang',
            name:'touxiang',
            component:touxiang
           },
           {
            path: '/selfinfo',
             name: 'selfinfo',
             component: Selfinfo,
           },
           {
            path: '/cgname',
             name: 'cgname',
             component: Cgname,
           },
           {
            path: '/cgphone',
             name: 'cgphone',
             component: Cgphone,
           },
           {
            path: '/cgemail',
             name: 'cgemail',
             component: Cgemail,
           },
           {
            path: '/cgpass',
             name: 'cgpass',
             component: Cgpass,
           },


  ],
  linkActiveClass: 'mui-active',
  mode:'hash'
})
//把路由对象暴露出去
export default router
