'use strict';

var IPManager = require('ip');
var UI = require('ui');

var main = new UI.Card({
    title: 'What is my IP',
    icon: 'images/menu_icon.png',
    subtitle: 'Your IP is:',
    body: '...',
    subtitleColor: 'indigo',
    bodyColor: '#9a0036'
});

main.show();

IPManager.fetch(function (ip) {
    main.body(ip);
});
