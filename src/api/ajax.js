import axios from 'axios'
import {message} from 'antd'

function ajax(url,data={},method='GET'){
    return new Promise((resolve,reject)=>{
        let promise
        // 执行异步ajax请求
        if (method==='GET') {
            promise=axios.get(url,{params:data})
        }else {
            promise=axios.post(url,data)
        }
        promise.then((response)=>{
            // 如果成功了,调用resolve(response.data)
            resolve(response.data)
        })
        .catch((error)=>{ // 对所有ajax请求出错做统一处理
            // 如果失败了,提示请求后台出错
            message.error('请求错误:'+error.message)
        })
    })
}

export default ajax