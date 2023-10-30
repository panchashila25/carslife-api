const mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    
    const db = {};
    
    db.mongoose = mongoose;
    
    db.user = require('./user');
db.auth = require('./auth');
db.admin = require('./admin');
db.user = require('./user');
db.driver = require('./driver');
db.bookings = require('./bookings');
db.coupons = require('./coupons');
module.exports = db;
    