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
import {Button, Form, Input} from 'antd';
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
    // const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
    //     event.preventDefault();
    //     const username=(event.currentTarget.elements[0] as HTMLInputElement).value
    //     const password=(event.currentTarget.elements[1] as HTMLInputElement).value
    //     login({username,password});
    // }
    const handleSubmit=(values:{username:string,password:string})=>{
        login(values);
    }
    return <Form onFinish={handleSubmit}>
        {/* <div>
        {
            user?<div>
                登陆成功，用户名:{user?.name}
                token:{user.token}
            </div>:null
        }
        </div> */}
        <Form.Item rules={[{required:true,message:"请输入用户名"}]} name="username">
            <Input placeholder='用户名' type="text" id={"username"}></Input>
        </Form.Item>
        <Form.Item rules={[{required:true,message:"请输入密码"}]} name="password">
            <Input placeholder='密码' type="password" id={"password"}></Input>
        </Form.Item>
        <Form.Item>
            <Button htmlType='submit' type={"primary"}>登录</Button>
        </Form.Item>
    </Form>
}