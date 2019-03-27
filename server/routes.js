
var cors = require('cors')
module.exports = function(app) {
    app.use(cors({
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": true,
        "allowedHeaders": ["Access-Control-Allow-Headers", "Origin, X-Requested-With,Client, Content-Type, Accept,Authorization"]
    }))


    app.use('/api/places', require('./api/places'));
}