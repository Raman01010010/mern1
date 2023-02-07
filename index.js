require("dotenv").config();
const express= require("express");
const Routes=require("./routes/routes.js")
//const addUser = require("./controller/user-controller")
const https=require("https")
const {Server}=require('socket.io')
const server=https.createServer(app)


const io=new Server(server,{
    cors:{
        //origin:"http://172.31.139.118:3000",
        origin:"https://socketrmn1.netlify.app/",
        method:["GET","POST"],

    },
})
io.on("connection",(socket)=>{
    console.log(`User connected ${socket.id}`)
    socket.on("send_message",(data)=>{
        console.log(data)
        socket.broadcast.emit("receive",data)
    })
})
//const  router =require("./routes/router")
const app=express();
const port=process.env.PORT || 8003;
require("./db/conn");
const ChannelModel=require("./models/channel");
const cors=require("cors");
const bodyParser =require("body-parser")
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
//app.use(router);
const mongoose=require("mongoose")
//const DB="mongodb+srv://mern:mernraman@cluster0.fybtryz.mongodb.net/mern?retryWrites=true&w=majority";
const DB="mongodb+srv://mern1:mernraman@cluster0.lykrowe.mongodb.net/mern1?retryWrites=true&w=majority"
app.listen(port,()=>{
    console.log("Server is started on 8000");
})

app.use("/",Routes)
app.get("/insert",(req,res)=>{
    var channelModel=new ChannelModel()
    channelModel.name="Raman"
    channelModel.roll_no=24
    channelModel.save((err,data)=>{
        if(err){
            console.log(err)

        }else{
            res.status(200).send({"msg":"inserted to DB"})
        }
    })
    

})
