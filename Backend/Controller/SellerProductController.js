const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');
require("dotenv").config();

const database= process.env.DB;
const option = { useNewUrlParser: true, useUnifiedTopology: true };


const getProducts = async (req, res) => {
    const client = new MongoClient(database, option);
    try {
        await client.connect();
        const DataBases = client.db('test');
        const collection = DataBases.collection('sellerproducts');

        const sellerProducts= await collection.find().toArray();
        res.status(200).json(sellerProducts);

    }
    catch(err){
        console.error('Error retrieving Products data:', err);
      res.status(500).json({ message: 'Internal server error' });
    } finally {
        await client.close();
    }
}
const addProduct = async (req, res) => {
    const client = new MongoClient(database, option);
    try {
        await client.connect();
        const DataBases = client.db('test');
        const collection = DataBases.collection('sellerproducts');
        const{name, description, price, ratings, category, stock, numOfReviews,reviews,user}=req.body;
        const productExists= await collection.findOne({name:name,description:description,price:price});
        if(productExists){
            return res.status(422).json({error:"Product Already exist"})
        }
        const product = {
            name,
            description,
            price,
            ratings,
            category,
            stock,
            numOfReviews,
            reviews,
            user
          };
      
          const ProductAdded = await collection.insertOne(product);
            if(ProductAdded){
                return res.status(201).json({message:" Product Added Successfully"})
            }
        } catch (error) {
        console.error('Error Adding Product:', error);
        res.status(500).json({ message: 'Internal server error' });
      } finally {
        await client.close();
      }
    };
    const updateProduct = async (req, res) => {
    
        const client = new MongoClient(database, option);
        try {
            await client.connect();
            const DataBases = client.db('test');
            const collection = DataBases.collection('sellerproducts');
    
            
      
          const productID = req.params.id;
          const {name, description, price, stock} = req.body;
    
          const productExists= await collection.findOne({name:name,description:description,price:price});
          if(productExists){
              return res.status(422).json({error:"Product Already exist"})
          }
          const result = await collection.updateOne(
            { _id: new ObjectId(productID) },
            { $set: {name,description,price,stock} }    
          );
    
      
          if (result.matchedCount === 0) {
            return res.status(404).json({ message: 'Product Not found' });
          }
      
          res.status(200).json({ message: 'Product details updated successfully' });
        } catch (error) {
          console.error('Error updating Product:', error);
          res.status(500).json({ message: 'Internal server error' });
        } finally {
          await client.close();
        }
      };
      const deleteProduct = async (req, res) => {
        const client = new MongoClient(database, option);
        try {
            await client.connect();
            const DataBases = client.db('test');
            const collection = DataBases.collection('sellerproducts');
      
            const productID = req.params.id;
      
          const result = await collection.deleteOne({ _id: new ObjectId(productID) });
      
          if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Product not found' });
          }
      
          res.status(200).json({ message: 'Product deleted successfully' });
        } catch (error) {
          console.error('Error deleting Product:', error);
          res.status(500).json({ message: 'Internal server error' });
        } finally {
          await client.close();
        }
      };
      const getIndividualProduct = async (req, res) => {
        const client = new MongoClient(database, option);
        try {
            await client.connect();
            const DataBases = client.db('test');
            const collection = DataBases.collection('sellerproducts');
            const productID = req.params.id;
            const product= await collection.findOne({_id: new ObjectId(productID)})
            
            res.status(200).json(product);
    
        }
        catch(err){
            console.error('Error retrieving Product Information:', err);
          res.status(500).json({ message: 'Internal server error' });
        } finally {
          await client.close();
        }
    }

module.exports={
   getProducts,
   addProduct,
   updateProduct,
   deleteProduct,
   getIndividualProduct
}