//统一管理api
import axios from "axios";
let instance = axios.create({
        baseURL: "http://localhost:3000",
        timeout: 3000,
        name: "张三",
        headers: {}
    })
    //请求拦截
instance.interceptors.request.use(function(config) {
        console.log(config);
        config.name = 'lisi'
        return config
    })
    //响应拦截
instance.interceptors.response.use(function(res) {
        console.log(res);
        return res
    })
    // let instance2 = axios.create({
    //     baseURL: "http://localhost:3000",
    //     timeout: 5000,
    //     headers: {}
    // })
    // let instance3 = axios.create({
    //     baseURL: "http://localhost:3000",
    //     timeout: 1000,
    //     headers: {}
    // })
export default instance