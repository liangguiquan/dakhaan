
import request from '@/api/request'



/**
* 获取picture分类图片
*/
export async function getCatePicture() {
  // const url = '/api/categories';
  // return await request.get(url);
  return await request({
    url: '/api/categories',
    method: 'get',
  });

}