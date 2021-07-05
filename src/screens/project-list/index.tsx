/*
 * @Description: 
 * @Author: zhangjing
 * @Date: 2021-05-17 13:14:31
 * @LastEditors: zhangjing
 */
import React from 'react';
import { useState, useEffect } from "react";

import { SearchPanel } from "./search-panel";
import { List } from "./list";
import * as qs from 'qs';
import { cleanObject, useDebounce, useMount } from '../../utils';
import { useHttp } from 'utils/http';
import styled from '@emotion/styled';
import {Typography} from 'antd'

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: "",
        personId: ""
    });
    const [users, setUsers] = useState([]);
    const [isloading, setIsloading] = useState(false);
    const [error, setError] = useState<null|Error>(null)
    const [list, setList] = useState([]);
    const debouncedParam = useDebounce(param, 200);
    const client=useHttp()
    useEffect(() => {
        setIsloading(true);
        client('projects',{data:cleanObject(debouncedParam)})
        .then(setList)
        .catch(error=>{
            setList([])
            setError(error)
        })
        .finally(()=>setIsloading(false))
        // fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async (response) => {
        //     if (response.ok) {
        //         setList(await response.json());
        //         //async await                Body.json()
        //         // Body  mixin 的 json() 方法接收一个 Response 流，并将其读取完成。它返回一个 Promise，Promise 的解析 resolve 结果是将文本体解析为 JSON。
        //         // 语法
        //         // response.json().then(data => {
        //         //   // do something with your data
        //         // });
        //     }else{
        //         alert('response error')
        //     }
        // }).catch(()=>alert('console.error()'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedParam]);

    useMount(() => {
        client('users').then(setUsers)
        // fetch(`${apiUrl}/users`).then(async (response) => {
        //     if (response.ok) {
        //         setUsers(await response.json());
        //     }
        // })
    });

    return <Container>
        <h1>项目列表</h1>
        <SearchPanel users={users} param={param} setParam={setParam}></SearchPanel>
        {error?<Typography.Text type={"danger"}>{error.message}</Typography.Text>:null}
        <List loading={isloading} users={users} dataSource={list} />
    </Container>
}

const Container = styled.div`
padding: 3.2rem;
`