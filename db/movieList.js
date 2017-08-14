var Movie = require('./movie');

function findMovie () {
    "use strict";
    return new Promise(function (resolve, reject) {
        Movie.find({type: 'newMovie'}, function (err, list) {
            if (err) {
                reject(err)
            } else {
                resolve(list)
            }
        })
    })
}

module.exports.findMovie = findMovie