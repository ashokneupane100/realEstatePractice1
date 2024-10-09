import User from "../models/user.models.js";


export const signup=async(req,res)=>{
    try{
        const {username,email,password}=req.body;

        const user=new User({username,email,password})


        await user.save(); 

        return res.status(200).json(user)                                            

    }catch(err){
        console.log(err);
        return res.status(500).json(err)
    }
}