"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const student_route_1 = require("./app/modules/student/student.route");
// const express = require('express')
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//aplication route 
app.use('api/v1/students', student_route_1.studentRouter);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
