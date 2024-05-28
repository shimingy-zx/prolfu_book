
## 目标

让AI能回答实验室各个场景下产生的问题

## 应用场景

- 应用场景
	- 实验室客服
		- 企业微信（群）对接
			- 场景说明
			- 技术方案
				- worktool开源方案
					- 方案说明
						- worktool使用说明
							- Worktool用于控制企业微信收发信息
							- 云手机平台选择VMOS，用于在云端稳定运行Worktool的apk软件。
						- AI接口
							- 目前用COZE国内版，根据技术发展进行迭代。
						- 后端说明
							- 部署方案
								- 腾讯云函数
									- 为什么选择腾讯云函数？
										- 方便，免费，轻便。
								- 服务器部署
								- docker部署
									- 
								- Vercel部署
									- [Vercel CLI Overview](https://vercel.com/docs/cli)
							- 框架选择
								- 为什么选择express框架？
									- 轻量
									- 也可以选择python的falsk，取决于各位开发者对框架的熟悉程度
							- 后端作用
								- 用于接收worktool信息接口回调，接受到信息回调后带着问题去请求实验室相关的额AI智能体，最后调用worktool的信息发送接口把AI回复的信息发送至企业微信。
					- 参考资料
						- 后端github项目地址
							- [shimingy-zx/wecom_worktool_backend (github.com)](https://github.com/shimingy-zx/wecom_worktool_backend/tree/main)
						- worktool
							- github：[gallonyin/worktool: 【企业微信】企业微信机器人 聊天机器人、自动加好友、自动拉群、自动群发机器人 免Root零封号 集成ChatGPT (github.com)](https://github.com/gallonyin/worktool)
							- api文档：[快速入门 - 企微WorkTool API (apifox.cn)](https://worktool.apifox.cn/)
							- 控制台：[WorkTool管理系统 (ymdyes.cn)](https://admin.worktool.ymdyes.cn/login?redirect=%2Findex)
						- 内网穿透
							-  cpolar
								- 官网：[cpolar - secure introspectable tunnels to localhost](https://dashboard.cpolar.com/)
						- 云函数
							- 腾讯云函数
								- 链接：[云函数_无服务器 _无服务器函数计算 (tencent.com)](https://cloud.tencent.com/product/scf)
							- 功能限制
								- 在腾讯云标准环境下，仅 `/tmp` 目录可读可写，输出文件时请注意选择 `/tmp` 路径，否则会导致服务因缺少写权限而异常退出。
								- 链接：[云函数 函数概述-操作指南-文档中心-腾讯云 (tencent.com)](https://cloud.tencent.com/document/product/583/56124)
							- 如果需要在云函数执行一些长耗时的处理怎么办？
								- [云开发 CloudBase 云函数相关问题-常见问题-文档中心-腾讯云 (tencent.com)](https://cloud.tencent.com/document/product/876/18435)
						- API网关
							- 腾讯云API网关：[API 网关简介_API 网关购买指南_API 网关操作指南-腾讯云 (tencent.com)](https://cloud.tencent.com/document/product/628)
						- 云手机平台
							- VMOS：[VMOS官方网站-虚拟大师-安卓手游模拟器-本地虚拟手机](https://www.vmos.cn/)
						- 安卓虚拟机
							- docker
								- [remote-android/redroid-doc: redroid (Remote-Android) is a multi-arch, GPU enabled, Android in Cloud solution. Track issues / docs here (github.com)](https://github.com/remote-android/redroid-doc)
								- [budtmo/docker-android: Android in docker solution with noVNC supported and video recording (github.com)](https://github.com/budtmo/docker-android?tab=readme-ov-file)
						- 域名解析
							- 阿里云域名解析：[如何添加域名解析记录_公网权威解析_云解析DNS(DNS)-阿里云帮助中心 (aliyun.com)](https://help.aliyun.com/zh/dns/add-a-dns-record?spm=a2c1d.8251892.help.dexternal.575c5b76a6jXBL)
				- 句子互动对接方案
					- 参考材料：
						- 句子互动： [Wechaty Puppet Service WorkPro 发布公告 | Wechaty](https://wechaty.js.org/2022/12/23/introducing-workpro-puppet/)
				- RPA开发对接方案
					- 参考材料
						- 影刀RPA：[影刀RPA - 影刀官网 (yingdao.com)](https://www.yingdao.com/
- 问题场景
	- 网站
	- APP
	- 企业微信客户群对接
	- 实验室教育综合性问题场景
	- 直播问答场景
	- 俱乐部问答场景
		- 数字俱乐部
		- 元宇宙俱乐部
		- AI俱乐部
		- 营销俱乐部
		- 。。。
- 附加功能
	- 联网查询信息
	- 特定情况下回复相关图片
	- 


## 技术方案

### 技术框架

### 低代码方案

### 现成商业平台


会议记录
[Welcome - Fireflies.ai](https://app.fireflies.ai/)

[Noty.ai](https://app.noty.ai/workspace/e54dea7f-e23a-4870-a4c7-9fc14c342ce0/folders)

#### AI智能体

**COZE**
- coze
	- 数据清理
	- 流程设计
	- api教程文档
		- https://bytedance.sg.larkoffice.com/docx/PuA0dHcdIoPBAKxBa7YlJJLkgdc
	- 用户意图识别
			- 人工客服对接
				- 参考资料
					- 图床：[PICUI - PICUI图床](https://picui.cn/)
## 技术难题
