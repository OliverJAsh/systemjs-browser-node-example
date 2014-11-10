/* jshint node: true */
var System = require('systemjs');
require('./config');

System.import('query-string')
    .then(function (queryString) {
        global.console.log(queryString);
    })
    .catch(function (error) {
        setTimeout(function () {
            throw error;
        }, 0);
    });
