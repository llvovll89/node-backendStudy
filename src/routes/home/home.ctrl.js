'use strict';

// 함수 이용해서 외부 사용가능한 모듈 만들기
const homeFn = (req, res) => {
    res.render('home/index');
};

const loginFn = (req, res) => {
    res.render('home/login');
};

module.exports = {
    homeFn,
    loginFn,
};