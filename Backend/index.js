const express=require('express');
const mongoose=require ('mongoose');
require("dotenv").config();
const adminRoute=require('./Routes/adminRoutes')
const sellerRoute=require('./Routes/sellerRoutes')
const customerRoute=require('./Routes/customerRoutes')


const app=express();
app.use(express.json())

app.use('/admin', adminRoute)
app.use('/seller',sellerRoute)
app.use('/customer',customerRoute)


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
