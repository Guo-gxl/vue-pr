var Mock= require('mockjs')
module.exports = function() {
    return {
        newsDate:Mock.mock({
               'articles|50':[{
                   'id|+1': 1,
                   'title': '@csentence(5, 30)', //  Random.csentence( min, max )
                  'thumbnail_pic_s': '@dataImage("300x250", "mock的图片")', // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
                   'author_name': '@cname()', // @cname() 随机生成一个常见的中文姓名
                   'date': '@datetime("yyyy-MM-dd A HH:mm:ss")', // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
                   'paragraph':'@cparagraph( 10, 30 )',//加入中文字段
                }]
             })
    }
}