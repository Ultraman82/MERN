const express = require('express');
const cors = require('cors');
const app = express();

const whitelist =['http://localhost:3000', 'http://localhost:3443'];
var corsOptionsDelegate = (req, callback) => {
    var cosrOptions;

    if(whitelist.indexOf(req.header('Origin')) !== -1) {
        cosrOptions = { origin: true };
    }
    else{
        cosrOptions = { origin:false }
    }
    callback(null, cosrOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);
