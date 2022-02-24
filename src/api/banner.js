
import request from '@/api/request'

/**
 * 获取轮播图
 * @returns 
 */
export async function getBanners() {
    const res = await request.get('/api/slides');
    return res;
}

