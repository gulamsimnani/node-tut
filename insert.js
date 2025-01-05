const dbConnect = require('./mongodb');

const insert =async ()=>{
    const db = await dbConnect();
    const recordsData = [ {name:'nord5', brand: 'vivoy2', price: 1000, category:'mobile'},
    {name:'nord5', brand: 'vivoy21', price: 1000, category:'mobile'},
    {name:'nord5', brand: 'vivoy22', price: 1000, category:'mobile'},
    {name:'nord5', brand: 'vivoy23', price: 1000, category:'mobile'}];
    const result =await db.insertMany(recordsData);
    if(result.acknowledged){
        console.log(result);
    }
    
}

insert();