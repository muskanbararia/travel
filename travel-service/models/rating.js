//Do Not Modify :begin
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Do Not Modify :End


var RatingSchema = new Schema(
  {
    package: {type: Schema.Types.ObjectId, ref: 'Package'},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    stars: {type: Number, default:5,max:5,min:0},
    added_on:{type: Date, required: true,default:Date()}
  }
);




//Export model
module.exports = mongoose.model('Booking', BookingSchema);