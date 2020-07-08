const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Majeed:1122334455@cluster0.lhilx.mongodb.net/csystems?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});