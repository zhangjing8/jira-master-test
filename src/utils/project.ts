/*
 * @Description: 
 * @Author: zhangjing
 * @Date: 2021-07-05 14:50:23
 * @LastEditors: zhangjing
 */
import { useState, useEffect } from "react";
import {  Project } from "../screens/project-list/list";
import { cleanObject  } from 'utils/index';
import { useHttp } from 'utils/http';
import { useAsync } from 'utils/use-async';
export const useProjects=(param?:Partial<Project>)=>{
    const client=useHttp();
    const {run,...result}=useAsync<Project[]>();
    useEffect(() => {
        run(client('projects',{data:cleanObject(param||{})}))
    }, [param]);
    return result
}