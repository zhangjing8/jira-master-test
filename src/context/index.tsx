/*
 * @Description: 
 * @Author: zhangjing
 * @Date: 2021-05-27 13:29:49
 * @LastEditors: zhangjing
 */
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./auth-context";
export const AppProviders=({children}:{children:ReactNode})=> {
    return <QueryClientProvider client={new QueryClient()}>
        <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
}
