/*
 * @Description: 用fetch抽象通用HTTP请求方法，增强通用性
 * @Author: zhangjing
 * @Date: 2021-05-31 14:18:31
 * @LastEditors: zhangjing
 */
import { useAuth } from "context/auth-context";
import qs from "qs";
import * as auth from '../auth.provider'
const apiUrl = process.env.REACT_APP_API_URL;
interface Config extends RequestInit {
    data?:object,
    token?:string
}
export const http = async (endpoint: string, { data,token,headers,...customConfig }:Config={}) => {
    const config ={
        method:"GET",
        headers:{
            Authorization:token?`Bearer ${token}`:'',
            'Content-Type':data?'application/json':''
        },
        ...customConfig
    }
    if(config.method.toUpperCase()==='GET'){
        endpoint+=`?${qs.stringify(data)}`
    }else{
        config.body=JSON.stringify(data||{})
    }
    return window.fetch(`${apiUrl}/${endpoint}`,config)
    .then(async response=>{
        if(response.status===401){
            await auth.logout();
            window.location.reload();
            return Promise.reject({message:'请重新登录'})
        }
        const data=await response.json()
        if(response.ok){
            return data
        }else{
            return Promise.reject(data)
        }
    })

}
// 5-8 用useHttp管理JWT和登录状态，保持登录状态
export const useHttp=()=>{
    const {user}=useAuth()
    //TODO 讲解 TS 操作符
    return (...[endpoint,config]:Parameters<typeof http>)=>http(endpoint,{...config,token:user?.token})
    // return ([endpoint,config]:[string,Config])=>http(endpoint,{...config,token:user?.token})
}