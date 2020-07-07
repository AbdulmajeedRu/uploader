const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// CREATE SCHEMA
 const ItemSchema = new Schema({
   id:{
     type:Intl,
     required:true

   },
   fileName :{
     id:[{
      type:Intl,
      required:true}],
       type: String,
       required:true,
       date:{
        type: Date,
       default:  Date.now
   }} ,
  
   client:{
     clientID:Intl,
     firstName:[{
       type:String,
       required:true
     }],
     lastname:[{
      type:String,
      required:true
    }]
   }
  });

 module.exports= Item = mongoose.model('item',ItemSchema);

