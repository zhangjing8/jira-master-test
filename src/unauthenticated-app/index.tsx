import React, { useState } from "react"
import { LoginScreen } from "../screens/login"
import { RegisterScreen } from "./register"

/*
 * @Description: 
 * @Author: zhangjing
 * @Date: 2021-05-31 13:51:30
 * @LastEditors: zhangjing
 */
export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false)
    return <div>
        {
            isRegister ? <RegisterScreen /> : <LoginScreen />
        }
        <button onClick={()=>setIsRegister(!isRegister)}>切换到{isRegister ? '登录' : '注册'}</button>
    </div>
}