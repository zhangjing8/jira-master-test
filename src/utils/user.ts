/*
 * @Description: 
 * @Author: zhangjing
 * @Date: 2021-07-05 15:25:58
 * @LastEditors: zhangjing
 */
import { useState, useEffect } from "react";
import { cleanObject  } from 'utils/index';
import { useHttp } from 'utils/http';
import { useAsync } from 'utils/use-async';
import { User } from "../screens/project-list/search-panel";

export const useUsers=(param?:Partial<User>)=>{
    const client=useHttp();
    const {run,...result}=useAsync<User[]>();
    useEffect(() => {
        run(client('users',{data:cleanObject(param||{})}))
    }, [param]);
    return result

}
