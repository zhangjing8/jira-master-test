/*
 * @Description: 
 * @Author: zhangjing
 * @Date: 2021-05-24 15:23:23
 * @LastEditors: zhangjing
 */
import React, { FormEvent } from 'react'
import * as qs from 'qs';
import { cleanObject, useDebounce, useMount } from '../utils';
import { useAuth } from '../context/auth-context';
interface Base{
    id:number;
}

interface Advance extends Base{
    name:string;
}

interface Person extends Base{
    name:string;
}

const p:Person={
    name:"123",
    id:1
}

// const test=(p:Base)=>{

// }

// //鸭子类型（duck typing）：面向接口编程，而不是面向对象编程
// const a:Advance={id:1,name:"wsdv"}
// test(a)

const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreen=()=>{
        const {login,user}=useAuth()
    // const login=(param:{
    //     username:string,
    //     password:string
    // })=>{
    //     fetch(`${apiUrl}/login`,{
    //         method:'POST',
    //         headers:{
    //             'Content-Type':"application/json"
    //         },
    //         body: JSON.stringify(param),
    //     }).then(async (response) => {
    //         if (response.ok) {
                
    //         }
    //     })
    // }
    //HTMLFormElement extens Element
    const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const username=(event.currentTarget.elements[0] as HTMLInputElement).value
        const password=(event.currentTarget.elements[1] as HTMLInputElement).value
        login({username,password});
    }
    return <form onSubmit={handleSubmit}>
        <div></div>
        {
            user?<div>
                登陆成功，用户名:{user?.name}
                token:{user.token}
            </div>:null
        }
        <div>
            <label htmlFor="username">用户名</label>
            <input type="text" id={"username"}></input>
        </div>
        <div>
            <label htmlFor="password">密码</label>
            <input type="password" id={"password"}></input>
        </div>
        <button type={"submit"}>登录</button>
    </form>
}