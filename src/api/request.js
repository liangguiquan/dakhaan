// 这个js文件主要用于创建axios实例对象，并设置拦截器

import axios from 'axios';
// import showMessage from '../utils/showMessage';

const instance = axios.create();  // 创建一个axios实例

// 拦截器
instance.interceptors.response.use(res => {
    // if (res.data.code !== 0) {   // res.data.code === 0，表示没有错误
    //     showMessage({
    //         content: resp.data.msg,
    //         type: 'error',
    //         duration: 1500,
    //     });
    //     return null;
    // }
    return res.data;
});

export default instance;