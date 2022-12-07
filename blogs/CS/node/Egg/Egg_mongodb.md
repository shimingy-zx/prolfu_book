---
title: Egg_reference
date: 2022-12-5
categories:
 - Egg
tags:
 - Egg
 - Mongodb
sidebar: 'auto'
---


## Mongoose

Mongoose就是一套操作MongoDB数据库的接口，而Egg中有对应的插件egg-mongoose。

## 安装

```javascript
$ npm install egg-mongoose --save
```

## 配置

改变Egg项目中的配置文件{workplace}/config/plugin.js中来启用 egg-mongoose 插件:

```javascript
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};
```

## Egg连接mongoose

在Egg项目中的配置文件{workplace}/config/default.js配置项config添加属性

```javascript
config.mongoose = {
    url: process.env.EGG_MONGODB_URL || 'mongodb://127.0.0.1/website',
    options: {
      server: {
        poolSize: 40,
      },
    },
  };
```

## 定义数据表

在{workplace}/app/model/article.js定义数据表

```javascript
'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const PostSchema = new Schema({
    wid: {
      type: String,
    },
    release: {
      type: Boolean,
    },
    sort: {
      type: Number,
    },
    img: {
      type: String,
    },
    abstract: {
      type: String,
    },
    text: {
      type: String,
    },
    isSetTop: {
      type: Number,
    },
    title: {
      type: String,
    },
    keywords: {
      type: String,
    },
    describe: {
      type: String,
    },
    updateTime: {
      type: Date,
    },
    num: {
      type: Number,
    },
    uid: {
      type: String,
    },
    editors: {
      type: String,
    },
    disable: {
      type: Boolean,
    },
    columnId: {
      type: Schema.Types.ObjectId,
    },
  });
  return mongoose.model('Article', PostSchema);
};

```

备注：其中type表示字段类型，Mongoose 有以下几种类型Number（数字），String（字符串），Boolean（布尔值），ObjectId（对象ID），Array（数组），Object（对象），Date（日期）。。。

## 常用的Mongoose 方法

### 一，增加数据

```javascript
this.ctx.model.Article.create(post,callback);
```

备注：其中post为json数据结构，callback为操作后的回调函数

### 二，查询数据

#### 1，获取所有数据，返回是一个数组

```javascript
this.ctx.model.Article.find()
```

#### 2，获取一个数据，返回是一个对象

```javascript
this.ctx.model.Article.findOne()
```

#### 3，条件查询

```javascript
this.ctx.model.Article.find(conditions,callback);
```

condition有以下几种类型

#### 1），根据具体数据进行查询

```javascript
this.ctx.model.Article.find({_id：5c4a819fb87ba4002a47bc4f,title:"123"},callback);
```

-   返回_id为5c4a819fb87ba4002a47bc4f，title为123的结果

#### 2），条件查询

```javascript
"$lt"	小于
"$lte"	小于等于
"$gt"	大于
"$gte"	大于等于
"$ne"	不等于
```

```javascript
this.ctx.model.Article.find({“sort”:{ $get:18 , $lte:30 });
```

-   返回Article表中sort 大于等于18并小于等于30的结果

#### 3），或查询 OR

```javascript
"$in" 一个键对应多个值
"$nin" 同上取反, 一个键不对应指定值
"$or" 多个条件匹配, 可以嵌套 $in 使用
"$not"	同上取反, 查询与特定模式不匹配的文档
```

```javascript
this.ctx.model.Article.find({"title":{ $in:[20,21,22."haha"]} );
```

-   返回Article表中title等于20或21或21或"haha"的结果

```javascript
this.ctx.model.Article.find({"$or" :  [ {"age":18} , {"name":"wxw"} ] });
```

-   返回Article表中age等于18或 name等于"wxw"的结果

#### 4），类型查询（`"$exists"`条件判定）

```javascript
this.ctx.model.Article.find({name: {$exists: true}},function(error,docs){
  //返回Article表中所有存在name属性的结果
});
```

```javascript
this.ctx.model.Article.find({telephone: {$exists: false}},function(error,docs){
  //返回Article表中所有不存在telephone属性的结果
});
```

#### 5），匹配正则表达式查询

MongoDb 是使用 Prel兼容的正则表达式库来匹配正则表达式

```javascript
this.ctx.model.Article.find( {"name" : /joe/i } );
```

-   返回Article表中name为 joe 的结果, 并忽略大小写

#### 6），查询数组

```javascript
this.ctx.model.Article.find({"array":10} );
```

-   返回Article表中array(数组类型)键中有10的文档, array : [1,2,3,4,5,10] 会匹配到

```javascript
this.ctx.model.Article.find({"array[5]":10}  );
```

-   返回Article表中array(数组类型)键中下标5对应的值是10, array : [1,2,3,4,5,10] 会匹配到

```javascript
this.ctx.model.Article.find({"array":[5,10]});
```

-   返回Article表中查询匹配array数组中既有5又有10的结果

```javascript
this.ctx.model.Article.find({"array":{$size : 3} });
```

-   返回Article表中查询匹配array数组长度为3 的的结果

```javascript
this.ctx.model.Article.find({"array":{$slice : 10} });
```

