exports.typeCheck=(req,res,next)=>{
    const {num1,num2} = req.body;
    if(typeof num1==="string" || typeof num2=="string"){
        return res.json({
            message:"invalid data types"
        })
    }
    next();
}