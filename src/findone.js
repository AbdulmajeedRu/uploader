

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Majeed:1122334455@cluster0.lhilx.mongodb.net/csystems?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("csystems");
    dbo.collection("collection1").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result.filename);
      db.close();
    });
  });
  