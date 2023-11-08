const mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    
    const db = {};
    
    db.mongoose = mongoose;
    
    db.user = require('./user');
db.admin = require('./admin');
db.user = require('./user');
db.driver = require('./driver');
db.bookings = require('./bookings');
db.coupons = require('./coupons');
db.transaction = require('./transaction');
module.exports = db;
    