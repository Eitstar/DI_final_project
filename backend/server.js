const express = require('express');
// const { get } = require('config');
const connectDB = require('./config/db');
// const Router = require('express');


const app = express();
//connectDB
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Welcome from get 5000 Json' }))


// Define Routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Hello from Port in ${PORT}`));