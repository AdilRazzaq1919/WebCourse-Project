const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');
require("dotenv").config();

const database= process.env.DB;
const option = { useNewUrlParser: true, useUnifiedTopology: true };

const addCustomer = async (req, res) => {
    const client = new MongoClient(database, option);
    try {
        await client.connect();
        const DataBases = client.db('test');
        const collection = DataBases.collection('customerusers');
        const{name, email, password, phone,isAdmin,street,apartment,zip,city,country}=req.body;
        const userExists= await collection.findOne({email:email});
        if(userExists){
            return res.status(422).json({error:"Email Already exist"})
        }
        const Customer = {
            name,
            email,
            password,
            phone,
            isAdmin,
            street,
            apartment,
            zip,
            city,
            country
          };
      
          const CustomerRegistered = await collection.insertOne(Customer);
            if(CustomerRegistered){
                return res.status(201).json({message:" Customer Added Successfully"})
            }
        } catch (error) {
        console.error('Error Adding Customer:', error);
        res.status(500).json({ message: 'Internal server error' });
      } finally {
        await client.close();
      }
    };

const getCustomerUser = async (req, res) => {
    const client = new MongoClient(database, option);
    try {
        await client.connect();
        const DataBases = client.db('test');
        const collection = DataBases.collection('customerusers');

        const CustomerUser= await collection.find().toArray();
        res.status(200).json(CustomerUser);

    }
    catch(err){
        console.error('Error retrieving Customer data:', err);
      res.status(500).json({ message: 'Internal server error' });
    } finally{
      await client.close();
    }
}

const getIndividualCustomer = async (req, res) => {
    const client = new MongoClient(database, option);
    try {
        await client.connect();
        const DataBases = client.db('test');
        const collection = DataBases.collection('customerusers');
        const customerID = req.params.id;
        const customer= await collection.findOne({_id: new ObjectId(customerID)})
        
        res.status(200).json(customer);

    }
    catch(err){
        console.error('Error retrieving Customer data:', err);
      res.status(500).json({ message: 'Internal server error' });
    } finally {
      await client.close();
    }
}
const updateCustomer = async (req, res) => {
    
    const client = new MongoClient(database, option);
    try {
        await client.connect();
        const DataBases = client.db('test');
        const collection = DataBases.collection('customerusers');

        
  
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
        return res.status(404).json({ message: 'Customer Not found' });
      }
  
      res.status(200).json({ message: 'Customer updated successfully' });
    } catch (error) {
      console.error('Error updating Customer:', error);
      res.status(500).json({ message: 'Internal server error' });
    } finally {
      await client.close();
    }
  };
  const deleteCustomer = async (req, res) => {
    const client = new MongoClient(database, option);
    try {
        await client.connect();
        const DataBases = client.db('test');
        const collection = DataBases.collection('customerusers');
  
        const customerID = req.params.id;
  
      const result = await collection.deleteOne({ _id: new ObjectId(customerID) });
  
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Customer not found' });
      }
  
      res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (error) {
      console.error('Error deleting Customer:', error);
      res.status(500).json({ message: 'Internal server error' });
    } finally {
      await client.close();
    }
  };
module.exports={
    getCustomerUser,
    getIndividualCustomer,
    deleteCustomer,
    updateCustomer,
    addCustomer
}