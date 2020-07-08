const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// CREATE SCHEMA
 const ItemSchema = new Schema({
   
   fileName: {
       type: String,
       required: true
      },
    date:{
        type: Date,
       default:  Date.now},
    fileType: {
      type: String
      
    },
    fileURL:{
      type: String,
      
    }
   })

 module.exports= Item = mongoose.model('item',ItemSchema);

