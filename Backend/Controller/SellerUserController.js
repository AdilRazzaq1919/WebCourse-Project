const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');
require("dotenv").config();

const database= process.env.DB;
const option = { useNewUrlParser: true, useUnifiedTopology: true };

const addSeller = async (req, res) => {
    const client = new MongoClient(database, option);
    try {
        await client.connect();
        const DataBases = client.db('test');
        const collection = DataBases.collection('sellerusers');
        const{firstName, lastName, email, password, role}=req.body;
        if(!firstName ||!lastName|| !email  || !password|| !role){
        return res.status(422).json({error:"Give input to all the fields"});
        }
        const userExists= await collection.findOne({email:email});
        if(userExists){
            return res.status(422).json({error:"Email Already exist"})
        }
        const seller = {
            firstName,
            lastName,
            email,
            password,
            role
          };
      
          const sellerRegistered = await collection.insertOne(seller);
            if(sellerRegistered){
                return res.status(201).json({message:" Seller Added Successfully"})
            }
        } catch (error) {
        console.error('Error Adding Seller:', error);
        res.status(500).json({ message: 'Internal server error' });
      } finally {
        await client.close();
      }
    };

const getSellerUser = async (req, res) => {
    const client = new MongoClient(database, option);
    try {
        await client.connect();
        const DataBases = client.db('test');
        const collection = DataBases.collection('sellerusers');

        const sellerusers= await collection.find().toArray();
        res.status(200).json(sellerusers);

    }
    catch(err){
        console.error('Error retrieving Seller User data:', err);
      res.status(500).json({ message: 'Internal server error' });
    } finally {
      await client.close();
    }
}

const getIndividualSeller = async (req, res) => {
    const client = new MongoClient(database, option);
    try {
        await client.connect();
        const DataBases = client.db('test');
        const collection = DataBases.collection('sellerusers');
        const sellerID = req.params.id;
        const sellerusers= await collection.findOne({_id: new ObjectId(sellerID)})
        
        res.status(200).json(sellerusers);

    }
    catch(err){
        console.error('Error retrieving Seller User data:', err);
      res.status(500).json({ message: 'Internal server error' });
    } finally {
      await client.close();
    }
}
const updateSeller = async (req, res) => {
    
    const client = new MongoClient(database, option);
    try {
        await client.connect();
        const DataBases = client.db('test');
        const collection = DataBases.collection('sellerusers');

        
  
      const sellerID = req.params.id;
      const {email, password} = req.body;

      const userExists= await collection.findOne({email:email});
        if(userExists){
            return res.status(422).json({error:"Email Already exist"})
        }
      const result = await collection.updateOne(
        { _id: new ObjectId(sellerID) },
        { $set: {email,password} }    
      );

  
      if (result.matchedCount === 0) {
        return res.status(404).json({ message: 'Seller Not found' });
      }
  
      res.status(200).json({ message: 'Seller updated successfully' });
    } catch (error) {
      console.error('Error updating Seller:', error);
      res.status(500).json({ message: 'Internal server error' });
    } finally {
      await client.close();
    }
  };
  const deleteSeller = async (req, res) => {
    const client = new MongoClient(database, option);
    try {
        await client.connect();
        const DataBases = client.db('test');
        const collection = DataBases.collection('sellerusers');
  
        const sellerID = req.params.id;
  
      const result = await collection.deleteOne({ _id: new ObjectId(sellerID) });
  
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Seller not found' });
      }
  
      res.status(200).json({ message: 'Seller deleted successfully' });
    } catch (error) {
      console.error('Error deleting Seller:', error);
      res.status(500).json({ message: 'Internal server error' });
    } finally {
      await client.close();
    }
  };



module.exports = { getSellerUser, updateSeller,deleteSeller,addSeller,getIndividualSeller};