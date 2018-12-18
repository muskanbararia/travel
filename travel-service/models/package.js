//Do Not Modify :begin
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Do Not Modify :End


var PackageSchema = new Schema(
  {
    fixed_cost: {type: Number,  min: 1000 },
    location: [{type: Schema.Types.ObjectId, ref: 'Location'}],
    per_person_cost: {type: Number, min: 1000},
    manager: {type: Schema.Types.ObjectId, ref: 'Manager'},
    added_on:{type: Date, required: true}
  }
);




//Export model
module.exports = mongoose.model('Package', PackageSchema);