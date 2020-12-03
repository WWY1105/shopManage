// 根据环境设置 BASE_API
let apiUrl = '';
switch(process.env.NODE_PACK) {
  case 'development':
    apiUrl = '"http://81.69.47.52/tjx"';
    break;
  default:
    apiUrl = '"http://127.0.0.1:8000"';
    break;
}
module.exports = apiUrl;