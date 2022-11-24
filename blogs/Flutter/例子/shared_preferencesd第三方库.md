`
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

//import 'dart:async';
//import 'package:flutter/foundation.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
          appBar: AppBar(
            title: Text('数据测试'),
          ),
          body: PreferencesDemo()),
    );
  }
}

class PreferencesDemo extends StatefulWidget {
  PreferencesDemo({Key? key}) : super(key: key);
  _PreferencesDemoState createState() => _PreferencesDemoState();
}

class _PreferencesDemoState extends State<PreferencesDemo> {
  late String _key = '数据';
  late String _value;
  late SharedPreferences _prefs;

  _PreferencesDemoState() {
    //_key = '数据';
    _value = '测试数据';
    _getInstance();
  }

  void _getInstance() async {
    _prefs = await SharedPreferences.getInstance();
  }

  void _savePressedHandle() {
    //获取系统时间
    //_value = DateTime.now().toString();
    //_value = "测试数据";
    _prefs.setString(_key, _value);
    print(_prefs);

    //ScaffoldMessenger.of(context).hideCurrentSnackBar();
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('保存成功')));
  }

  void _getPressedHandle() {
    final name = _prefs.getString(_key);
    print(name);
    //ScaffoldMessenger.of(context).hideCurrentSnackBar();
    ScaffoldMessenger.of(context)
        .showSnackBar(SnackBar(content: Text('获取 $name')));
  }

  void _removePressedHandle() {
    final res = _prefs.remove(_key);
    print(res);
    //ScaffoldMessenger.of(context).hideCurrentSnackBar();
    ScaffoldMessenger.of(context)
        .showSnackBar(SnackBar(content: Text('删除 $_key')));
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            ElevatedButton(
              child: Text('保存数据'),
              onPressed: _savePressedHandle,
            )
          ],
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            ElevatedButton(
              child: Text('获取数据'),
              onPressed: _getPressedHandle,
            )
          ],
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            ElevatedButton(
              child: Text('删除数据'),
              onPressed: _removePressedHandle,
            )
          ],
        )
      ],
    );
  }
}

`

![[Pasted image 20210904183307.png]]