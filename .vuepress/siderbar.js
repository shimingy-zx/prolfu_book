const { createSideBarConfig } = require('./util')
const FLUTTER_PATH = '/blogs/flutter'
const JAVASCRIPT_PATH = '/blogs/javascript'
const CSS_PATH = '/blogs/css'
const PERFORM_PATH = '/blogs/perform'
const HTML_PATH = '/blogs/html'
const OTHER_PATH = '/blogs/other'


module.exports = {
  [FLUTTER_PATH]: [createSideBarConfig('Flutter', FLUTTER_PATH)],
  [JAVASCRIPT_PATH]: [createSideBarConfig('js基础', JAVASCRIPT_PATH)],
  [CSS_PATH]: [createSideBarConfig('CSS基础', CSS_PATH)],
  [PERFORM_PATH]: [createSideBarConfig('前端性能相关', PERFORM_PATH)],
  [HTML_PATH]: [createSideBarConfig('HTML', HTML_PATH)],
  [OTHER_PATH]: [createSideBarConfig('工具', OTHER_PATH)],
}
