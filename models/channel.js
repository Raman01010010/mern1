const mongoose=require("mongoose");
const autoIncrement=require("mongoose-auto-increment")

const channelSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    roll_no:{
        type:Number,
        required:true
       
    }

});
autoIncrement.initialize(mongoose.connection)
channelSchema.plugin(autoIncrement.plugin,"Channel")
const ChannelModel=new mongoose.model("Channel",channelSchema);
module.exports=ChannelModel;