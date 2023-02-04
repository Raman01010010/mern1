


const mongoose=require("mongoose")
//const DB="mongodb+srv://mern:mernraman@cluster0.fybtryz.mongodb.net/mern?retryWrites=true&w=majority";
const DB="mongodb+srv://mern1:mernraman@cluster0.lykrowe.mongodb.net/mern1?retryWrites=true&w=majority"
mongoose.connect(DB,{
  
useNewUrlParser:true,
useUnifiedTopology : true
}).then(()=>console.log("Connection 000 start")).catch((error)=>console.log(error.message))

/*
const mongoose = require('mongoose')

const url = `mongodb+srv://mern:BtR1GJQroS6SQFgK@cluster0.fybtryz.mongodb.net/mern?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })
    */