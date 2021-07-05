/*
 * @Description: 
 * @Author: zhangjing
 * @Date: 2021-07-05 13:59:03
 * @LastEditors: zhangjing
 */
import {useState} from 'react'
interface State<D>{
    error:Error|null;
    data:D|null;
    state:'idle'|'loading'|'error'|'success'

}

const defaultInitialState:State<null>={
    state:'idle',
    data:null,
    error:null
}

export const useAsync=<D>(initialState?:State<D>)=>{
    const [state, setState] = useState<State<D>>({
        ...defaultInitialState,
        ...initialState
    })
    const setData=(data:D)=>setState({
        data,
        state:'success',
        error:null
    })
    const setError=(error:Error)=>setState({
        error,
        state:'error',
        data:null
    })
    //run用来触发异步请求
    const run =(promise:Promise<D>)=>{
        if(!promise||!promise.then){
            throw new Error('请传入Promise类型数据')
        }
        setState({...state,state:'loading'})
        return promise.then(data=>{
            setData(data)
            return data
        }).catch(error=>{
            setError(error)
            return error
        })
    }
    return {
        isIdle:state.state==='idle',
        isLoading:state.state==='loading',
        isError:state.state==='error',
        isSuccess:state.state==='success',
        run,
        setData,
        setError,
        ...state
    }
}
