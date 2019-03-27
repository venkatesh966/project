'use strict';
var placesModel = require('./places.model');

module.exports = {

    create: function (data, callback) {
        placesModel.create(data, function (err, response) {
            callback(err, response);
        });
    },




    findAll: function (callback) {
        placesModel.find(function (err, response) {
            callback(err, response);
        });
    },

}