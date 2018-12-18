//Do Not Modify :begin
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Do Not Modify :End


var BookingSchema = new Schema(
  {
    package: {type: Schema.Types.ObjectId, ref: 'Package'},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    travel_date: {type: Date, required:true},
    status: {type: Number, default:0},
    booked_on:{type: Date, required: true,default:Date()}
  }
);




//Export model
module.exports = mongoose.model('Booking', BookingSchema);