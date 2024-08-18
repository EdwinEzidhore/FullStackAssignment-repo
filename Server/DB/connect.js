const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then((res) => {
        console.log(`mongoose database connected successfully on ${res.connection.host}`);
        
    })
}

module.exports = connectDB;