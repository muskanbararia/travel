//Do Not Modify :begin
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bcrypt = require('bcrypt'),
var SALT_WORK_FACTOR = 10;
//Do Not Modify :End


var ManagerSchema = new Schema(
  {
    name: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    mobile: {type: Number, required: true, max:999999999},
    password: { type: String, required: true },
    address:{type:String},
    tier:{type:Number, default:0}
  }
);


//Password Hashing : Begin
ManagerSchema.pre('save', function(next) {
    var manager = this;

    // only hash the password if it has been modified (or is new)
    if (!manager.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(manager.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            manager.password = hash;
            next();
        });
    });
});

ManagerSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

//Password Hashing : End


//Export model
module.exports = mongoose.model('Manager', ManagerSchema);