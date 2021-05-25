/*
 * @Description: 
 * @Author: zhangjing
 * @Date: 2021-05-24 17:07:30
 * @LastEditors: zhangjing
 */
module.exports=(req,res,next)=>{
    if(req.method==='POST' &&req.path==='/login'){
        if(req.body.username==='jack'&&req.body.passward==='123456'){
            return res.status(200).json({
                user:{
                    token:"123"
                }
            })
        }
    }else{
        return res.status(400).json({
            message:"用户名或密码错误"
        })
    }
    // next()
}
