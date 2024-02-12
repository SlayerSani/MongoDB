// const { MongoClient } = require("mongodb");

// const uri= 'mongodb://127.0.0.1';
// const client = new MongoClient(uri);

// const main = async () : Promise<void> => {
//     await client.connect();
//     const db = client.db(dbName = "shop");
//     const collection = db.collection(name = 'books');
//     const data= await collection.find({pageCount: {$gt:400}}).toArray;
//     console.log(data);
//     return "done";
// }

// main()
//     .then(console.log())
//     .catch((e: any ) : void => console.log(e))
//     .finally(cleient.close())

const { MongoClient } = require("mongodb");

const uri = 'mongodb://127.0.0.1';
const client = new MongoClient(uri);

const data1 ={
    "title":"Dragon Ball Z",
    "isbn":"771717177",
    "pageCount":"10000"
}

const main = async () => {
    await client.connect();
    const db = client.db("shop");
    const collection = db.collection('books');
    await collection.insertOne(data1)
    const data = await collection.find({ pageCount: { $eq: 10000 } }).toArray();
    console.log(data);
    return "done";
}

main()
    .then(console.log)
    .catch((e) => console.log(e))
    .finally(() => client.close()); // Corrected typo in finally block
