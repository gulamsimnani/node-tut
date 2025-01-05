const express = require('express');
const products = require('./products');
require('./config');
const Products = require('./products');
const app = express();
app.use(express.json());

app.get('/search/:key', async(req, res)=>{
    let data = await Products.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}}
            ]
        }
    );
    res.send(data);
});
// app.post('/create',async (req,res)=>{
//     console.log(req.body);
//     let data =await new Products(req.body);
//     let result =await data.save();
//     res.send("done");
  
// })

// app.get('/list',async (req,res)=>{
//     console.log(req.body);
//     let data =await Products.find();
//     //let result =await data.save();
//     res.send(data);
  
// })
// app.delete('/delete/:_id',async (req,res)=>{
//     console.log(req.params.id);
//     let data =await Products.deleteOne(req.params);
//     //let result =await data.save();
//     res.send(data);
  
// })

// app.put('/update/:_id',async (req,res)=>{
//     console.log(req.params.id);
//     let data =await Products.updateOne(
//         req.params,
//         {$set:req.body}
//     );
//     res.send(data);
  
// })
app.listen(5000);

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
// const productSchema = new mongoose.Schema(
//     {
//         name:String,
//         price:Number,
//         brand:String,
//         category:String
//     }
// );
// const saveDataInDb = async ()=>{
    
//     const productsModel = mongoose.model('products', productSchema);
//     let data = new productsModel({name:'m7',price:1700, brand:'nokia',category:'mobile'});
//     let result =await data.save();
//     console.log(result);

// }
// saveDataInDb();

// const updateInDb = async ()=>{
//     const products = mongoose.model('products', productSchema);
//     let data = await products.updateOne(
//         {name:"m7"},{$set:{price:5000}}
        
//         )
// }

// updateInDb();

// const deleteInDb = async ()=>{
//     const products = mongoose.model('products', productSchema);
//     let data = await products.deleteOne(
//         {name:"Nokia 10"}
//         )
// }
// deleteInDb();
// const dbConnect = require('./mongodb');
// dbConnect().then((res) => {
//     res.find().toArray().then((data)=>{
//         console.log(data);
//     })
// });
// const express = require('express');
// const path = require('path');
// const publicPath = path.join(__dirname, 'public');
// const app = express();
// const requestFilter = (req,res,next)=>{
//     if(!req.query.age){
      
//             res.send('Please provide age');  
//     } else {
//         next();
//     }

// }
// app.use(requestFilter);
// app.use(express.static(publicPath));

// app.set('view engine', 'ejs');
// app.get('',(req, res)=>{
//     res.send('Hello, This is home page');
// })

// app.get('/profile',(req, res)=>{
//     const user = {
//         name:'Gulam'
//     }
//     res.render('profile', {user});
// })
// app.listen(4500);
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files');
// console.warn(dirPath)
// fs.writeFileSync("apple.txt", "This is a apple file");
// const http = require('http');
// const data = require ('./data');
// http.createServer((req,res) => {
//     res.writeHead(200,{'Content-Type':'application\json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(4500);

