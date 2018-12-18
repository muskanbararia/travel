//Do Not Modify :begin
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Do Not Modify :End


var LocationSchema = new Schema(
  {
    city: {type: String,required:true},
    state: {type: String, required:true},
    country: {type: String, required:true}
  }
);




//Export model
module.exports = mongoose.model('Location', LocationSchema);