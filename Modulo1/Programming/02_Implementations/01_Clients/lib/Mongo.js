const {MongoClient} = require("mongodb");

const DB_NAME = "Clients"
const URL = "mongodb+srv://bryanatg:andres95@modulo-1.wyzex.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//async : para escribir asincrono y trabaja con await
var MongoConnection = () => new Promise(async(resolve, reject) => {
    try {
        let client = new MongoClient(URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,  
        })
        await client.connect()
        resolve(client.db(DB_NAME))

    } catch (error) {
        reject(error)
    }
}); 
module.exports.MongoConnection = MongoConnection;