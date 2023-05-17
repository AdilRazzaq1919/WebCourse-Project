
const User=require('../Models/UserSchema');
const bcrypt=require('bcryptjs')


const signUp=async(req,res)=>{
    try{
        const {name,email,password,confirmPassword}=req.body;
        const Emailexits= await User.findOne({email:email});
        if(Emailexits){
            res.status(422).json({error:"Email already exist"})
        }
        else if(!name || !email || !password || !confirmPassword){
            return  await res.status(422).
            json({error:"Give input to all the fields"});
        }
        else if(password!=confirmPassword){
            return await res.status(422).json({error:"Password Does not match"});
        }
        else{
            const user= new User({name,email,password,confirmPassword});
            const userRegistered=await user.save();
            if(userRegistered){

                res.status(201).json({message:"User Registered Successfully"});
            }
            else{
                res.status(500).json({message:"Unable to registered User"})
            }
        }
        return res.redirect('login.html')
    }
    catch(err){
        console.log(err);
    }

}

const login=async(req,res)=>{

    const {email, password}=req.body;
    if(!email || !password){
        return await res.status(422).json({error:"Give Input to all the fields"});
    }

    try{
        const userLogin=await User.findOne({email:email});
        if(userLogin){
            const passwordCheck=await bcrypt.compare(password,userLogin.password);
            token=await userLogin.generateauthtoken();
            if(!passwordCheck){
                res.status(400).json({error:"Invlaid Password"})
            }
            else{
                res.status(201).json({message:"User Login Successfully",token:token})
                
            }
        }else{
            res.status(400).json({error:"Invlaid Credentials"})
        }

    }catch(err){
        res.status(400).json({error:"err"});
        console.log(err);
    }

}

module.exports={
    signUp,
    login
}