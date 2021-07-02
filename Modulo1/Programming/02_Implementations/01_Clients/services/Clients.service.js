const { MongoConnection } = require('../lib/Mongo')

//Collections
const COLLECTION = "clients";

const findUsers = () => new Promise(async (resolve, reject) => {
    try {
        //Inicializa mongoClient para que 
        // retorne a la DB
        const DB = await MongoConnection();
        //Obtenemos la Collectios
        const clients = DB.collection(COLLECTION);
        const clientsList = await clients.find({}).toArray();
        resolve(clientsList)

    } catch (error) {
        reject(error);
    }
});
module.exports = {
    findUsers,
};