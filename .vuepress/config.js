const sidebar = require('./siderbar.js');
module.exports = {
  "title": "杨仕明博客",
  "description": "杨仕明博客",
  "dest": "public",
  "base": "/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "https://thumbs.dreamstime.com/b/scarlet-macaw%E5%AD%A4%E7%AB%8B%E7%9F%A2%E9%87%8F%E5%9B%BE%E6%A0%87%EF%BC%8C%E5%8F%AF%E4%BB%A5%E6%A0%B9%E6%8D%AE%E9%9C%80%E8%A6%81%E8%BD%BB%E6%9D%BE%E4%BF%AE%E6%94%B9%E6%88%96%E7%BC%96%E8%BE%91-166373312.jpg"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "plugins": ["@vuepress-reco/vuepress-plugin-comments", "vuepress-plugin-meting"],
  "theme": "reco",
  "themeConfig": {
    "mode": 'light',
    "subSidebar": 'auto',
    "valineConfig": {
      "appId": 'splat8TFVnczq8PLS5I84D9x-gzGzoHsz',
      "appKey": 'acH7LxPVw9fPum3bd5LiXjPn',
    },
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      { "text": '留言板', "link": '/blogs/views/messageBoard.html', "icon": 'reco-suggestion' },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/shimingy-zx",
            "icon": "reco-github"
          }
        ]
      },
    ],
    sidebar,
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "目录索引"
      },
      "tag": {
        "location": 3,
        "text": "标签索引"
      }
    },
    "friendLink": [
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "https://thumbs.dreamstime.com/b/scarlet-macaw%E5%AD%A4%E7%AB%8B%E7%9F%A2%E9%87%8F%E5%9B%BE%E6%A0%87%EF%BC%8C%E5%8F%AF%E4%BB%A5%E6%A0%B9%E6%8D%AE%E9%9C%80%E8%A6%81%E8%BD%BB%E6%9D%BE%E4%BF%AE%E6%94%B9%E6%88%96%E7%BC%96%E8%BE%91-166373312.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "shimingy",
    "authorAvatar": "https://thumbs.dreamstime.com/b/scarlet-macaw%E5%AD%A4%E7%AB%8B%E7%9F%A2%E9%87%8F%E5%9B%BE%E6%A0%87%EF%BC%8C%E5%8F%AF%E4%BB%A5%E6%A0%B9%E6%8D%AE%E9%9C%80%E8%A6%81%E8%BD%BB%E6%9D%BE%E4%BF%AE%E6%94%B9%E6%88%96%E7%BC%96%E8%BE%91-166373312.jpg",
    "record": "首页",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
}
