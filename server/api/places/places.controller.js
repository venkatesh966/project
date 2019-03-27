
var placesService = require('./places.service')




exports.create = function (req, res, next) {
    //Calling service
    // data = {
    //     coordinates: {
    //         lat:req.body.lat,
    //         long:req.body.long
    //     },
    //     name: req.body.name
    // }
    placesService.create(req.body, function (err, data) {
        if (err || !data) {
            return err;
        }
        res.json(data);
    });
}


exports.get = function (req, res, next) {

    placesService.findAll(function (err, response) {
        if (err) return err;
        res.status(200).json(response);
    });
}


