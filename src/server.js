'use strict';

// 모듈
const express = require("express");
const app = express();
const morgan = require('morgan');

// 라우팅
const home = require('./routes/home'); // 내가 만든 index.js

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use('/' , home); // use - 미들웨어 등록해주는 메서드
app.use(morgan('tiny'));

module.exports = app;