'use strict';

var makeRequest = require('xhr').makeRequest;
var config = require('config');

function fetch(cb) {
    makeRequest(config.FETCH_IP_ADDRESS_URL, function (responseText) {
        var response = JSON.parse(responseText);
        cb(response.resp.ip);
    });
}

module.exports = {
    fetch: fetch
};
