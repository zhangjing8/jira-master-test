export const isFalsy=(value)=> value === 0?false :!value
//在函数里改变传入的对象不好
export const cleanObject=(object)=>{
    // object.name=1111;
    const result={
        ...object
    };
    Object.keys(result).forEach(key => {
        const value = result[key];
        if(isFalsy(value)){
            delete result[key]
        }
    })
    return result;
}