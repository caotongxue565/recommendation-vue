import axios from 'axios'

axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response
}, function (error) {
    // 对响应错误做点什么
    console.log(error)
    return Promise.reject(error)
})




export const CRequest = axios.create({
    headers: {
        // 'content-type': 'application/x-www-form-urlencoded',
        Authorization: localStorage.getItem('token')
    },
    baseURL: 'http://localhost:8800',

})

// export default {ERequest,CRequest}
export default {CRequest}