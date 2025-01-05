 const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017'; 
const client = new MongoClient(url);
const datbase = 'e-comm';
async function dbConnect(){
    let result = await client.connect();
    let db = result.db(datbase);
    return collection = db.collection('products');
    // let response = await collection.find({price:1250}).toArray();
    // console.log(response);

}
module.exports = dbConnect;



