const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');
require("dotenv").config();

const database= process.env.DB;
const option = { useNewUrlParser: true, useUnifiedTopology: true };

const getSellerOrder = async (req, res) => {
    const client = new MongoClient(database, option);
    try {
        await client.connect();
        const DataBases = client.db('test');
        const collection = DataBases.collection('orders');

        const sellerOrders= await collection.find().toArray();
        res.status(200).json(sellerOrders);

    }
    catch(err){
        console.error('Error retrieving Order data:', err);
      res.status(500).json({ message: 'Internal server error' });
    } finally {
        await client.close();
    }
}
const getIndividualOrder = async (req, res) => {
    const client = new MongoClient(database, option);
    try {
        await client.connect();
        const DataBases = client.db('test');
        const collection = DataBases.collection('orders');
        const orderID = req.params.id;
        const IndividualOrder= await collection.findOne({_id: new ObjectId(orderID)})
        
        res.status(200).json(IndividualOrder);

    }
    catch(err){
        console.error('Error retrieving Order Information:', err);
      res.status(500).json({ message: 'Internal server error' });
    } finally {
      await client.close();
    }
}

const deleteOrder = async (req, res) => {
    const client = new MongoClient(database, option);
    try {
        await client.connect();
        const DataBases = client.db('test');
        const collection = DataBases.collection('orders');
  
        const orderID = req.params.id;
  
      const result = await collection.deleteOne({ _id: new ObjectId(orderID) });
  
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
      console.error('Error deleting Order details:', error);
      res.status(500).json({ message: 'Internal server error' });
    } finally {
      await client.close();
    }
  };

module.exports={
    getSellerOrder,
    getIndividualOrder,
    deleteOrder
 }