'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = require('express');
var cors_1 = require('cors');
// const express = require('express')
var app = (0, express_1.default)();
var port = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', function (req, res) {
  res.send('Hello World!');
});
exports.default = app;
