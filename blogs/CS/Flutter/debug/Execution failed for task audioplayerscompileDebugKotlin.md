## 报错内容

`
The class is loaded from C:/Users/ysm25/.gradle/caches/transforms-2/files-2.1/24fa3aa8d2270e5eb067bbe36e9b7563/jetified-kotlin-stdlib-1.5.10.jar!/kotlin/Unit.class e: D:\rjaz\FutterSDK\flutter\.pub-cache\hosted\pub.flutter-io.cn\audioplayers-0.20.1\android\src\main\kotlin\xyz\luan\audioplayers\WrappedSoundPool.kt: (242, 26): Class 'kotlin.Unit' was compiled with an incompatible version of Kotlin. The binary version of its metadata is 1.5.1, expected version is 1.1.15. The class is loaded from C:/Users/ysm25/.gradle/caches/transforms-2/files-2.1/24fa3aa8d2270e5eb067bbe36e9b7563/jetified-kotlin-stdlib-1.5.10.jar!/kotlin/Unit.class e: D:\rjaz\FutterSDK\flutter\.pub-cache\hosted\pub.flutter-io.cn\audioplayers-0.20.1\android\src\main\kotlin\xyz\luan\audioplayers\WrappedSoundPool.kt: (245, 52): Unresolved reference: takeIf

e: D:\rjaz\FutterSDK\flutter\.pub-cache\hosted\pub.flutter-io.cn\audioplayers-0.20.1\android\src\main\kotlin\xyz\luan\audioplayers\WrappedSoundPool.kt: (245, 61): Unresolved reference: it e: D:\rjaz\FutterSDK\flutter\.pub-cache\hosted\pub.flutter-io.cn\audioplayers-0.20.1\android\src\main\kotlin\xyz\luan\audioplayers\WrappedSoundPool.kt: (246, 30): Class 'kotlin.Unit' was compiled with an incompatible version of Kotlin. The binary version of its metadata is 1.5.1, expected version is 1.1.15. The class is loaded from C:/Users/ysm25/.gradle/caches/transforms-2/files-2.1/24fa3aa8d2270e5eb067bbe36e9b7563/jetified-kotlin-stdlib-1.5.10.jar!/kotlin/Unit.class

FAILURE: Build failed with an exception.

`

`*What went wrong: Execution failed for task ':audioplayers:compileDebugKotlin'. > Compilation error. See log for more details* Try:

Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

*Get more help at <https://help.gradle.org> BUILD FAILED in 44s

[!] Your project requires a newer version of the Kotlin Gradle plugin.

Find the latest version on <https://kotlinlang.org/docs/gradle.html#plugin-and-versions>, then update D:\Unified_backup\git\LuLab_frontend\android\build.gradle:

ext.kotlin_version = '<latest-version>'

Exception: Gradle task assembleDebug failed with exit code 1

Exited (sigterm)

`

## 解决办法参考

[Flutter Execution failed for task ':audioplayers:compileDebugKotlin' - Stack Overflow](https://stackoverflow.com/questions/65558023/flutter-execution-failed-for-task-audioplayerscompiledebugkotlin)

## 我的解决办法

文件目录：LuLab_frontend\android\build.gradle
更改版本为ext.kotlin_version = '1.5.0'