-   返回Article表中查询匹配array数组的前10个元素

```javascript
this.ctx.model.Article.find({"array":{$slice :  [5,10]} });
```

-   返回Article表中查询匹配array数组的第5个到第10个元素

#### 7)，where

用它可以执行任意javacript语句作为查询的一部分,如果回调函数返回 true 文档就作为结果的一部分返回

```javascript
this.ctx.model.Article.find( {"$where" :  "this.x + this.y === 10" } );
this.ctx.model.Article.find( {"$where" : " function(){ return this.x + this.y ===10; } " } )
```

-   其中this为数据表中的数据，上述返回Article表中属性x+属性y=10的所有数据

### 三，删除数据

```javascript
this.ctx.model.Article.remove(conditions,callback);
```

备注：conditions为查询条件，与查询数据介绍的一样，eg：{ _id：5c4a819fb87ba4002a47bc4f }，找到_id为5c4a819fb87ba4002a47bc4f的数据，callback为操作成功后的回调函数

### 四，更新数据

```javascript
this.ctx.model.Article.update(conditions, update, callback)
```

-   参数1:查询条件, 参数2:更新对象,可以使用MondoDB的更新修改器

备注：conditions与查询数据中介绍的一样

#### 1，update为更新对象

```javascript
let post = {
    wid: '5c492c57acbe363fd4824446',
    column: [ '新闻' ],
    titleHead: '',
    img: '',
    isAbstract: 'false',
}
this.ctx.model.Article.update({ _id: '5c4a819fb87ba4002a47bc4f ' }, post)
```

-   查询Article表中特定_id，并对post中所包含的属性进行更新。

#### 2，update使用MondoDB的更新修改器，有以下几种使用场景

#### 1），`"$inc"`增减修改器,只对数字有效

```javascript
this.ctx.model.Article.update({"age":22}, {$inc:{"age":1} }  );
```

-   找到age=22的文档,修改文档的age值自增1

#### 2），`'$set'` 指定一个键的值,这个键不存在就创建它.可以是任何MondoDB支持的类型.

```javascript
this.ctx.model.Article.update({ _id：5c4a819fb87ba4002a47bc4f }, { $set: { isDelete: true } });
```

-   对5c4a819fb87ba4002a47bc4f 表进行软删除，找到特定_id数据，增加或者修改isDelete属性

#### 3），`"$unset"`同上取反,删除一个键

```javascript
this.ctx.model.Article.update({age:22}, {$unset:{age:18} } );
```

-   执行后age键不存在

#### 4），`'$push'`给一个键push一个数组成员,键不存在会创建,对数组有效

```javascript
this.ctx.model.Article.update({name:'wxw'}, {$push:{array:10} } );
```

-   返回Article表中name为wxw的数据，增加一个array键,类型为数组,有一个成员 10

#### 5），`'$addToSet'`向数组中添加一个元素,如果存在就不添加

```javascript
this.ctx.model.Article.update({name:'wxw'},{$addToSet:{array:10} } );
```

-   返回Article表中name为wxw的数据，array中有10所以不会添加

#### 6），`'$each'`遍历数组和 $push 修改器配合可以插入多个值

```javascript
this.ctx.model.Article.update({name:'wxw'}, {$push:{array:{$each: [1,2,3,4,5]}} } );
```

-   返回Article表中name为wxw的数据，执行后array : [10,1,2,3,4,5]

#### 7），`'$pop'` 向数组中尾部删除一个元素

```javascript
this.ctx.model.Article.update({name:'wxw'}, {$pop:{array:1} } );
```

-   返回Article表中name为wxw的数据，其中array : [10,1,2,3,4,5]，执行后 array : [10,1,2,3,4]
-   tip:将1改成-1可以删除数组首部元素

#### 8），`'$pull'` 向数组中删除指定元素

```javascript
this.ctx.model.Article.update({name:'wxw'}, {$pull:{array:10} });
```

-   返回Article表中name为wxw的数据，匹配到array中的10后将其删除。

### 五，排序（sort）

```javascript
this.ctx.model.Article.sort({ isSetTop: -1, sort: 1, editTime: -1 });
```

-   对Article表中的数据进行排序，先按“isSetTop”降序，再按“sort”升序，最后按“editTime”降序

备注：键对应数据中的键名，值代表排序方向，1 升序, -1降序。

### 六，限制返回结果的数量（limit）

```javascript
this.ctx.model.Article.limit(3);
```

-   对Article表中的数据进行返回，返回为前面3条数据

### 七，跳过前3个文档,返回其余的（skip）

```javascript
this.ctx.model.Article.skip(3);
```

-   对Article表中的数据进行返回，跳过前面3条数据，返回其余数据

附：综合使用最后三个方法进行分页查询

```javascript
this.ctx.model.Article.find({ _id：5c4a819fb87ba4002a47bc4f }).skip(pageSize * (pageNum - 1)).limit(parseInt(pageSize)).sort({ isSetTop: -1, sort: 1, editTime: -1 });
```

-   其中pageSize和pageNum为动态传递数据，返回Article表中特定_id在每页数据为pageSize条件下的第pageNum页中的数据，并按照“isSetTop”降序，再按“sort”升序，最后按“editTime”降序进行排序。