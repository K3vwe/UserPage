// A file for MongoDB data connection using mongoose 

const mongoose = require('mongoose');

module.exports = {
    connect: async DB_HOST => {
        // Connect to Mongo Database, use async since auth will be enabled
        await mongoose.connect(DB_HOST, {
            useNewUrlParser: true,
            useUbifiedTopology: true,
            useCreateINdex: true,
            useFindAndModify: false
        });

        // Log an error if connection failed
        mongoose.connection.on('error', err => {
            console.log('MongoDB Connection error. Please make sure MongoDB is running');
            process.exit();
        });

        close: () => {
            mongoose.connection.close();
        }
    }
}