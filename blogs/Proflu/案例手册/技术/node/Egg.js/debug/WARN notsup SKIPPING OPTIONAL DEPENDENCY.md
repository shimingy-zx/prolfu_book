报错信息

![](image/WARN notsup SKIPPING OPTIONAL DEPENDENCY/1632558201198.png)

解决办法

解决办法1：

这是warning错误，是因为mac下需要 fsevents，在windows或linux环境下，请忽略这个错误。

解决办法2

```
npm install --no-optional --verbose
```
