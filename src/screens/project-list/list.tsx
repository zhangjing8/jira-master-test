/*
 * @Description: 
 * @Author: zhangjing
 * @Date: 2021-05-17 13:16:36
 * @LastEditors: zhangjing
 */
import { render } from '@testing-library/react';
import { Table, TableProps } from 'antd';
import React from 'react';
import dayjs from 'dayjs'
import { User } from './search-panel';
export interface Project{
    id:string;
    name:string;
    personId:string;
    pin:boolean;
    organization:string;
    created:number;
}
interface ListProps extends TableProps<Project>{//?
    // list:Project[];
    users:User[];
}
// type PropsType=Omit<ListProps,'users'>

export const List=({users,...props}:ListProps)=>{
    
    return <Table pagination={false} columns={[
        {
            title:'名称',
            dataIndex:'name',
            sorter:(a,b)=>a.name.localeCompare(b.name)
        },
        {
            title:'部门',
            dataIndex:'organization',
        },
        {
            title:'负责人',
            render(value,project){
                return <span>
                    {users.find(user=>user.id===project.personId)?.name||"未知"}
                </span>
            }
        },
        {
            title:'创建时间',
            render(value,project){
                return <span>
                    {project.created?dayjs(project.created).format('YYYY-MM-DD'):'无'}
                </span>
            }
        }
    ]} 
    {...props}
    />
}