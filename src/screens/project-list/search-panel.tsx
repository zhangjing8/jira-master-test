/*
 * @Description: 
 * @Author: zhangjing
 * @Date: 2021-05-17 13:17:25
 * @LastEditors: zhangjing
 */
import { Input, Select } from 'antd';
import React from 'react';
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
    return <form action="">
        <div>
            <Input type="text" value={param.name} onChange={ evt=>setParam({
                ...param,
                name:evt.target.value
            })}></Input>
            <Select value={param.personId} onChange={ value=>setParam({
                ...param,
                personId:value
            })}>
                <Select.Option value="">类型</Select.Option>
                {
                    users.map(user=><Select.Option key={user.id} value={user.id}>{user.name}</Select.Option>)
                }
            </Select>
        </div>
    </form>
}