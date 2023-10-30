
    const express = require('express');
    const app = express();
    const bodyParser = require("body-parser");
    const cors = require("cors");
    const dotenv = require('dotenv');
    dotenv.config();
    const db = require("./models");
    app.use(express.static('public'));

    var corsOptions = {
        Origin: "*"
    };

    app.use(cors(corsOptions));
    app.use(bodyParser.json({limit: '55mb'}));
    app.use(bodyParser.urlencoded({limit: '55mb',extended: true, parameterLimit:50000 }));

    db.mongoose.connect("mongodb+srv://"+process.env.DatabaseHost+"/"+process.env.DatabaseName, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);
const adminRoutes = require('./routes/adminRoutes');
app.use('/admin', adminRoutes);
const userRoutes = require('./routes/userRoutes');
app.use('/user', userRoutes);
const driverRoutes = require('./routes/driverRoutes');
app.use('/driver', driverRoutes);
const bookingsRoutes = require('./routes/bookingsRoutes');
app.use('/bookings', bookingsRoutes);
const couponsRoutes = require('./routes/couponsRoutes');
app.use('/coupons', couponsRoutes);
 
module.exports = app;