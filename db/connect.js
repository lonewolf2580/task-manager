const mongoose = require('mongoose');

const connectionString = "mongodb+srv://linuslincom:tixkwL2fhBpxayou@cluster0.1oelrhv.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority"

const connectDB = (url) => {
    return mongoose.connect(connectionString, {
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    })
}

module.exports = connectDB