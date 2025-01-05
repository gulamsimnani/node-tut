const dbConnect = require('./mongodb');

const deleteData =async ()=>{
    const db = await dbConnect();
    const result =await db.deleteMany(
        {name:'nord5'}
    );
    if(result.acknowledged){
        console.log(result);
    }
    
}

deleteData();