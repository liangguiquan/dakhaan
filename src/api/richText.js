import request from '@/api/request'


// 接口用于编辑富文本的内容和获取已上传的富文本
// 富文本在本项目中，主要用于:
// 1. 关于页面的内容编辑
// 2. 文章/商品的描述，是文章的一部分


/**
 * 获取一篇富文本文章
 * @param {*} id 富文本的id
 * @returns 
 */
export async function getRichText(id) {
    const res = await request({
        url: `/api/articles/${id}`, 
        method: "get",
    })
    return res;
};
