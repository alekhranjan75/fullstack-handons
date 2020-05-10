const express = require('express')
const mongoose = require('mongoose')

const authRoutes = require('./routes/authRoutes')
const User = require('./models/User')

const app = express()


const uri = require('./config/properties').mongoURI;
mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) throw err;
        console.log('Successfully connected to database');
    }
);

app.use('/', authRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('Node app is running on port', PORT);
})