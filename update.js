const dbConnect = require('./mongodb');

const updateData =async ()=>{
    const db = await dbConnect();
    const result =await db.updateMany(
        {brand:'vivo'}, {$set:{name:'nord6'}
    });
    if(result.acknowledged){
        console.log(result);
    }
    
}

updateData();