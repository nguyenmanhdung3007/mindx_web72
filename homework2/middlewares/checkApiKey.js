const express = require('express')
const users = require('../data/index');

const checkApiKey = (req, res, next) => {
    const apiKey = req.query.apiKey;
    const user = users.find(user => user.apiKey === apiKey);
    if(!user) {
        return res.status(200).send('Unuthorized');
        console.log('Unauthorized')
    } 
    next();
}

module.exports = checkApiKey;