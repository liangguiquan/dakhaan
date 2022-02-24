

import request from '@/api/request'

/**
 *  获取店铺列表
 * @returns 
 */
 export async function getShops() {
    const url = `/api/stores`;
    const res = await request({
        url,
        method: "get",
    });
    return res;
};