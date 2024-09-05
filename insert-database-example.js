const {MongoClient} = require("mongodb");

const url = 
"mongodb+srv://manishagolane:gAdesVGVFF6QDC98@nodeproject.duzuv.mongodb.net/?retryWrites=true&w=majority&appName=NodeProject"

const client = new MongoClient(url);

const dbName = "firstDatabase";

async function main(){
    await client.connect();
    console.log("Connected Successfully to server!!!!");
    const db = client.db(dbName);
    const collection = db.collection('User');

    const data = {
        firstname: "abc",
        lastname: "pqr",
        city: "xyz"
    };
    
    const insertResult = await collection.insertMany([data]);
    console.log("Inserted Documents -->", insertResult)


    // Read
    const findResult = await collection.find({}).toArray();
    console.log("Found Documents => ",findResult);
    return 'done.';
}

main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());