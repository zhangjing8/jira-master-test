import { useState, useEffect } from "react";
export const isFalsy = (value) => value === 0 ? false : !value
//在函数里改变传入的对象不好
export const cleanObject = (object) => {
    // object.name=1111;
    const result = {
        ...object
    };
    Object.keys(result).forEach(key => {
        const value = result[key];
        if (isFalsy(value)) {
            delete result[key]
        }
    })
    return result;
}

export const useMount = (callback) => {
    useEffect(() => {
        callback();
    }, [])
}
// const debounce=(func,delay)=>{
//     let timeout;
//     return (...param)=>{
//         if(timeout){
//             clearTimeout(timeout);
//         }
//         timeout=setTimeout(function(){
//             func(...param);
//         },delay);
//     }
// }
// const log = debounce(()=>console.log('call'),5000)
// log()
// log()
// log()
export const useDebounce = (value,delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const timeout=setTimeout(()=>setDebouncedValue(value),delay)
        return ()=>clearTimeout(timeout);
    }, [value,delay])
    return debouncedValue;
}