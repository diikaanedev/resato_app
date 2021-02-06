const express = require('express')

const app = express()

const bodyParser = require('body-parser');

const cors = require('cors');

const db = require('./config/db');


const path = require('path');

require('dotenv').config({
    path: './.env'
});

const port = 3000



/**
 * Import 
 */

const commandeRouter = require('./routes/commande');


/**
 * Use App
 */

app.use(cors());

app.use(bodyParser.json({
    limit: '10000mb'
}));

app.use(bodyParser.urlencoded({
    extended: true,
    limit: '10000mb'
}));

app.use(bodyParser.json({
    limit: '10000mb'
}));

app.use(bodyParser.urlencoded({
    extended: true,
    limit: '10000mb'
}));

app.use('/big-faim/api/commande' , commandeRouter);

db.sync({
    //force: true
}).then(_ => {

    app.listen(5004, () => {
        console.log('App listening on port 5004!');
    });

})
