const express = require('express')
const users = require('../data/index');

let statistics = {};

const checkApiKey = (req, res, next) => {
    const apiKey = req.query.apiKey;
    const user = users.find(user => user.apiKey === apiKey);
    if(!user) {
        return res.status(200).send('Unauthorized');
        console.log('Unauthorized')
    }
    if (!statistics[user.username]) {
        statistics[user.username] = {
            user: user.username,
            student: 0,
            teacher: 0,
            subject: 0
        };
    };
    next();
}

module.exports = {checkApiKey, statistics};