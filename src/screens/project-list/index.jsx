/*
 * @Description: 
 * @Author: zhangjing
 * @Date: 2021-05-17 13:14:31
 * @LastEditors: zhangjing
 */
import React from 'react';
import { useState,useEffect } from "react";

import { SearchPanel } from "./search-panel";
import { List } from "./list";
import * as qs from 'qs';
import { cleanObject } from 'utils';

const apiUrl=process.env.REACT_APP_API_URL;
export const ProjectListScreen=()=>{
    const [param, setParam] = useState({
        name:"",
        personId:""
    });
    const [users, setUsers] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async (response)=>{
            if(response.ok){
                setList(await response.json());
//async await                Body.json()
// Body  mixin 的 json() 方法接收一个 Response 流，并将其读取完成。它返回一个 Promise，Promise 的解析 resolve 结果是将文本体解析为 JSON。
// 语法
// response.json().then(data => {
//   // do something with your data
// });
            }
        })
    }, [param]);

    useEffect(() => {
        fetch(`${apiUrl}/users`).then(async (response)=>{
            if(response.ok){
                setUsers(await response.json());
            }
        })
    }, []);

    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}></SearchPanel>
        <List users={users} list={list}/>
    </div>
}