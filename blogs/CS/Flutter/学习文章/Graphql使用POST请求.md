近期项目正在用Apifox做接口测试，可是不幸的问题在于项目当中用的是Graphql做数据请求，Graphql有专门的调试工具。
![](Pasted%20image%2020220608013017.png)

而Apifox又没有特定的请求方式去支持Graphql数据请求，那前后端应该如何更统一地管理项目的接口呢？

![](Pasted%20image%2020220608013231.png)

遇到问题找官方说明文档，好在Grabphql支持Get、Post请求。
参考该链接：[通过 HTTP 提供服务 | GraphQL](https://graphql.cn/learn/serving-over-http/)

当然除了官方文档，搜索引擎的搜刮也是少不了的：

[(35条消息) 使用HTTP GET POST方式实现GraphQL查询_冲冲冲!!!的博客-CSDN博客_graphql http](https://blog.csdn.net/aHardDreamer/article/details/99301873)

[Making GraphQL Requests using HTTP Methods - Apollo GraphQL Blog](https://www.apollographql.com/blog/graphql/basics/making-graphql-requests-using-http-methods/)

[(35条消息) GraphQL 实践 - 用 GET 和 POST 实现 GraphQL 查询_kikajack的博客-CSDN博客](https://blog.csdn.net/kikajack/article/details/79111738?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2-79111738-blog-86756419.nonecase&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2-79111738-blog-86756419.nonecase&utm_relevant_index=2)

有了官网文档和参考资料，剩下的就是实现了。


咱们还是用上面图片的接口来做测试


再回顾一下在graphql中是如何请求数据的，对此写法不理解的朋友自行到官方文档学习。
```
//query请求方法
query ($skip: Int!, $limit: Int!) {
  latestInformation(option: {skip: $skip, limit: $limit}) {
    title
    img
    author
    href
    releaseDate
  }
}

//请求参数
 {"skip": 1,"limit": 1}

```
如图
![](Pasted%20image%2020220608020825.png)


那么在Apifox中如何请求呢？

标准的 GraphQL POST 请求应当在 HTTP header 中声明 Content-Type: application/json。
```
{
"query": "query Information($skip: Int!, $limit: Int!) {latestInformation(option: {skip: $skip, limit: $limit}) {title,img,author,releaseDate}}",
  "operationName": "",
  "variables": {"skip": 1,"limit": 10}
}
```
该请求等效于上方的graphql请求

还是一样，直接上图
![](Pasted%20image%2020220608021241.png)
![](Pasted%20image%2020220608021222.png)

数据可以正常响应，成功！

![](Pasted%20image%2020220608021444.png)