/* @jsxImportSource @emotion/react */
// 在组件的顶部写上 下面代码，告知当前组件用了emotion行内样式// 
import {jsx} from '@emotion/react'
import React from 'react';
import { Input, Select,Form } from 'antd';
import { useState,useEffect } from "react";
export interface User{
    id:string;
    name:string;
    email:string;
    title:string;
    organization:string;
}
interface SearchPanelProps {
    users:User[],
    param:{
        name:string;
        personId:string;
    },
    setParam:(param: SearchPanelProps['param']) => void;
}
export const SearchPanel=({users,param,setParam}:SearchPanelProps)=>{
    // const [param, setParam] = useState({
    //     name:"",
    //     personId:""
    // });
    // const [users, setUsers] = useState([]);
    // const [list, setList] = useState([]);
    // useEffect(() => {
    //     fetch("").then(async (response)=>{
    //         if(response.ok){
    //             setList(await response.json())
    //         }
    //     })
    // }, [param])
    // setParam(Object.assign({},param,{name:evt.target.value}))
    return <Form css={{marginBottom: "2rem"}} layout="inline">
        <Form.Item>
            <Input 
            placeholder="项目名"
            type="text" value={param.name} onChange={ evt=>setParam({
                ...param,
                name:evt.target.value
            })}></Input>
            </Form.Item>
            <Form.Item>
            <Select value={param.personId} onChange={ value=>setParam({
                ...param,
                personId:value
            })}>
                <Select.Option value="">类型</Select.Option>
                {
                    users.map(user=><Select.Option key={user.id} value={user.id}>{user.name}</Select.Option>)
                }
            </Select>
        </Form.Item>
    </Form>
}