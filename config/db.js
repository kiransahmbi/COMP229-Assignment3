
let atlasDB = "mongodb+srv://appuser:eYOcx8UyDxVS8v0c@cluster0.yemkfnv.mongodb.net/contacts?retryWrites=true&w=majority";

// Database Setup
let mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', () => {
        console.log("Connected to MongoDB");
    })
    return mongodb;
};
