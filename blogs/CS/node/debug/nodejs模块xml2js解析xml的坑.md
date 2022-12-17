在一个项目中，用到nodejs模块xml2js解析xml，xml的数据如下：


<xml>
<MsgId>6197906553041859764</MsgId>
</xml>


用xml2js中的xml2js.parseString 方法解析，本来以为是一个json，但总是解析失败，把解析的结果log下后如下：


{ xml: { MsgId: [ '6197906553041859764' ] } }

本来xml中<MsgId>包的是一个字符串，结果解析出来的是数组。



后来查了xml2js的官网，发现了如下的参数：


explicitArray (default: true): Always put child nodes in an array if true; otherwise an array is created only if there is more than one.


原来xml2js默认会把子子节点的值变为一个数组，这个坑真大啊！！！为了查这个问题，花了半天的时间。



知道原因后，解决的方法也很简单，在调用xml2js.parseString时加入explicitArray的参数如下：


xml2js.parseString(buf,  {explicitArray : false}, function(err, json) {
 
});

修改后解析如下的结果如下：

{ xml: { MsgId: '6197906553041859764' } }


现在就变成一个字符串了。
————————————————
版权声明：本文为CSDN博主「newjueqi」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/newjueqi/article/details/48804201