
// const express = require('express');
// const dbConnect = require('./mongodb');
// const mongodbOb = require('mongodb');
// // const db = await dbConnect();
// const app = express();
// app.use(express.json());
//  app.get('/',async (req,res)=>{
//     let data =await dbConnect();
//     data = await data.find().toArray();
//     res.send(data);
// });
// app.post('/',async (req,res)=>{
//     const data = await dbConnect();
//     let result =await data.insertOne(req.body);
//     res.send(result);

// });

// app.put('/:name', async (req,res)=>{
//     let data =await dbConnect();
//     let result = await data.updateOne(
//         {name:req.params.name},
//         {$set:req.body}
//         )
//     console.log(req.params.name);
//     res.send({result:"updated"});
// })
// app.delete('/:id',async (req,res)=>{
//     console.log(req.params.id);
//     const data =await dbConnect();
//     const result =await data.deleteOne({_id: new mongodbOb.ObjectId(req.params.id)});
//     res.send("done");
// });
// app.listen(5000);