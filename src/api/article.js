import request from '@/api/request'

// 这些是关于文章(文章就是商品)的接口

/**
 * 分页获取文章列表  &category=${category}
 * @param {*} param0   page：页码, limit：每页显示的数据条数, category：分类  sort=desc/asc 倒序/顺序
 * @returns 
 */
export async function getArticles({ page = 1, limit = 3, category = '' }) {
    const url = `/api/goods?page=${page}&limit=${limit}&category=${category}&sort=desc`;
    const res = await request({
        url,
        method: "get",
    });
    // console.log(res);
    return res;
};



/**
 * 根据文章id获取文章
 * @param {*} id 
 * @returns 
 */
 export async function getArticleById(id) {
    const res = await request({
        url: `/api/goods/${id}`,
        method: "get",
    });
    return res;
};
