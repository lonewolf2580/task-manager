const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect')
require('dotenv').config()

const port = 3000

// Middleware
app.use(express.static('./public'))
app.use(express.json())

// Routes
app.get('/hello', (req, res) => {
    res.send(`Hello!`);
});

app.use('/api/v1/tasks', tasks)

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start()