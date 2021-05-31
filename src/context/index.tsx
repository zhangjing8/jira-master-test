/*
 * @Description: 
 * @Author: zhangjing
 * @Date: 2021-05-27 13:29:49
 * @LastEditors: zhangjing
 */
import { ReactNode } from "react";
import { AuthProvider } from "./auth-context";
export const AppProviders=({children}:{children:ReactNode})=> {
    return <AuthProvider>
        {children}
    </AuthProvider>
}
