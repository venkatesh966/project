var mongoose = require('mongoose');

mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var placesSchema = new Schema({
    coordinates: {
        lat: {
            type: String
        },
        long: {
            type: String
        }
    },
    name: {
        type: String
    }
})


module.exports = mongoose.model('places', placesSchema);