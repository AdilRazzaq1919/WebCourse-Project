
const User=require('../Models/UserSchema');
const bcrypt=require('bcryptjs')
const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');
require("dotenv").config();

const database= process.env.DB;
const option = { useNewUrlParser: true, useUnifiedTopology: true };


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

                res.status(201).json({message:"Admin Registered Successfully"});
            }
            else{
                res.status(500).json({message:"Unable to registered Admin"})
            }
        }
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

const getAdminUser = async (req, res) => {
    const client = new MongoClient(database, option);
    try {
        await client.connect();
        const DataBases = client.db('test');
        const collection = DataBases.collection('adminusers');

        const adminUser= await collection.find().toArray();
        res.status(200).json(adminUser);


    }
    catch(err){
        console.error('Error retrieving Admin User data:', err);
      res.status(500).json({ message: 'Internal server error' });
    } finally {
      await client.close();
    }
}

const updateAdmin = async (req, res) => {
    
    const client = new MongoClient(database, option);
    try {
        await client.connect();
        const DataBases = client.db('test');
        const collection = DataBases.collection('adminusers');

        
  
      const adminID = req.params.id;
      const {name,email, password} = req.body;

      const userExists= await collection.findOne({email:email});
        if(userExists){
            return res.status(422).json({error:"Email Already exist"})
        }
      const result = await collection.updateOne(
        { _id: new ObjectId(adminID) },
        { $set: {name,email,password} }    
      );

  
      if (result.matchedCount === 0) {
        return res.status(404).json({ message: 'Admin Not found' });
      }
  
      res.status(200).json({ message: 'Admin updated successfully' });
    } catch (error) {
      console.error('Error updating Admin:', error);
      res.status(500).json({ message: 'Internal server error' });
    } finally {
      await client.close();
    }
  };
  const deleteAdmin = async (req, res) => {
    const client = new MongoClient(database, option);
    try {
        await client.connect();
        const DataBases = client.db('test');
        const collection = DataBases.collection('adminusers');
  
        const adminID = req.params.id;
  
      const result = await collection.deleteOne({ _id: new ObjectId(adminID) });
  
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Admin not found' });
      }
  
      res.status(200).json({ message: 'Admin deleted successfully' });
    } catch (error) {
      console.error('Error deleting Admin:', error);
      res.status(500).json({ message: 'Internal server error' });
    } finally {
      await client.close();
    }
  };
  const getIndividualAdmin = async (req, res) => {
    const client = new MongoClient(database, option);
    try {
        await client.connect();
        const DataBases = client.db('test');
        const collection = DataBases.collection('adminusers');
        const AdminID = req.params.id;
        const Adminusers= await collection.findOne({_id: new ObjectId(AdminID)})
        
        res.status(200).json(Adminusers);

    }
    catch(err){
        console.error('Error retrieving Admin data:', err);
      res.status(500).json({ message: 'Internal server error' });
    } finally {
      await client.close();
    }
}
module.exports={
    signUp,
    login,
    getAdminUser,
    updateAdmin,
    deleteAdmin,
    getIndividualAdmin
}