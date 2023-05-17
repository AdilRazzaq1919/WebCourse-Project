const express=require('express');
const mongoose=require ('mongoose');
require("dotenv").config();
const router=require('./Routes/userRoutes')

const app=express();
app.use(express.json())

app.use('/user', router)

const database= process.env.DB;
mongoose.connect(database,{
                useNewUrlParser:true,
                useUnifiedTopology: true
}).then(()=>{
    console.log("Connection established Successfully");
}).catch((err)=>
    console.log('Connection Failed to established')
);

app.listen(process.env.PORT||3001,()=>{
    console.log(`App listening on port ${process.env.PORT}`);
})
