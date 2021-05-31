/*
 * @Description: 
 * @Author: zhangjing
 * @Date: 2021-05-27 14:01:18
 * @LastEditors: zhangjing
 */
import React,{ReactNode, useState} from 'react';
import * as auth from 'auth.provider'
import { User } from 'types/user';
interface AuthForm {
    username:string,
    password:string
}
const AuthContext=React.createContext<{
    user:User|null,
    login:(form:AuthForm)=>Promise<void>,
    register:(form:AuthForm)=>Promise<void>,
    logout:()=>Promise<void>,
}|undefined>(undefined);
AuthContext.displayName="AuthContext";
export const AuthProvider=({children}:{children:ReactNode})=>{
    const [user, setUer] = useState<User|null>(null)
    const login=(form:AuthForm)=>auth.login(form).then(setUer)
    const register =(form:AuthForm)=>auth.register(form).then(setUer)
    const logout =()=>auth.logout().then(()=>setUer(null))
    return <AuthContext.Provider children={children} value={{user,login,register,logout}}/>
}
export const useAuth=()=>{
    const context = React.useContext(AuthContext);
    //别写错啦！！
    // const context = React.createContext(AuthContext)
    if(!context){
        throw new Error('useAuth必须在AuthProvider')
    }
    return context
}