/*
export const addUser=(request,response)=>{
    const user=request.body;
    connsole.log("Hello")
    console.log(user)
}
*/
const autoIncrement=require("mongoose-auto-increment")
const ChannelModel=require("../models/channel")
const addUser=async(request,response)=>{
    console.log("Hello")
    console.log(request.body)
    const user=request.body;
    const channelModel=new ChannelModel(user)
    try
    {
       await channelModel.save();
       response.status(201).json(channelModel)

    }catch(error){
        response.status(409).json({message:error.message})

    }
    
}
module.exports=addUser