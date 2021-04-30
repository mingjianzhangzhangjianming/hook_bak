/*
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from "axios"
// import { Redirect } from "react-router-dom"
import { message } from "antd" //notification

axios.defaults = {
    // `method` 是创建请求时使用的方法
    method: 'get',

    // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
    baseURL: process.env.REACT_APP_BASE_URL,

    //  设置请求超时
    timeout: 10000,

    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: true,

    // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: 'json',

    // `responseEncoding` indicates encoding to use for decoding responses
    responseEncoding: 'utf8',

    // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
    validateStatus: function (status) {
        return status >= 200 && status < 300
    }
}

const instance = axios.create()

instance.interceptors.request.use(config => {
    // const { url } = config;
    const token = sessionStorage.getItem("token");
    token && (config.headers['Authorization'] = token);
    // if(/^\/api\//.test(url) && !token && !window.location.href.indexOf('login') > -1){
    //      // 跳转到登录页
    // }
    return config
}, error => {
    return Promise.reject(error)
})

instance.interceptors.response.use(response => {
    console.log("响应拦截成功", response)
    return response.data
}, error => {
    // 对响应错误做点什么
    if (error.response) {
        switch (error.response.status) {
            case 401: //用户未授权登陆 跳转至登陆页面处理
                console.log("用户未授权登陆 跳转至登陆页面处理")
                break;
            case 403: //登陆凭证过期
                localStorage.removeItem("token")
                console.log("登陆凭证过期")
                break;
            case 404: //请求资源未找到 跳转至404页
                console.log("请求资源未找到 跳转至404页")
                break;
            default:
                break;
        }
        return Promise.reject(error.response)
    } else {
        if (!window.navigator.onLine) {
            message.info("无网络连接!")
        } else if (error.message.includes('timeout')) {
            message.info("请求超时!")
        }
        return Promise.reject(error)
    }
    // console.log("响应拦截错误", error, error.code, error.response, error.message)
})

export default instance