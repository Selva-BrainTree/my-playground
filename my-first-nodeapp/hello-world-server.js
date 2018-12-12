'use strict';

var fs = require('fs');
var orderId = '1234';

fs.readFile('order.json', function (err, data) {
    var json = JSON.parse(data);
    json.orderId = orderId;

    fs.writeFile("order.json", JSON.stringify(json));
});

console.log('This is after the read call');  