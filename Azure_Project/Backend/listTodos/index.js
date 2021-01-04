// var mongoClient = require("mongodb").MongoClient;
// mongoClient.connect("mongodb://cosmosdb-usttodos:VIKESrNLFS4XvJaiTQlaqQCZrRTFIZeduHsGgvwq4lokTMuLkr9W97BNeZMzLBvJ9rPHRgWJ8HUY1Go6bG8AhQ==@cosmosdb-usttodos.mongo.cosmos.azure.com:10255/?ssl=true&appName=@cosmosdb-usttodos@", function (err, db) {
//   db.close();
// });

const MongoClient = require("mongodb").MongoClient;
module.exports = async function (context, req) {

    const URL = process.env.MONGODB_URL;
    const DATABASE_NAME = process.env.MONGODB_DATABASE_NAME;
    const COLLECTION_NAME = process.env.MONGODB_COLLECTION_NAME;

    const connection = await MongoClient.connect(URL);
    const todosCollection = connection.db(DATABASE_NAME).collection(COLLECTION_NAME);

    const result = await todosCollection.find({}).toArray();

    await connection.close();

    return {
        body: JSON.stringify(result).replace(/_id/g,"id")
    };
}