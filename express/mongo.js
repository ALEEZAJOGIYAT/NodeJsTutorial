//we always create new file jisma srf connection data hoga

const connect=require('./mongoConnection')


const main= async () => {
    let data=await connect();
   let result=await data.find().toArray();
    console.warn(result);

}
main()