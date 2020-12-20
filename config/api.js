// 根据环境设置 BASE_API
let apiUrl = '';
let baseToken=''
let imgUrl=''
switch(process.env.NODE_PACK) {
  case 'development':
    apiUrl = '"http://81.69.47.52/tjx"';
    baseToken='"Bearer c5d851b7-1762-402c-af40-f421b38e7941"'
    imgUrl="'http://tjx-1304310786.cos.ap-nanjing.myqcloud.com/'"
    break;
  default:
    apiUrl = '"http://127.0.0.1:8000"';
    break;
}
module.exports ={
  baseToken,
  apiUrl,
  imgUrl
} ;