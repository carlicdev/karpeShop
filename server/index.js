const express = require('express');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const app = express();

// routes
// database
// settings
app.set('PORT', process.env.PORT || 5000);

// middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// react static files
app.use(express.static(path.join(__dirname, '../client/build')));

// handles any request that don´t match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// start server
app.listen(app.get('PORT'), () => {
    console.log(`Server on PORT: ${app.get('PORT')}`);
});
