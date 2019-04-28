// 引入mockjs
const Mock = require("mockjs");

const Random = Mock.Random;
// 获取 mock.Random 对象.......................................................................................

const produceNewsData = function() {
  let articles = [];
  for (let i = 0; i < 50; i++) {
    let newArticleObject = {
      id:i,
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage("300x250", "mock的图片"), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + " " + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      paragraph:Random.cparagraph( 10, 30 ),//加入中文字段
      url:Random.url('http')
    };
    articles.push(newArticleObject);
  }

  return {
    articles: articles
  };
};
// 模拟数据列表数据页
Mock.mock("/news/index", "post", produceNewsData);
//以上是mock循环50个的新闻列表..........................................................................................

// 轮播图
var arr = [];
for (let i = 0; i < 5; i++) {
  let newArticleObject = {
    name: Random.cname(),
    content: Random.csentence(15, 20),
    id: i
  };
  arr.push(newArticleObject); //将模拟的数据放到数组中
}

let newsDate=Mock.mock('/news/index2', 'post' , {
  'articles|50':[{
      'id|+1': 1,
      'title': '@csentence(5, 30)', //  Random.csentence( min, max )
      'thumbnail_pic_s': '@dataImage("300x250", "mock的图片")', // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      'author_name': '@cname()', // @cname() 随机生成一个常见的中文姓名
      'date': '@datetime("yyyy-MM-dd A HH:mm:ss")', // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      'paragraph':'@cparagraph( 10, 30 )',//加入中文字段
   }]
});



//轮播图..............................................................................................................
// const fxlunbotu = function() {
// var lunbo = [];
// for (let i = 0; i < 5; i++) {
//   let newArticleObject = {
//     img: Random.dataImage("300x250", "轮播图"),
//     id: i
//   };
//   lunbo.push(newArticleObject); //将模拟的数据放到数组中
// }
// return {
//   lunbo:lunbo
// };
// }
// Mock.mock("/lunbotu/index", "post", fxlunbotu);
//轮播图.......................................................................................................................

// 数据的删除操作..............................................................................
let list = function(options) {
  // console.log(options.type);
  let rtype = options.type.toLowerCase(); //获取请求的类型并转换为小写
  switch (rtype) {
    case "get":
      break;
    case "post":
      let id = parseInt(JSON.parse(options.body).params.id); // 获取请求的id，将options.body转换为JSON对象
      arr = arr.filter(function(val) {
        return val.id != id; // 过滤掉前台传过来的id对应的相应数据，并重新返回
      });
      break;
    default:
      break;
  }
  return {
    data: arr
  };
};
Mock.mock("/list", /get|post/i, list);

// 数据的添加操作.........................................................................................................
let listAdd = function(options) {
  //  console.log("传过来的数据"+JSON.parse(options.body).params.obj);
  let rtype = options.type.toLowerCase(); //获取请求的类型
  switch (rtype) {
    case "get":
      break;
    case "post":
      let obj = JSON.parse(options.body).params.obj;
      // console.log("数据获取"+ obj);
      arr = arr.concat(obj); // 将前台返回来的数据，拼接到数组中。
      break;
    default:
      break;
  }
  return {
    data: arr
  };
};
Mock.mock("/listAdd", /get|post/i, listAdd);

// 数据的修改操作...............................................................................................................................................
let listUpdate = function(options) {
  let rtype = options.type.toLowerCase(); //获取请求的类型
  switch (rtype) {
    case "get":
      break;
    case "post":
      let obj = JSON.parse(options.body).params.obj;
      // console.log(JSON.parse(options.body).params);
       let id = parseInt(JSON.parse(options.body).params.obj.id);
      arr = arr.map(val => {
        // 将需要替换的数据替换掉
        return val.id === obj.id ? obj : val;
      });
      break;
    default:
      break;
  }
  return {
    data: arr
  };
};
Mock.mock("/listUpdate", /get|post/i, listUpdate);
// Mock.mock( url, post/get , 返回的数据)；

