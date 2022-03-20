//connecting mongodb from local host

const {MongoClient}= require('mongodb')
const url='mongodb://localhost:27017'
const database='sample'
const client=new MongoClient(url)

async function dbConnect()
{
    let result= await client.connect()
    let db=result.db(database)
    return db.collection("users")
    // let data=await collection.find({}).toArray()
    // console.log(data)
}

module.exports=dbConnect;