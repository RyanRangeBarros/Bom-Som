const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
var cors = require('cors');

module.exports = () => {

    const app = express()

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())


    consign()
        .include('controllers')
        .into(app)

    app.use(cors({ credentials: true, origin: 'localhost:2121' }));

    return app
}