'use strict';

var IPManager = require('ip');
var UI = require('ui');
var Vector2 = require('vector2');

var layout = new UI.Window();

// Header.
var header = new UI.Text({
    position: new Vector2(0, 30),
    size: new Vector2(144, 168),
    textAlign: 'center',
    font: 'gothic-24',
    text: 'What is my IP?'
});

// IP Address label.
var label = new UI.Text({
    position: new Vector2(0, 70),
    size: new Vector2(144, 168),
    textAlign: 'center',
    font: 'gothic-24-bold',
    text: 'loading...'
});

layout.add(header);
layout.add(label);

IPManager.fetch(function (ip) {
    label.text(ip);
});

layout.show();
