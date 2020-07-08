

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Majeed:1122334455@cluster0.lhilx.mongodb.net/csystems?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("csystems");
    var myobj = [
      { filename: 'document1.docx', size: '354 KB',  filetype: 'docx'},
      { filename: 'document2.pdf', size: '222 KB',  filetype: 'pdf'},
      
    ];
    dbo.collection("collection1").insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
      db.close();
    });
  });