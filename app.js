require('./db/connect')
const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const tasks = require('./routes/tasks');
const port = 3000

// Middleware
app.use(express.json())

// Routes
app.get('/hello', (req, res) => {
    res.send(`Hello!`);
});

app.use('/api/v1/tasks', tasks)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});