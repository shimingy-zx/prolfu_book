# flutter |try using ‘as prefix‘ for one of the import directives, or hiding the name from all but one
>报错：try using ‘as prefix’ for one of the import directives, or hiding
the name from all but one

翻译：尝试对其中一个导入指令使用“as prefix”，或对除一个导入之外的所有导入隐藏名称

出现原因：因为可能你同时引入了两个包，而引用某些东西的时候应该是不知道引用哪个包里面的了。

我出现这个的场景就是：我引入了两个地图包，应该是两个包都有重复的的一些属性或者方法，但是我又不得不使用两个包。如下：

import 'package:amap_flutter_map/amap_flutter_map.dart';
import 'package:amap_map_fluttify/amap_map_fluttify.dart';
1
2
于是我改成下面这样就可以了，然后使用到后面这个包的方法时，我使用amap_map_fluttify.xxx(方法名)

import 'package:amap_flutter_map/amap_flutter_map.dart';
import 'package:amap_map_fluttify/amap_map_fluttify.dart' as amap_map_fluttify;
————————————————
版权声明：本文为CSDN博主「FixUpSth」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_43120901/article/details/120691697