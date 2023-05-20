const mongoose=require('mongoose');
const bcrypt = require('bcryptjs');
const jwt =require ('jsonwebtoken');

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})


UserSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,12);
        this.confirmPassword=await bcrypt.hash(this.confirmPassword,12);
    }
    next();
})

UserSchema.methods.generateauthtoken=async function(){
    try{
         let newtoken=jwt.sign({_id:this._id},process.env.SECRET);
         this.tokens=this.tokens.concat({token:newtoken});
         await this.save();
         return newtoken;

    }catch(err){
        console.log(err);
    }
}

module.exports=mongoose.model('AdminUser',UserSchema);