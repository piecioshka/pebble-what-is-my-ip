'use strict';

var ajax = require('ajax');

function makeRequest(url, callback) {
    var params = { url: url };

    ajax(params, function (response) {
        callback(response);
    }, function (error) {
        console.log('Request error: ' + error);
    });
}

module.exports = {
    makeRequest: makeRequest
};
