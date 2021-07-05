/*
 * @Description: 
 * @Author: zhangjing
 * @Date: 2021-05-17 13:14:31
 * @LastEditors: zhangjing
 */
import React from 'react';
import { useState, useEffect } from "react";

import { SearchPanel } from "./search-panel";
import { List, Project } from "./list";
import { cleanObject, useDebounce, useMount } from '../../utils';
import styled from '@emotion/styled';
import {Typography} from 'antd'
import { useProjects } from 'utils/project';
import { useUsers } from 'utils/user';

export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: "",
        personId: ""
    });
    const debouncedParam = useDebounce(param, 200);
    const {isLoading,error,data:list}=useProjects(debouncedParam);
    const {data:users}=useUsers()


    return <Container>
        <h1>项目列表</h1>
        <SearchPanel users={users||[]} param={param} setParam={setParam}></SearchPanel>
        {error?<Typography.Text type={"danger"}>{error.message}</Typography.Text>:null}
        <List loading={isLoading} users={users||[]} dataSource={list||[]} />
    </Container>
}

const Container = styled.div`
padding: 3.2rem;
`