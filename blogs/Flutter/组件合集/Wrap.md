、介绍
----

Wrap流式布局组件，一行或者一列放不下子组件时，会自动换行

二、Wrap源码
--------

```
Wrap({
    Key key,
    this.direction = Axis.horizontal,//排列方向
    this.alignment = WrapAlignment.start,//x轴对齐方式
    this.spacing = 0.0,//x轴子组件间距
    this.runAlignment = WrapAlignment.start,//y轴对齐方式
    this.runSpacing = 0.0,//y轴子元素间距
    this.crossAxisAlignment = WrapCrossAlignment.start,
    this.textDirection,//x轴文本方向
    this.verticalDirection = VerticalDirection.down,//y轴文本方向
    this.clipBehavior = Clip.hardEdge,
    List<Widget> children = const <Widget>[],//子组件集合
  }) : assert(clipBehavior != null), super(key: key, children: children);

```

三、Wrap属性介绍
----------

| 属性 | 说明 |
| --- | --- |
| direction | Axis.horizontal水平排列  
Axis.vertical垂直排列 |
| alignment | x轴对齐方式  
WrapAlignment.start 默认左对齐  
WrapAlignment.end 默认右对齐  
WrapAlignment.center居中对齐  
WrapAlignment.spaceBetween左右对齐 间距与控件 同时平分空间  
WrapAlignment.spaceAround左右对齐 间距平分 两边没间隙  
WrapAlignment.spaceEvenly/左右对齐 间距平分 两边有间隙 |
| spacing | x轴间距 |
| runAlignment | y轴对齐方式  
WrapAlignment.start 默认顶部对齐  
WrapAlignment.end 默认底部对齐  
WrapAlignment.center居中对齐  
WrapAlignment.spaceBetween左右对齐 间距与控件 同时平分空间  
WrapAlignment.spaceAround左右对齐 间距平分 两边没间隙  
WrapAlignment.spaceEvenly/左右对齐 间距平分 两边有间隙 |
| runSpacing | y轴间距 |
| textDirection | x轴文本方向  
TextDirection.ltr从左往右  
TextDirection.rtl从右往左 |
| verticalDirection | y轴文本方向  
VerticalDirection.down从上往下  
VerticalDirection.up从下往上 |
| children | 子组件集合 |

四、demo
------

```
class WrapStu extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.amberAccent,
      width: 500,
      height: 500,
      child: Wrap(
        direction: Axis.horizontal,
        textDirection: TextDirection.ltr,
        verticalDirection: VerticalDirection.down,
        alignment: WrapAlignment.spaceAround,
        spacing: 10,
        runSpacing: 10,
        runAlignment: WrapAlignment.center,
        crossAxisAlignment: WrapCrossAlignment.center,
        children: [
          MyText("111111"),
          MyText("222"),
          MyText("333333333"),
          MyText("4433333"),
          MyText("55555555555555"),
          MyText("6666")
        ],
      ),
    );
  }
}

class MyText extends StatelessWidget {
  String msg;

  MyText(this.msg);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.fromLTRB(8, 10, 8, 10),
      decoration: BoxDecoration(
          border: Border.all(color: Colors.red, width: 1),
          borderRadius: BorderRadius.all(Radius.circular(8))),
      child: Text(msg),
    );
  }
}

```



  

![](floder/Pasted%20image%2020211211142244.png)

本文转自 [https://www.jianshu.com/p/c8628d41b6b7](https://www.jianshu.com/p/c8628d41b6b7)，如有侵权，请联系删除。